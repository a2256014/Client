import * as AiIcons from "react-icons/ai";
import {
  ModalButton,
  ModalContainer,
  ModalStyle,
  Title,
  Text,
  Out,
} from "./Style";
import { useNavigate } from "../../../../node_modules/react-router-dom/index";

const Modal = ({
  log,
  socketId,
  setSocketId,
  alarmData,
  setAlarmData,
  modalMode,
  setmodalMode,
}) => {
  const {
    capture_file: { created_date: time, file_id: id },
    emergency_type: { type_name_kor: actionType },
  } = log;
  const nav = useNavigate();
  const ModalClose = () => {
    setmodalMode(false);
    setAlarmData([...alarmData, socketId]);
    setSocketId(-1);
  };

  const ReadMore = () => {
    nav(`/info/${id}`, { state: { log } });
    setmodalMode(false);
    setSocketId(-1);
  };

  return (
    modalMode && (
      <ModalContainer onClick={ModalClose}>
        <ModalStyle onClick={(e) => e.stopPropagation()}>
          <Out onClick={ModalClose}>
            <AiIcons.AiOutlineClose />
          </Out>
          <Title>위험 상황 발생</Title>
          <Text>발생 시간 : {time.replace("T", " ")}</Text>
          <Text>위험 행위 : {actionType}</Text>
          <ModalButton onClick={ReadMore}>자세히 보기</ModalButton>
        </ModalStyle>
      </ModalContainer>
    )
  );
};

export default Modal;
