import React from "react";
import { useSetupPage, useSetupInfo } from "hooks";
import {
  SetupPageContainer,
  SetupPageTopButtonBar,
  SetupPasswordPageTitleSection,
  SetupPasswordFormSection,
} from "../../organisms/Setup";

export const SetupPasswordPage = () => {
  const { setCurrentPage } = useSetupPage();
  const { setupInfo } = useSetupInfo();

  const onClickBack = () =>
    setCurrentPage(setupInfo.setupType === "import" ? "choose" : "create");

  return (
    <SetupPageContainer>
      <SetupPageTopButtonBar>
        <button onClick={onClickBack}>Back</button>
      </SetupPageTopButtonBar>
      <SetupPasswordPageTitleSection />
      <SetupPasswordFormSection />
    </SetupPageContainer>
  );
};
