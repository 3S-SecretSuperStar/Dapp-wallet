import React from "react";
import {
  SetupFirstPageChoiceSection,
  SetupFirstPageTitleSection,
  SetupPageContainer,
  SetupPageTopButtonBar,
} from "../../organisms/Setup";

export const SetupFirstPage = () => {
  return (
    <SetupPageContainer>
      <SetupPageTopButtonBar>
        <button>Help</button>
      </SetupPageTopButtonBar>
      <SetupFirstPageTitleSection />
      <SetupFirstPageChoiceSection />
    </SetupPageContainer>
  );
};
