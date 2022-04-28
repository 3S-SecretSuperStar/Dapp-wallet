import { useSetupInfo } from "hooks";
import React, { useState } from "react";
import styled from "styled-components";
import { TextInput } from "../../atoms";
import { SetupFormSection } from "./SetupForm.Section";

export const SetupUsernamePageInputSection = () => {
  const { setupInfo, setSetupInfo } = useSetupInfo();

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSetupInfo({ ...setupInfo, username: e.target.value });

  return (
    <Container>
      <h4>Username (0~20 chars long)</h4>
      <TextInput
        onChange={onChangeUsername}
        value={setupInfo.username}
        maxLength={20}
      />
    </Container>
  );
};

const Container = styled(SetupFormSection)`
  gap: 20px;
  align-items: flex-start;
  justify-content: center;
  && {
    height: 200px;
  }
  input {
    width: 100%;
  }
`;
