import React, { useState } from "react";
import styled from "styled-components";
import { useSetupPage, useSetupInfo, usePopupPage } from "hooks";
import { BRAND } from "utils/contants";
import { NextButton, GradientH3, PasswordInput } from "../../atoms";
import {
  SetupFormSection,
  SetupPageContainer,
  SetupPageTitleSection,
  SetupPageTopButtonBar,
} from "../../organisms/Setup";

export const SetupPasswordPage = () => {
  const { setCurrentPage } = useSetupPage();
  const { setCurrentPage: setPopupPage } = usePopupPage();
  const { setupInfo, setSetupInfo } = useSetupInfo();
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const onClickBack = () =>
    setCurrentPage(setupInfo.setupType === "import" ? "import" : "create");

  const onClickNext = () => {
    if (password !== confirmPassword) return;
    setSetupInfo({ ...setupInfo, password });
    setPopupPage("main");
  };

  return (
    <SetupPageContainer>
      <SetupPageTopButtonBar>
        <button onClick={onClickBack}>Back</button>
      </SetupPageTopButtonBar>
      <SetupPageTitleSection>
        <img src="/images/common/logo.svg" alt="logo image" />
        <h1>
          Create
          <br />
          New Password
        </h1>
        <GradientH3>
          Last step. You are almost ready to enjoy {BRAND}!
        </GradientH3>
      </SetupPageTitleSection>
      <PasswordSection>
        <div>
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
      </PasswordSection>
      <NextButton onClick={onClickNext}>Proceed</NextButton>
    </SetupPageContainer>
  );
};

const PasswordSection = styled(SetupFormSection)`
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
