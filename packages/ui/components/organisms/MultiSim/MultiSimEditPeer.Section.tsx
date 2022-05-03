import {
  useEthTestPeers,
  useHigherModalPage,
  useInspectPeer,
  useSolTestPeers,
} from "hooks";
import React, { useState } from "react";
import styled from "styled-components";
import { ColorSet } from "types";
import { abbrevPublicKey } from "utils/account";
import { AvatarImages, BgFgColors } from "utils/contants";
import { Avatar, Button, gradientTextStyle, TextInput } from "../../atoms";
import { copyToClipboard } from "utils/common";
import { storageTestPeers as store } from "storage";

export const MultiSimEditPeerSection = () => {
  const {
    peer: { blockchain, peerInfo },
  } = useInspectPeer();
  const { setPeers: setEthPeers } = useEthTestPeers();
  const { setPeers: setSolPeers } = useSolTestPeers();
  const { setOpen } = useHigherModalPage();

  const [nickname, setNickname] = useState<string>(peerInfo.nickname);
  const [colorSet, setColorSet] = useState<ColorSet>(peerInfo.colorSet);
  const [avatar, setAvatar] = useState<string>(peerInfo.avatar);

  const reset = () => {
    setNickname(peerInfo.nickname);
    setColorSet(peerInfo.colorSet);
    setAvatar(peerInfo.avatar);
  };

  const save = async () => {
    if (blockchain === "eth") {
      const peers = await store.getEthTestPeers();
      const modifiedPeers = peers.map((ethPeer) => {
        if (ethPeer.publicKey === peerInfo.publicKey) {
          return {
            publicKey: peerInfo.publicKey,
            nickname,
            colorSet,
            avatar,
          };
        } else {
          return ethPeer;
        }
      });
      setEthPeers(modifiedPeers);
      await store.setEthTestPeers(modifiedPeers);
    } else if (blockchain === "sol") {
      const peers = await store.getSolTestPeers();
      const modifiedPeers = peers.map((solPeer) => {
        if (solPeer.publicKey === peerInfo.publicKey) {
          return {
            publicKey: peerInfo.publicKey,
            nickname,
            colorSet,
            avatar,
          };
        } else {
          return solPeer;
        }
      });
      setSolPeers(modifiedPeers);
      await store.setSolTestPeers(modifiedPeers);
    } else {
    }
    setOpen(false);
  };

  return (
    <Container>
      <>
        <Label>Chain info</Label>
        <ChainInfo onClick={() => copyToClipboard(peerInfo.publicKey)}>
          <strong>{blockchain === "eth" ? "Ethereum" : "Solana"}</strong>
          <br />
          {abbrevPublicKey(peerInfo.publicKey, 10)}
        </ChainInfo>
      </>
      <>
        <Label>Nickname</Label>
        <TextInput
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          maxLength={12}
        />
      </>
      <>
        <Label>Avatar</Label>
        <AvatarList>
          {AvatarImages.map((src, idx) => (
            <AvatarItem
              key={src}
              src={src}
              alt={`Avatar ${idx}`}
              fg={colorSet.fg}
              onClick={() => setAvatar(src)}
              selected={avatar === src}
            />
          ))}
        </AvatarList>
      </>
      <>
        <Label>Color Theme</Label>
        <ColorSetList>
          {BgFgColors.map((cs) => (
            <ColorSetItem
              key={cs.bg}
              colorSet={cs}
              selected={colorSet.bg === cs.bg}
              onClick={() => setColorSet(cs)}
            />
          ))}
        </ColorSetList>
      </>
      <ButtonContainer>
        <ResetButton onClick={reset}>Reset</ResetButton>
        <SaveButton onClick={save}>Save</SaveButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div``;

const ChainInfo = styled.p`
  cursor: pointer;
  font-size: 18px;
  font-weight: 400px;
  :hover {
    text-decoration: underline var(--black);
  }
  strong {
    font-weight: 500px;
    ${gradientTextStyle}
  }
  line-height: 30px;
`;

const AvatarList = styled.div`
  display: grid;
  row-gap: 12px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const AvatarItem = styled(Avatar)<{ selected: boolean }>`
  cursor: pointer;
  opacity: ${(props) => (props.selected ? `100%` : `50%`)};
  transition: opacity 0.2;
  :hover {
    opacity: 100%;
  }
  min-height: 60px;
  min-width: 60px;
`;

const ColorSetList = styled.div`
  display: grid;
  row-gap: 12px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const ColorSetItem = styled.button<{ selected: boolean; colorSet: ColorSet }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  opacity: ${(props) => (props.selected ? `100%` : `50%`)};
  border-radius: 20px;
  background-image: ${(props) => props.colorSet.fg};
  transition: opacity 0.2;
  :hover {
    opacity: 100%;
  }
`;

const Label = styled.h3`
  margin: 32px 0px 12px 0px;
  && {
    font-size: 20px;
  }
`;

const SaveButton = styled(Button)``;

const ResetButton = styled(Button)`
  && {
    background-color: var(--black);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: 150px;
`;
