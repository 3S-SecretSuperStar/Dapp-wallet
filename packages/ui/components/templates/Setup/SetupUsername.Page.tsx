import React from "react";
import styled from "styled-components";
import { usePopupPage, useSetupPage } from "hooks";
import { Button } from "../../atoms";
import {
  SetupPageContainer,
  SetupPageTopButtonBar,
  SetupUsernamePageInputSection,
  SetupUsernamePageTitleSection,
} from "../../organisms/Setup";

export const SetupUsernamePage = () => {
  const { setCurrentPage } = useSetupPage();
  const { setCurrentPage: setPage } = usePopupPage();
  const onClickBack = () => setCurrentPage("password");
  const onClickStart = () => {
    setPage("main");
  };

  return (
    <SetupPageContainer>
      <SetupPageTopButtonBar>
        <button onClick={onClickBack}>Back</button>
      </SetupPageTopButtonBar>
      <SetupUsernamePageTitleSection />
      <SetupUsernamePageInputSection />
      <StartButton onClick={onClickStart}>
        <h3>Start Pengwyn</h3>
      </StartButton>
    </SetupPageContainer>
  );
};

const StartButton = styled(Button)`
  background-image: var(--primary-gradient);
  * {
    color: white;
  }
`;
