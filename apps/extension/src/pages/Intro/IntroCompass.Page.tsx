import React from "react";
import styled from "styled-components";
import { IntroPageContainer, IntroNextButton } from "ui/components/Intro";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { useIntroPage, usePopupPage } from "hooks";
import { anyword } from "./IntroManage.Page";

export const IntroCompassPage = () => {
  const { setCurrentPage } = useIntroPage();
  const { setCurrentPage: setPopupPage } = usePopupPage();
  return (
    <Container>
      <div>
        <button onClick={() => setPopupPage("welcome")}>Skip</button>
        <img src="/images/Intro/compass.svg" alt="compass img" />
      </div>
      <h2>Pay Friends</h2>
      <p>{anyword}</p>
      <IntroNextButton onClick={() => setCurrentPage("friends")}>
        <ArrowRightIcon />
      </IntroNextButton>
    </Container>
  );
};

const Container = styled(IntroPageContainer)`
  background-color: var(--warm);
  color: var(--black);
`;
