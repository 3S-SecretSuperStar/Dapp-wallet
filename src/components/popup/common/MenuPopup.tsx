import {
  ChatIcon,
  CogIcon,
  DownloadIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import React from "react";
import styled from "styled-components";
import { usePopupMenu } from "../../../hooks/usePopupMenu";
import { PopupPage, usePopupPage } from "../../../hooks/usePopupPage";

export const MenuPopup = () => {
  const { setCurrentPage } = usePopupPage();
  const { setOpen } = usePopupMenu();
  const onMenuItemClick = (page: PopupPage) => {
    setCurrentPage(page);
    setOpen(false);
  };
  return (
    <MenuContainer>
      <MenuHeader>
        <h2>My Accounts</h2>
        <button onClick={() => setOpen(false)}>Close</button>
      </MenuHeader>
      <MenuSection>
        <MenuItem onClick={() => onMenuItemClick("createWallet")}>
          <PlusIcon />
          <h3>Create Account</h3>
        </MenuItem>
        <MenuItem onClick={() => onMenuItemClick("importWallet")}>
          <DownloadIcon />
          <h3>Import Account</h3>
        </MenuItem>
      </MenuSection>
      <MenuSection>
        <MenuItem onClick={() => onMenuItemClick("support")}>
          <ChatIcon />
          <h3>Support</h3>
        </MenuItem>
        <MenuItem onClick={() => onMenuItemClick("settings")}>
          <CogIcon />
          <h3>Settings</h3>
        </MenuItem>
      </MenuSection>
    </MenuContainer>
  );
};

const h2FontSize = "18px";
const h3FontSize = "18px";
const commonColor = "#333333";

const MenuContainer = styled.div`
  position: fixed;
  top: 64px;
  z-index: 50;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 300px;
`;

const MenuSection = styled.div`
  border-top: 1px solid ${commonColor};
  padding: 4px;
`;

const MenuHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  h2 {
    font-size: ${h2FontSize};
    font-weight: 600;
    color: ${commonColor};
  }
  button {
    border: 1px solid ${commonColor};
    border-radius: 8px;
    padding: 4px 8px;
    color: ${commonColor};
  }
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 8px;
  color: ${commonColor};
  font-weight: 400;
  cursor: pointer;
  :hover {
    font-weight: 600;
  }
  svg {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
  h3 {
    font-size: ${h3FontSize};
  }
`;
