import React, { useState } from "react";
import styled from "styled-components";
import { usePopupPage, useSetupInfo } from "hooks";
import { NextButton, PasswordInput, Warning } from "../../atoms";
import { SetupFormSection } from "./SetupFormSection";

export const SetupPasswordFormSection = () => {
  const { setCurrentPage: setPopupPage } = usePopupPage();
  const { setupInfo, setSetupInfo } = useSetupInfo();
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onClickNext = () => {
    if (password.length < 5 || password.length > 12) {
      setErrorMessage("Password should be 5~12 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Password mismatch. Try again.");
      return;
    }
    setErrorMessage("");
    setSetupInfo({ ...setupInfo, password });
    setPopupPage("main");
  };

  return (
    <>
      <FormSection>
        <div>
          {errorMessage.length > 0 && <FormWarning>{errorMessage}</FormWarning>}
          <h4>New Password</h4>
          <PasswordInput
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <h4>Confirm Password</h4>
          <PasswordInput
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>
      </FormSection>
      <NextButton onClick={onClickNext}>Proceed</NextButton>
    </>
  );
};

const FormSection = styled(SetupFormSection)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  div {
    width: 100%;
    h4 {
      margin-bottom: 12px;
      text-align: left;
    }
    input {
      width: 100%;
    }
  }
`;

const FormWarning = styled(Warning)`
  margin-bottom: 12px;
`;
