import styled from "styled-components";

export const PasswordInput = styled.input.attrs((props) => ({
  type: "password",
}))`
  color: var(--black);
  font-weight: 600;
  font-size: 16px;
  padding-left: 8px;
  letter-spacing: 0.1em;
`;
