import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SetupPageContainer } from "@components/popup/Setup/SetupPageContainer";
import { SetupPageTopButtonBar } from "@components/popup/Setup/SetupPageTopButtonBar";
import { SetupPageTitleSection } from "@components/popup/Setup/SetupPageTitleSection";
import { NextButton } from "@components/popup/common/Button";
import { GradientH3 } from "@components/popup/common/GradientText";
import { useSetupPage } from "@hooks/useSetupPage";
import { useSetupInfo } from "@hooks/useSetupInfo";
import { BRAND } from "@utils/contants";
import { PasswordInput } from "@components/popup/common/PasswordInput";
import { SetupFormSection } from "@components/popup/Setup/SetupFormSection";

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
