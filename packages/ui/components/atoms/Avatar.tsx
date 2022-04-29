import styled, { css } from "styled-components";

interface AvatarProps {
  size?: "regular" | "small";
  fg?: string;
}

export const Avatar = styled.img<AvatarProps>`
  background-color: ${(props) =>
    typeof props.fg === "string" ? props.fg : `var(--darkGrey)`};
  background-image: ${(props) =>
    typeof props.fg === "string" ? props.fg : `var(--darkGrey)`};
  object-fit: cover;
  object-position: top;
  ${(props) => (props.size === "small" ? SizeSmall : SizeRegular)}
`;

export const AvatarEmpty = styled.div<AvatarProps>`
  background-color: var(--lightGrey);
  ${(props) => (props.size === "small" ? SizeSmall : SizeRegular)}
`;

const SizeRegular = css`
  border-radius: 20px;
  height: 60px;
  width: 60px;
`;

const SizeSmall = css`
  border-radius: 14px;
  height: 32px;
  width: 32px;
`;
