import React from "react";
import styled from "styled-components";
import { IntroPageContainer, IntroNextButton } from "@components/Intro";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { useIntroPage, usePopupPage } from "@hooks";
import { anyword } from "./IntroManage.Page";

export const IntroPayFriendsPage = () => {
  const { setCurrentPage } = useIntroPage();
  const { setCurrentPage: setPopupPage } = usePopupPage();
  return (
    <Container>
      <div>
        <button onClick={() => setPopupPage("welcome")}>Skip</button>
        <img src="/images/Intro/friends.svg" alt="friends img" />
      </div>
      <h2>Pay Friends</h2>
      <p>{anyword}</p>
      <IntroNextButton onClick={() => setCurrentPage("manage")}>
        <ArrowRightIcon />
      </IntroNextButton>
    </Container>
  );
};

const Container = styled(IntroPageContainer)`
  background-color: var(--primary);
  * {
    color: var(--bright);
  }
`;
