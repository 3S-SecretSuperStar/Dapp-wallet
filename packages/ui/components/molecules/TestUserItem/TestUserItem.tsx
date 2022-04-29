import React from "react";
import styled from "styled-components";
import { abbrevPublicKey } from "utils/account";
import { Avatar, Body3, Button } from "../../atoms";
import { randomAvatar, randomColorSet } from "utils/multisim";
import { TestUserItemFrame } from "./TestUserItemFrame";

interface TestUserItemProps {
  avatar: string;
  nickname: string;
  publicKey: string;
  colorSet: { bg: string; fg: string };
}

export const TestUserItem: React.FC<TestUserItemProps> = ({
  avatar,
  nickname,
  publicKey,
  colorSet,
}) => {
  return (
    <Container bg={colorSet.bg}>
      <Avatar
        size="regular"
        src={avatar}
        alt={abbrevPublicKey(publicKey)}
        fg={colorSet.fg}
      />
      <TextContainer>
        <h4>{nickname}</h4>
        <Body3>{abbrevPublicKey(publicKey)}</Body3>
      </TextContainer>
      <MoreButton size="small" fg={colorSet.fg}>
        More
      </MoreButton>
    </Container>
  );
};

const Container = styled(TestUserItemFrame)<{ bg: string }>`
  background-color: ${(props) => props.bg};
`;

const TextContainer = styled.div``;

const MoreButton = styled(Button)<{ fg: string }>`
  && {
    background-color: ${(props) => props.fg};
    background-image: ${(props) => props.fg};
  }
`;
