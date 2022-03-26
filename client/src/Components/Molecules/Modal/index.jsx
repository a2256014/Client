import { useState } from "react";
import { ModalButton, ModalContainer, ModalStyle, Title, Text } from "./Style";

const _Modal = ({
  log: {
    capture_file: { created_date: time },
    actionType,
  },
}) => {
  const [modalMode, setmodalMode] = useState(true);
  const ModalClose = () => {
    setmodalMode(false);
  };

  return modalMode ? (
    <ModalContainer onClick={ModalClose}>
      <ModalStyle onClick={(e) => e.stopPropagation()}>
        <Title>위험 상황 발생</Title>
        <Text>발생 시간 : {time.replace("T", " ")}</Text>
        <Text>위험 행위 : {actionType}</Text>
        <ModalButton onClick={ModalClose}>닫기</ModalButton>
      </ModalStyle>
    </ModalContainer>
  ) : null;
};

export default _Modal;
