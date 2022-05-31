import styled from "styled-components";
import { GreyColor, HoverPointer, RedColor } from "../../../Common/Style/index";

export const Container = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 30px;
  border-bottom: 1px solid ${GreyColor};
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
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
