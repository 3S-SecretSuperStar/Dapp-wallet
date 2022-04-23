import { IntroPageContainer, IntroNextButton } from "ui/components/Intro";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { usePopupPage } from "hooks";
import React from "react";
import styled from "styled-components";

export const anyword =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut..";

export const IntroManagePage = () => {
  const { setCurrentPage } = usePopupPage();
  return (
    <Container>
      <div>
        <img src="/images/Intro/manage.svg" alt="manage img" />
      </div>
      <h2>Pay Friends</h2>
      <p>{anyword}</p>
      <IntroNextButton onClick={() => setCurrentPage("welcome")}>
        <ArrowRightIcon />
      </IntroNextButton>
    </Container>
  );
};

const Container = styled(IntroPageContainer)`
  background-color: var(--strong);
  * {
    color: var(--bright);
  }
`;
