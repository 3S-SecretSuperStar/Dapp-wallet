import { useMultiSimPage } from "hooks";
import React from "react";
import styled from "styled-components";
import { Tabs } from "../../molecules";

export const MultiSimTabNav = () => {
  const { setCurrentPage } = useMultiSimPage();
  return (
    <Nav>
      <Tabs
        tabItems={[
          {
            text: "All",
            onClick: () => {
              setCurrentPage("all");
            },
          },
          {
            text: "ETH",
            onClick: () => {
              setCurrentPage("eth");
            },
          },
          {
            text: "SOL",
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
