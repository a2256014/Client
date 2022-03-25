import styled from "styled-components";
import { GreyColor, HoverPointer, RedColor } from "../../../Common/Style/index";

export const Container = styled.header`
  width: 85vw;
  height: 100px;
  display: flex;
  align-items: center;
  margin: auto;
  margin-bottom: 50px;
  &::after {
    position: absolute;
    content: "";
    display: block;
    top: 100px;
    left: -20px;
    width: 100vw;
    border-bottom: 1px solid ${GreyColor};
  }
`;

export const Logo = styled.p`
  font-size: 24px;
  transition: 0.3s;
  font-family: "Fira Mono", monospace;

  &:hover {
    ${HoverPointer};
    color: ${RedColor};
  }
`;
