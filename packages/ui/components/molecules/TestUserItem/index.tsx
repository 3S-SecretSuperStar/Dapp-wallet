import React from "react";
import styled from "styled-components";
import { abbrevPublicKey } from "utils/account";
import { Avatar, Button, IconButton } from "../../atoms";

interface TestUserItemProps {
  avatar: string;
  nickname?: string;
  publicKey: string;
}

export const TestUserItem: React.FC<TestUserItemProps> = ({
  avatar,
  nickname = "Test User",
  publicKey,
}) => {
  return (
    <Container>
      <Avatar size="small" src={avatar} alt={abbrevPublicKey(publicKey)} />
      <TextContainer>
        <h4>{nickname}</h4>
        <p>{abbrevPublicKey(publicKey)}</p>
      </TextContainer>
      <Button size="small">More</Button>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f9f9f9;
  padding: 16px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 132px;
  width: auto;
  border-radius: 20px;
`;

const TextContainer = styled.div`
  h3 {
    padding-bottom: 4px;
  }
`;
