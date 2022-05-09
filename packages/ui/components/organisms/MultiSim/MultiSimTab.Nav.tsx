import React from "react";
import styled from "styled-components";
import { useMultiSimPage } from "hooks";
import { Tabs } from "../../molecules";

export const MultiSimTabNav = () => {
  const { currentPage, setCurrentPage } = useMultiSimPage();
  return (
    <Nav>
      <Tabs
        currentPage={currentPage}
        tabItems={[
          {
            text: "All",
            page: "all",
            onClick: () => {
              setCurrentPage("all");
            },
          },
          {
            text: "ETH",
            page: "eth",
            onClick: () => {
              setCurrentPage("eth");
            },
          },
          {
            text: "SOL",
            page: "sol",
            onClick: () => {
              setCurrentPage("sol");
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
