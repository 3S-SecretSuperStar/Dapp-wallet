import React from "react";
import styled from "styled-components";
import { XIcon } from "@heroicons/react/outline";
import { useModal } from "hooks";

type ModalHeight = "full" | "tall" | "half" | "small";

export const ModalPageContainer: React.FC<{ modalHeight?: ModalHeight }> = ({
  children,
  modalHeight = "full",
}) => {
  const { setIsModalOpen } = useModal();

  return (
    <>
      <Background onClick={() => setIsModalOpen(false)} />
      <Container modalHeight={modalHeight}>
        <XButton onClick={() => setIsModalOpen(false)}>
          <XIcon />
        </XButton>
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
  z-index: 55;
  background-color: var(--bright);
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
`;

const Contents = styled.div`
  position: relative;
  margin: 36px 16px 0px 16px;
  width: auto;
  height: 100%;
`;

const XButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  svg {
    fill: var(--black);
    width: 16px;
    height: 16px;
    stroke-width: 3px;
  }
`;
