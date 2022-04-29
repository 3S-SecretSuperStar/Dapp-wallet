import { DeviceMobileIcon } from "@heroicons/react/solid";
import React from "react";
import styled from "styled-components";
import { abbrevPublicKey } from "utils/account";
import { DUMMY_PUB_KEY } from "utils/contants";
import { IconButton } from "../../atoms";
import { TestUserItem } from "../../molecules";

export const MultiSimTestUsersSection = () => {
  return (
    <Container>
      <TestUserItem avatar="/images/avatars/1.png" publicKey={DUMMY_PUB_KEY} />
      <TestUserItem avatar="/images/avatars/1.png" publicKey={DUMMY_PUB_KEY} />
      <TestUserItem avatar="/images/avatars/1.png" publicKey={DUMMY_PUB_KEY} />
      <TestUserItem avatar="/images/avatars/1.png" publicKey={DUMMY_PUB_KEY} />
      <TestUserItem avatar="/images/avatars/1.png" publicKey={DUMMY_PUB_KEY} />
      <TestUserItem avatar="/images/avatars/1.png" publicKey={DUMMY_PUB_KEY} />
      <TestUserItem avatar="/images/avatars/1.png" publicKey={DUMMY_PUB_KEY} />
      <TestUserItem avatar="/images/avatars/1.png" publicKey={DUMMY_PUB_KEY} />
      <TestUserItem avatar="/images/avatars/1.png" publicKey={DUMMY_PUB_KEY} />
      <TestUserItem avatar="/images/avatars/1.png" publicKey={DUMMY_PUB_KEY} />
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  column-gap: 16px;
  row-gap: 20px;
  grid-template-columns: auto auto;
`;
