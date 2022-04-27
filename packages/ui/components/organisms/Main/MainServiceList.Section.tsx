import styled from "styled-components";
import React from "react";
import { IconButtonWithTitle } from "../../molecules";
import {
  IoBookmarkSharp,
  IoCompassSharp,
  IoSettingsSharp,
  IoWater,
} from "react-icons/io5";
import {
  ChatIcon,
  DeviceMobileIcon,
  GlobeIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import { IconButton } from "../../atoms";

export const MainServiceListSection = () => {
  return (
    <Container>
      <h3>Service list</h3>
      <List>
        <IconButtonWithTitle>
          <AirdropButton>
            <IoWater fill={"#ff8b39"} />
          </AirdropButton>
          <p>Airdrop</p>
        </IconButtonWithTitle>
        <IconButtonWithTitle>
          <MultiSimButton>
            <UserGroupIcon fill={"#6881f2"} />
          </MultiSimButton>
          <p>MultiSim</p>
        </IconButtonWithTitle>
        <IconButtonWithTitle>
          <MobileButton>
            <DeviceMobileIcon fill={"#f46054"} />
          </MobileButton>
          <p>Mobile</p>
        </IconButtonWithTitle>
        <IconButtonWithTitle>
          <MessageButton>
            <ChatIcon fill={"#8375ea"} />
          </MessageButton>
          <p>Message</p>
        </IconButtonWithTitle>
        <IconButtonWithTitle>
          <ContactButton>
            <IoBookmarkSharp fill={"#f04953"} />
          </ContactButton>
          <p>Contact</p>
        </IconButtonWithTitle>
        <IconButtonWithTitle>
          <NetworkButton>
            <GlobeIcon fill={"#c06de6"} />
          </NetworkButton>
          <p>Network</p>
        </IconButtonWithTitle>
        <IconButtonWithTitle>
          <CompassButton>
            <IoCompassSharp fill={"#4acbbb"} />
          </CompassButton>
          <p>Compass</p>
        </IconButtonWithTitle>
        <IconButtonWithTitle>
          <SettingsButton>
            <IoSettingsSharp fill={"#7375aa"} />
          </SettingsButton>
          <p>Settings</p>
        </IconButtonWithTitle>
      </List>
    </Container>
  );
};

const Container = styled.section`
  margin-top: 28px;
  h3 {
    margin-bottom: 16px;
  }
`;

const List = styled.div`
  display: grid;
  column-gap: 20px;
  row-gap: 16px;
  grid-template-columns: auto auto auto auto;
`;

const AirdropButton = styled(IconButton)`
  && {
    background-color: #fff8ea;
  }
`;

const MultiSimButton = styled(IconButton)`
  && {
    background-color: #f1f4fe;
  }
`;

const MobileButton = styled(IconButton)`
  && {
    background-color: #fff0ed;
  }
`;

const MessageButton = styled(IconButton)`
  && {
    background-color: #f5f2fe;
  }
`;

const ContactButton = styled(IconButton)`
  && {
    background-color: #ffeff0;
  }
`;

const NetworkButton = styled(IconButton)`
  && {
    background-color: #f9ebfe;
  }
`;

const CompassButton = styled(IconButton)`
  && {
    background-color: #e8fdfa;
  }
`;

const SettingsButton = styled(IconButton)`
  && {
    background-color: #f8f8ff;
  }
`;
