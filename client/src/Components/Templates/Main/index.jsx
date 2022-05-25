import { ALERT_GET_URL } from "../../../Common/Constant/index";

import VideoForm from "../../Molecules/Video";
import Modal from "../../Molecules/Modal/index";

import { VideoContainer } from "./Style";
import useGetData from "../../../Common/Hook/useGetData";
import { useEffect } from "react";

const MainTemplate = ({
  socketId,
  setSocketId,
  alarmData,
  setAlarmData,
  modalMode,
  setmodalMode,
  prevSocketId,
  imgPath,
}) => {
  const data = useGetData(ALERT_GET_URL(socketId));
  useEffect(() => {
    if (socketId !== -1 && !modalMode) {
      setmodalMode(true);
    } else if (socketId !== -1 && modalMode && prevSocketId !== -1) {
      setAlarmData([...alarmData, prevSocketId]);
    }
  }, [socketId]);

  useEffect(() => {
    console.log("mainpage img path : ", imgPath);
  }, [imgPath]);
  return (
    <VideoContainer>
      {data ? (
        <Modal
          log={data}
          socketId={socketId}
          setSocketId={setSocketId}
          alarmData={alarmData}
          setAlarmData={setAlarmData}
          modalMode={modalMode}
          setmodalMode={setmodalMode}
        />
      ) : null}
      <img src={imgPath} alt="d" />
      <VideoForm path="./캡스톤디자인 피드백영상.mov" />
    </VideoContainer>
  );
};

export default MainTemplate;
