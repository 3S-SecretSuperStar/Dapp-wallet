import React from "react";
import styled from "styled-components";
import { useSetupPage, useSetupInfo } from "@hooks";
import { BRAND } from "@utils/contants";
import { PasswordInput } from "@components/common/PasswordInput";
import { NextButton, GradientH3 } from "@components/common";
import {
  SetupFormSection,
  SetupPageContainer,
  SetupPageTitleSection,
  SetupPageTopButtonBar,
} from "@components/Setup";

export const SetupPasswordPage = () => {
  const { setCurrentPage } = useSetupPage();
  const { setupInfo, setSetupInfo } = useSetupInfo();
  const onClickBack = () =>
    setCurrentPage(setupInfo.setupType === "import" ? "import" : "create");
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
          <PasswordInput />
        </div>
        <div>
          <h4>Confirm Password</h4>
          <PasswordInput />
        </div>
      </PasswordSection>
      <NextButton>Proceed</NextButton>
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
