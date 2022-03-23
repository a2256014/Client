import { useState } from "react";
import { ModalButton, ModalContainer, ModalStyle } from "./Style";

const _Modal = ({ log: { time, actionType, url } }) => {
  const [modalMode, setmodalMode] = useState(true);
  // const onclickWindow = (e) => {
  //   if (e.target.closest("#modal")) return;
  //   setmodalMode(false);
  // };

  // const onclickButton = (e) => {
  //   setmodalMode(false);
  // };

  // useEffect(() => {
  //   window.addEventListener("click", onclickWindow);
  // }, []);

  const ModalClose = () => {
    setmodalMode(false);
  };

  return modalMode ? (
    <ModalContainer onClick={ModalClose}>
      <ModalStyle onClick={(e) => e.stopPropagation()}>
        <ModalButton onClick={ModalClose}>닫기</ModalButton>
        <h2>위험 상황 발생</h2>
        <p>{time}</p>
        <p>{actionType}</p>
      </ModalStyle>
    </ModalContainer>
  ) : null;
};

export default _Modal;
