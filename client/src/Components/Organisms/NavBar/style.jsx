import styled from "styled-components";
import { GreyColor, HoverPointer, RedColor } from "../../../Common/Style/index";

export const navBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

export const Container = styled.header`
  width: 85vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  margin-left: 20px;
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
  position: relative;

  &:hover {
    ${HoverPointer};
    color: ${RedColor};
  }
`;
