import { CheckCircleIcon } from "@heroicons/react/outline";
import React from "react";
import styled from "styled-components";
import { abbrevPublicKey } from "../../../utils/account";

export const TxHistorySection = () => {
  return (
    <TxHistorySectionContainer>
      <h2>Recent</h2>
      <div>
        <HistoryItemSample method="Receive" />
        <HistoryItemSample method="Send" />
        <HistoryItemSample method="Receive" />
        <HistoryItemSample method="Receive" />
        <HistoryItemSample method="Send" />
        <HistoryItemSample method="Receive" />
      </div>
    </TxHistorySectionContainer>
  );
};

const HistoryItemSample: React.FC<{ method: string }> = ({ method }) => {
  return (
    <HistoryItem>
      <CheckCircleIcon />
      <div>
        <h3>{method}</h3>
        <p>
          From <span>{abbrevPublicKey("1dklfjal123jfgkl")}</span>
        </p>
      </div>
    </HistoryItem>
  );
};

const TxHistorySectionContainer = styled.section`
  width: 90%;
  h2 {
    text-align: left;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
  }
`;

const HistoryItem = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 4px 0px 12px 8px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0);
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  svg {
    width: 32px;
    height: 32px;
  }
  div {
    margin-left: 20px;
    h3 {
      text-align: left;
    }
    p {
      text-align: left;
      margin-top: 4px;
      color: var(--primary);
      span {
        opacity: 0.8;
        font-style: italic;
      }
    }
  }
`;
