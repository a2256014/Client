import { useEffect, useState } from "react";
import Modal from "react-modal";
import "./style.css";

const _Modal = ({ log: { time, actionType, url } }) => {
  const [modalMode, setmodalMode] = useState(true);
  const onclickWindow = (e) => {
    if (e.target.closest("#modal")) return;
    setmodalMode(false);
  };

  const onclickButton = (e) => {
    setmodalMode(false);
  };

  useEffect(() => {
    window.addEventListener("click", onclickWindow);
  }, []);

  return (
    <Modal id="modal" isOpen={modalMode}>
      Modal
      <button id="d" onClick={onclickButton}>
        x
      </button>
      <p>{time}</p>
      <p>{actionType}</p>
    </Modal>
  );
};

export default _Modal;
