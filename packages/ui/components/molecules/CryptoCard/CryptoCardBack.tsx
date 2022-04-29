import styled from "styled-components";
import React from "react";
import { BookOpenIcon, RefreshIcon } from "@heroicons/react/solid";
import { Blockchain } from "types";
import { QRCodeSVG } from "qrcode.react";
import { IoSendSharp } from "react-icons/io5";
import { BigCircle, SmallCircle } from "./CryptoCardCommon";

const memberHeight = 100;

export const CryptoCardBack: React.FC<{
  blockchain: Blockchain;
  publicKey: string;
  toggleFlip: () => void;
}> = ({ blockchain, publicKey, toggleFlip }) => {
  return (
    <Back blockchain={blockchain}>
      <QRCodeSVG
        value={publicKey}
        size={memberHeight}
        bgColor={"transparent"}
        fgColor={"#FFFFFF"}
        level="L"
        includeMargin={false}
      />
      <QuickMenu>
        <QuickMenuItem>
          <IoSendSharp />
        </QuickMenuItem>
        <QuickMenuItem>
          <BookOpenIcon />
        </QuickMenuItem>
        <QuickMenuItem onClick={toggleFlip}>
          <RefreshIcon />
        </QuickMenuItem>
      </QuickMenu>
      <BigCircleReversed />
      <SmallCircleReversed />
    </Back>
  );
};

const Back = styled.div<{ blockchain: Blockchain }>`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: ${(props) =>
    props.blockchain === "eth" ? "var(--purple)" : "var(--dark)"};
  border-radius: 20px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const QuickMenu = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: ${memberHeight}px;
  padding: 0px 12px 0px 20px;
`;

const QuickMenuItem = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 6px;
  svg {
    width: 20px;
    height: 20px;
    fill: var(--white);
  }
`;

const BigCircleReversed = styled(BigCircle)`
  && {
    left: -60px;
  }
`;

const SmallCircleReversed = styled(SmallCircle)`
  && {
    left: -40px;
  }
`;
