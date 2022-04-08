import styled from "styled-components";
import { GreyColor, HoverPointer, RedColor } from "../../../Common/Style/index";

export const Container = styled.header`
  height: 70px;
  display: flex;
  align-items: center;

  margin-bottom: 30px;
  border-bottom: 1px solid ${GreyColor};
  /* &::after {
    position: absolute;
    content: "";
    display: block;
    top: 80px;
    width: 100vw;
    border-bottom: 1px solid ${GreyColor};
  } */
`;

export const Logo = styled.p`
  font-size: 24px;
  transition: 0.3s;
  font-family: "Fira Mono", monospace;
  position: relative;

  &:hover {
    ${HoverPointer};
    color: ${RedColor};
  }
`;
