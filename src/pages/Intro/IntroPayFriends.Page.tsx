import { IntroContainer, IntroNextButton } from "@components/popup/Intro";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { useIntroPage } from "@hooks/useIntroPage";
import { usePopupPage } from "@hooks/usePopupPage";
import React from "react";
import styled from "styled-components";
import { anyword } from "./IntroManage.Page";

export const IntroPayFriendsPage = () => {
  const { setCurrentPage } = useIntroPage();
  const { setCurrentPage: setPopupPage } = usePopupPage();
  return (
    <Container>
      <div>
        <button onClick={() => setPopupPage("main")}>Skip</button>
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

const Container = styled(IntroContainer)`
  background-color: var(--primary);
  * {
    color: var(--bright);
  }
`;
