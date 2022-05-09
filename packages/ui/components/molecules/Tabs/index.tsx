import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../atoms";

interface TabItem {
  text: string;
  page: string;
  onClick: () => void;
}

interface TabsProps {
  tabItems: TabItem[];
  currentPage: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabItems, currentPage }) => {
  const [tabText, setTabText] = useState<string>(tabItems[0].text);
  return (
    <GridContainer>
      {tabItems.map((item) => (
        <TabItemButton
          key={item.text}
          selected={currentPage === item.page}
          onClick={() => {
            item.onClick();
            setTabText(item.text);
          }}
        >
          {item.text}
        </TabItemButton>
      ))}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  background-color: var(--lightGrey);
  padding: 8px 8px 8px 8px;
  border-radius: 20px;
`;

const TabItemButton = styled(Button)<{ selected: boolean }>`
  && {
    background-color: ${(props) =>
      props.selected ? "var(--black)" : "transparent"};
    color: ${(props) => (props.selected ? "var(--lightGrey)" : "var(--black)")};
    min-width: 0px;
  }
`;
