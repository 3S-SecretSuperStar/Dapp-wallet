import React from "react";
import { usePopupPage, useSetupInfo } from "hooks";
import {
  SetupFirstPageChoiceSection,
  SetupFirstPageTitleSection,
  SetupPageContainer,
  SetupPageTopButtonBar,
} from "../../organisms/Setup";

export const SetupFirstPage = () => {
  const { setupInfo } = useSetupInfo();
  const { setCurrentPage: setPage } = usePopupPage();
  const onClickBack = () =>
    setupInfo.revisit ? setPage("main") : setPage("welcome");

  return (
    <SetupPageContainer>
      <SetupPageTopButtonBar>
        <button onClick={onClickBack}>Back</button>
      </SetupPageTopButtonBar>
      <SetupFirstPageTitleSection />
      <SetupFirstPageChoiceSection />
    </SetupPageContainer>
  );
};
