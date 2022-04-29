import React from "react";
import styled from "styled-components";
import { XIcon } from "@heroicons/react/outline";
import { useModalPage } from "hooks";

type ModalHeight = "full" | "tall" | "half" | "small";

export const ModalPageContainer: React.FC<{
  modalHeight?: ModalHeight;
  pageTitle?: string;
}> = ({ children, pageTitle = "", modalHeight = "full" }) => {
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
        <Contents>{children}</Contents>
      </Container>
    </>
  );
};

const Background = styled.div`
  position: fixed;
  z-index: 50;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: var(--dark);
  opacity: 0.4;
`;

const Container = styled.div<{
  modalHeight: ModalHeight;
}>`
  position: fixed;
  z-index: 51;
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
      case "full":
        return "50%";
      case "full":
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

const Contents = styled.div`
  position: relative;
  z-index: 52;
  margin: 84px 16px 64px 16px;
  width: auto;
  height: auto;
`;

const Header = styled.header`
  position: fixed;
  z-index: 53;
  height: 72px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  border-radius: 30px 30px 0px 0px;
  h1 {
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
