import styled from "styled-components";
import {
  TitleFontSize,
  RedColor,
  HoverPointer,
} from "../../../Common/Style/index";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalStyle = styled.div`
  width: 350px;
  height: 200px;
  background-color: #fff;
  // Modal 창 브라우저 가운데로 조정
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 20px;
  border-radius: 10px;
`;

export const ModalButton = styled.button`
  position: fixed;
  top: 75%;
  left: 45%;
  width: 50px;
  height: 35px;
  border-radius: 5px;
  background-color: ${RedColor};
  color: white;
  opacity: 0.9;
  &:hover {
    opacity: 1;
    ${HoverPointer};
  }
`;

export const Title = styled.p`
  font-size: ${TitleFontSize};
  /* align-content: center; */
  text-align: center;
  color: ${RedColor};
`;

export const Text = styled.p`
  margin-top: 20px;
  margin-left: 10px;
  color: black;
`;
