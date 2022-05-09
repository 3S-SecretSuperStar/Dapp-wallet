import React from "react";
import styled from "styled-components";
import { XIcon } from "@heroicons/react/outline";
import { useHigherModalPage, useModalPage } from "hooks";
import { Tabs, TabsProps } from "../molecules";

type ModalHeight = "full" | "tall" | "half" | "small";

interface ModalPageContainerProps {
  modalHeight?: ModalHeight;
  pageTitle?: string;
  tabsProps?: TabsProps;
}

export const ModalPageContainer: React.FC<ModalPageContainerProps> = ({
  children,
  pageTitle = "",
  modalHeight = "full",
  tabsProps = { tabItems: [], currentPage: "" },
}) => {
  const { setModalOpen } = useModalPage();

  return (
    <>
      <Background onClick={() => setModalOpen(false)} />
      <Container modalHeight={modalHeight}>
        <Header>
          <TitleAndClose>
            <button onClick={() => setModalOpen(false)}>
              <XIcon />
            </button>
            {pageTitle.length > 0 && <h1>{pageTitle}</h1>}
          </TitleAndClose>
          {tabsProps.currentPage !== "" && (
            <Nav>
              <Tabs {...tabsProps} />
            </Nav>
          )}
        </Header>
        <Contents modalHeight={modalHeight}>{children}</Contents>
      </Container>
    </>
  );
};

export const HigherModalPageContainer: React.FC<ModalPageContainerProps> = ({
  children,
  pageTitle = "",
  modalHeight = "half",
  tabsProps = { tabItems: [], currentPage: "" },
}) => {
  const { setOpen } = useHigherModalPage();
  return (
    <>
      <Background higher onClick={() => setOpen(false)} />
      <Container higher modalHeight={modalHeight}>
        <Header higher>
          <TitleAndClose>
            <button onClick={() => setOpen(false)}>
              <XIcon />
            </button>
            {pageTitle.length > 0 && <h2>{pageTitle}</h2>}
          </TitleAndClose>
          {tabsProps.currentPage !== "" && (
            <Nav>
              <Tabs {...tabsProps} />
            </Nav>
          )}
        </Header>
        <Contents modalHeight={modalHeight} higher>
          {children}
        </Contents>
      </Container>
    </>
  );
};

const Background = styled.div<{ higher?: boolean }>`
  position: fixed;
  z-index: ${(props) => (props.higher ? "54" : "50")};
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: var(--dark);
  opacity: 0.4;
`;

const Container = styled.div<{
  modalHeight: ModalHeight;
  higher?: boolean;
}>`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: ${(props) => (props.higher ? "55" : "51")};
  background-color: var(--white);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 22px 22px 0px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${(props) => {
    switch (props.modalHeight) {
      case "full":
        return "100%";
      case "tall":
        return "90%";
      case "half":
        return "60%";
      case "small":
        return "45%";
    }
  }};
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Contents = styled.div<{ higher?: boolean; modalHeight: ModalHeight }>`
  position: relative;
  z-index: ${(props) => (props.higher ? "56" : "52")};
  margin: 150px 18px 0px 18px;
  width: auto;
  height: auto;
`;

const Header = styled.header<{ higher?: boolean }>`
  position: fixed;
  z-index: ${(props) => (props.higher ? "57" : "53")};
  width: 100%;
  height: 150px;
  background-color: var(--white);
  border-radius: 22px 22px 0px 0px;
`;

const TitleAndClose = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  margin: 12px 16px 12px 16px;
  h1,
  h2 {
    margin-top: 16px;
    text-align: left;
  }
  button {
    margin-bottom: 16px;
    svg {
      fill: var(--black);
      width: 16px;
      height: 16px;
      stroke-width: 3px;
    }
  }
`;

const Nav = styled.nav`
  margin: 12px 16px 12px 16px;
`;
