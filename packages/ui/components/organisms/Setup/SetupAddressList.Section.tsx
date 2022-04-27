import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CryptoKeypair } from "types";
import { useSetupInfo } from "hooks";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { abbrevPublicKey, restoreKeypairs } from "utils/account";

const STRIDE = 5;

export const SetupAddressListSection: React.FC<{
  setKeypair: (keypair: CryptoKeypair) => void;
}> = ({ setKeypair }) => {
  const [selected, setSelected] = useState<number>(0);
  const [indexRange, setIndexRange] = useState<{ start: number; end: number }>({
    start: 0,
    end: STRIDE,
  });
  const [keypairList, setKeypairList] = useState<CryptoKeypair[]>([]);
  const {
    setupInfo: { seedWords, blockchain },
  } = useSetupInfo();

  const swipe = (direction: "prev" | "next") => {
    const { start, end } = indexRange;
    if (start === 0 && direction === "prev") return;
    const newRange =
      direction === "prev"
        ? { start: start - STRIDE, end: end - STRIDE }
        : { start: start + STRIDE, end: end + STRIDE };
    setIndexRange(newRange);
    setKeypairList(
      restoreKeypairs(seedWords, blockchain, newRange.start, newRange.end)
    );
  };

  const onClickListItem = (keypair: CryptoKeypair) => {
    setKeypair(keypair);
    setSelected(keypair.pathIndex);
  };

  useEffect(() => {
    setKeypairList(restoreKeypairs(seedWords, blockchain, 0, STRIDE));
  }, []);

  return (
    <Container>
      <SwipeButton
        disabled={indexRange.start === 0}
        onClick={() => swipe("prev")}
      >
        <ChevronLeftIcon />
      </SwipeButton>
      <List>
        {keypairList.map((keypair) => (
          <ListItem
            key={keypair.pathIndex}
            selected={keypair.pathIndex === selected}
            onClick={() => onClickListItem(keypair)}
          >
            {abbrevPublicKey(keypair.publicKey, 8)}
          </ListItem>
        ))}
      </List>
      <SwipeButton onClick={() => swipe("next")}>
        <ChevronRightIcon />
      </SwipeButton>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 250px;
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const ListItem = styled.h3<{ selected: boolean }>`
  cursor: pointer;
  color: var(--black);
  text-align: center;
  opacity: ${(props) => (props.selected ? "1" : "0.2")};
  transition: opacity 0.2s;
  border-radius: 10px;
  :hover {
    opacity: 1;
  }
`;

const SwipeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 100%;
  background-color: transparent;
  svg {
    fill: var(--black);
    stroke-width: 4px;
    width: 32px;
    height: 32px;
  }
  :disabled {
    cursor: default;
    opacity: 0.2;
  }
`;
