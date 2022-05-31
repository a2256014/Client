import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Nav = styled.div`
  margin-left: 50px;
`;

export const DropMenu = styled.ul`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 60px;
  left: 10px;
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
  margin-left: 40px;
  margin-right: 20px;
  display: flex;
  font-size: 20px;
`;

export const Item = styled.div`
  display: contents;
  font-size: 15px;
  align-content: center;
`;
