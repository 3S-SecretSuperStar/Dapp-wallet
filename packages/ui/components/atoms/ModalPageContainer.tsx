import React from "react";
import styled from "styled-components";
import { XIcon } from "@heroicons/react/outline";
import { useHigherModalPage, useModalPage } from "hooks";

type ModalHeight = "full" | "tall" | "half" | "small";

interface ModalPageContainerProps {
  modalHeight?: ModalHeight;
  pageTitle?: string;
}

export const ModalPageContainer: React.FC<ModalPageContainerProps> = ({
  children,
  pageTitle = "",
  modalHeight = "full",
}) => {
  const { setModalOpen } = useModalPage();

  return (
    <>
      <Background onClick={() => setModalOpen(false)} />
      <Container modalHeight={modalHeight}>
        <Header>
          <button onClick={() => setModalOpen(false)}>
            <XIcon />
          </button>
          {pageTitle.length > 0 && <h1>{pageTitle}</h1>}
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
}) => {
  const { setOpen } = useHigherModalPage();
  return (
    <>
      <Background higher onClick={() => setOpen(false)} />
      <Container higher modalHeight={modalHeight}>
        <Header higher>
          <button onClick={() => setOpen(false)}>
            <XIcon />
          </button>
          {pageTitle.length > 0 && <h2>{pageTitle}</h2>}
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
  z-index: ${(props) => (props.higher ? "55" : "51")};
  background-color: var(--white);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-top: ${(props) => {
    switch (props.modalHeight) {
      case "full":
        return "10%";
      case "tall":
        return "25%";
      case "half":
        return "50%";
      case "small":
        return "75%";
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
  margin-left: 16px;
  margin-right: 16px;
  margin-top: ${(props) => {
    switch (props.modalHeight) {
      case "full":
        return "84px";
      case "tall":
        return "72px";
      case "half":
        return "56px";
      case "small":
        return "44px";
    }
  }};
  margin-bottom: ${(props) => {
    switch (props.modalHeight) {
      case "full":
        return "15%";
      case "tall":
        return "30%";
      case "half":
        return "55%";
      case "small":
        return "80%";
    }
  }};
  width: auto;
  height: auto;
`;

const Header = styled.header<{ higher?: boolean }>`
  position: fixed;
  z-index: ${(props) => (props.higher ? "57" : "53")};
  height: 72px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  border-radius: 22px 22px 0px 0px;
  h1,
  h2 {
    margin-top: 12px;
    margin-left: 16px;
    text-align: left;
  }
  button {
    margin-right: 16px;
    margin-bottom: 12px;
    svg {
      fill: var(--black);
      width: 16px;
      height: 16px;
      stroke-width: 3px;
    }
  }
`;
