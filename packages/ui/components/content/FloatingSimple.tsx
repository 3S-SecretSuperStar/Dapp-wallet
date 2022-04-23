import styled from "styled-components";
import React from "react";
import { ArrowsExpandIcon, MenuAlt1Icon } from "@heroicons/react/outline";

const SimpleButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 12px;
  align-items: center;
  justify-content: center;
`;

const RoundButton = styled.button<{ bgColor: string }>`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  margin: 0px 10px;
`;

export const FloatingSimple: React.FC<{
  toggleExpand: () => void;
}> = ({ toggleExpand }) => {
  return (
    <SimpleButtonContainer>
      <RoundButton bgColor="#138086" onClick={toggleExpand}>
        <ArrowsExpandIcon style={{ width: 48, height: 48, color: "white" }} />
      </RoundButton>
      <RoundButton bgColor="#EEB462">
        <MenuAlt1Icon style={{ width: 48, height: 48, color: "white" }} />
      </RoundButton>
    </SimpleButtonContainer>
  );
};
