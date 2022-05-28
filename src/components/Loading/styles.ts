import { transparentize } from "polished";
import styled from "styled-components";

export const Div = styled.div`
  background: ${transparentize(0.1, "#000")};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
