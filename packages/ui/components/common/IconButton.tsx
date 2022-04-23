import styled, { css } from "styled-components";

interface IconButtonProps {
  size?: "regular" | "small";
}

export const IconButton = styled.button<IconButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  ${(props) => (props.size === "small" ? SizeSmall : SizeRegular)}
`;

const SizeRegular = css`
  height: 44px;
  width: 44px;
  svg {
    height: 21px;
    width: 21px;
  }
`;

const SizeSmall = css`
  height: 32px;
  width: 32px;
  svg {
    height: 16px;
    width: 16px;
  }
`;
