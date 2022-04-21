import styled from "styled-components";

export const TextInput = styled.input.attrs((props) => ({ type: "text" }))`
  color: var(--black);
  font-weight: 600;
  font-size: 16px;
  padding-left: 8px;
`;
