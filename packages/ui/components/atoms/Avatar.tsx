import styled, { css } from "styled-components";

interface AvatarProps {
  size?: "regular" | "small";
}

export const Avatar = styled.img<AvatarProps>`
  border-radius: 14px;
  background-color: var(--darkGrey);
  object-fit: cover;
  object-position: top;
  ${(props) => (props.size === "small" ? SizeSmall : SizeRegular)}
`;

const SizeRegular = css`
  height: 44px;
  width: 44px;
  padding: 8px 4px 0px 4px;
`;

const SizeSmall = css`
  height: 32px;
  width: 32px;
  padding: 4px 2px 0px 2px;
`;
