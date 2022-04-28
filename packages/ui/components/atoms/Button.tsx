import { ArrowRightIcon } from "@heroicons/react/outline";
import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

export const NextButton: typeof Button = ({ children, ...props }) => {
  return (
    <Button {...props}>
      <p>{children}</p>
      <ArrowRightIcon />
    </Button>
  );
};

const ButtonStyle = styled.button`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background-color: var(--primary);
  border-radius: 16px;
  height: 40px;
  min-width: 120px;
  padding-left: 32px;
  padding-right: 32px;
  opacity: 1;
  * {
    color: var(--bright);
  }
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
  :disabled {
    opacity: 0.2;
    cursor: default;
  }
`;
