import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { TestWallet } from "types";
import { TestUserItem, TestUserItemEmpty } from "../../molecules";

export const MultiSimTestUsersSection = () => {
  const [peerList, setPeerList] = useState<TestWallet[]>([]);
  const limit = useMemo(() => 10 - peerList.length, [peerList]);
  return (
    <Container>
      {peerList.map((peer) => (
        <TestUserItem key={peer.publicKey} {...peer} />
      ))}
      {limit > 0 && (
        <TestUserItemEmpty
          limit={limit}
          peerList={peerList}
          setPeerList={setPeerList}
        />
      )}
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  column-gap: 16px;
  row-gap: 20px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;
