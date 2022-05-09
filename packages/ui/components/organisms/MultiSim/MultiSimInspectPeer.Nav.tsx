import React from "react";
import styled from "styled-components";
import { useInspectPeer } from "hooks";
import { Tabs } from "../../molecules";

export const MultiSimInspectPeerNav = () => {
  const { currentPage, setCurrentPage } = useInspectPeer();
  return (
    <Nav>
      <Tabs
        currentPage={currentPage}
        tabItems={[
          {
            text: "History",
            page: "history",
            onClick: () => {
              setCurrentPage("history");
            },
          },
          {
            text: "Info",
            page: "info",
            onClick: () => {
              setCurrentPage("info");
            },
          },
        ]}
      />
    </Nav>
  );
};

const Nav = styled.nav`
  margin-bottom: 20px;
`;
