import React, { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { ArrowRightIcon } from "@heroicons/react/outline";

export const NextButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <Button {...props}>
      <p>{children}</p>
      <ArrowRightIcon />
    </Button>
  );
};

interface ButtonProps {
  size?: "regular" | "small";
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--purple);
  border-radius: 16px;
  opacity: 1;
  color: var(--white);
  * {
    color: var(--white);
  }
  :disabled {
    opacity: 0.2;
    cursor: default;
  }
  ${(props) => (props.size === "small" ? SizeSmall : SizeRegular)}
`;

const SizeRegular = css`
  gap: 6px;
  height: 40px;
  min-width: 120px;
  padding-left: 32px;
  padding-right: 32px;
  font-weight: 600;
  p {
    font-weight: 700;
    font-size: 12px;
  }
  svg {
    width: 12px;
    height: 12px;
    padding: 0px 0px;
    stroke-width: 4px;
  }
`;

const SizeSmall = css`
  gap: 6px;
  height: 28px;
  min-width: 64px;
  padding-left: 16px;
  padding-right: 16px;
  font-weight: 500;
  p {
    font-weight: 500;
    font-size: 8px;
  }
  svg {
    width: 8px;
    height: 8px;
    padding: 0px 0px;
    stroke-width: 2px;
  }
`;
