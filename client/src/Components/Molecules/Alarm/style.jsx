import styled from "styled-components";
import { HoverPointer, RedColor } from "../../../Common/Style/index";
import { Item } from "../../Organisms/NavBar/style";

export const Alarm = styled.a`
  font-size: 24px;
  display: flex;
  padding-right: 30px;
  transition: 0.3s;
  &:hover {
    ${HoverPointer};
    color: ${RedColor};
  }
`;

export const Count = styled.div`
  font-size: 10px;
`;

export const Container = styled.div`
  position: relative;
`;

export const AlarmListContainer = styled.ul`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 60px;
  right: 10px;
  width: 200px;
  z-index: 3;

  background-color: red;
  border-radius: 5px;
`;

export const AlarmList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 30px;

  border-radius: 5px;
  border-bottom: 1px solid white;
  &:hover {
    ${HoverPointer};
    color: black;
  }
`;

export const AlarmItem = styled(Item)`
  display: flex;
`;
