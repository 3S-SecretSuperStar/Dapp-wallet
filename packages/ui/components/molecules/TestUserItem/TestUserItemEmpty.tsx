import React, { useState } from "react";
import styled from "styled-components";
import { TestWallet } from "types";
import { createRandomWallet, randomAvatar } from "utils/multisim";
import { AvatarEmpty, Body3, Button } from "../../atoms";
import { TestUserItemFrame } from "./TestUserItemFrame";

export const TestUserItemEmpty: React.FC<{
  limit: number;
  peerList: TestWallet[];
  setPeerList: (peer: TestWallet[]) => void;
}> = ({ limit, peerList, setPeerList }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const addPeer = async () => {
    if (limit === 0) return;
    setLoading(true);
    const wallet = await createRandomWallet("eth");
    setPeerList([...peerList, wallet]);
    setLoading(false);
  };
  return (
    <Container loading={loading}>
      <AvatarEmpty />
      <TextContainer>
        <h4>Add Peer</h4>
        <Body3>{limit} left to add</Body3>
      </TextContainer>
      <AddButton size="small" onClick={addPeer}>
        {loading ? "Creating..." : "Add"}
      </AddButton>
    </Container>
  );
};

const Container = styled(TestUserItemFrame)<{ loading: boolean }>`
  border: 2px dashed var(--lightGrey);
  opacity: ${(props) => (props.loading ? "0.5" : "1")};
`;

const TextContainer = styled.div`
  * {
    color: var(--darkGrey);
  }
`;

const AddButton = styled(Button)`
  && {
    background-color: var(--darkGrey);
    color: var(--white);
  }
`;
