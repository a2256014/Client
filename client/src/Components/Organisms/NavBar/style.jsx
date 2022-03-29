import styled from "styled-components";

export const Nav = styled.div`
  margin-left: 50px;
`;

export const DropMenu = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 75px;
  right: 10px;
  width: 100px;
  z-index: 3;
`;

export const DropList = styled.li`
  padding: 0 10px;
  border-bottom: 1px solid #eaeaea;
  line-height: 25px;
  border-radius: 4px;
  background-color: black;
  block-size: 40px;
`;

export const MenuButton = styled.div`
  margin-right: 50px !important;
  display: flex;
  font-size: 20px;
`;

export const Item = styled.div`
  display: contents;
  font-size: 15px;
  align-content: center;
`;
