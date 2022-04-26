import {
  BellIcon,
  BookOpenIcon,
  HomeIcon,
  QrcodeIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { usePopupPage } from "hooks";
import React from "react";
import { IoScanSharp } from "react-icons/io5";
import styled from "styled-components";
import { IconButton } from "../atoms/IconButton";

export const BottomNav = () => {
  const { currentPage, setCurrentPage } = usePopupPage();
  return (
    <Container>
      <NormalIconButton
        onClick={() => setCurrentPage("main")}
        selected={currentPage === "main"}
      >
        <HomeIcon />
      </NormalIconButton>
      <NormalIconButton
        onClick={() => setCurrentPage("history")}
        selected={currentPage === "history"}
      >
        <BookOpenIcon />
      </NormalIconButton>
      <QRCodeIconButton onClick={() => setCurrentPage("qrcode")}>
        <IoScanSharp />
      </QRCodeIconButton>
      <NormalIconButton
        onClick={() => setCurrentPage("activity")}
        selected={currentPage === "activity"}
      >
        <BellIcon />
      </NormalIconButton>
      <NormalIconButton
        onClick={() => setCurrentPage("profile")}
        selected={currentPage === "profile"}
      >
        <UserIcon />
      </NormalIconButton>
    </Container>
  );
};

const Container = styled.nav`
  position: fixed;
  width: 100%;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 64px;
`;

const NormalIconButton = styled(IconButton)<{ selected: boolean }>`
  opacity: ${(props) => (props.selected ? "1" : "0.5")};
`;

const QRCodeIconButton = styled(IconButton)`
  background-color: var(--primary);
  box-shadow: 0px 1px 5px var(--primary);
  svg {
    fill: var(--bright);
  }
`;
