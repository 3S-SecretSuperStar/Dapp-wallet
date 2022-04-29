import styled, { css } from "styled-components";

interface IconButtonProps {
  size?: "regular" | "small";
}

export const IconButton = styled.button<IconButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background-color: var(--white);
  ${(props) => (props.size === "small" ? SizeSmall : SizeRegular)}
  :hover {
    svg {
      transition: transform 0.3s ease-in-out;
      transform: scale(1.2);
    }
  }
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
