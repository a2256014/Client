import { useEffect, useState } from "react";
import { sendMessage, useSocket } from "../../../Common/Hook/useSocket";
import {
  ALERT_GET_URL,
  SOCKET_SERVER_URL,
  IMAGE_STREAM_URL,
  IMAGE_SOCKET_SERVER_URL,
} from "../../../Common/Constant/index";

import VideoForm from "../../Molecules/Video";
import Modal from "../../Molecules/Modal/index";

import { VideoContainer } from "./Style";
import useGetData from "../../../Common/Hook/useGetData";

const MainTemplate = ({
  socketId,
  setSocketId,
  alarmData,
  setAlarmData,
  modalMode,
  setmodalMode,
  prevSocketId,
}) => {
  const [, setImageSocket] = useState();
  const [imgPath, setImgPath] = useState("");
  useSocket(setImageSocket, 0, 0, 0, setImgPath, IMAGE_SOCKET_SERVER_URL);
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
    <>
      <VideoContainer>
        {data === "" || (
          <Modal
            log={data}
            socketId={socketId}
            setSocketId={setSocketId}
            alarmData={alarmData}
            setAlarmData={setAlarmData}
            modalMode={modalMode}
            setmodalMode={setmodalMode}
          />
        )}
        <VideoForm path={imgPath} />
        {/* <img className="aaaa" src={imgPath} /> */}
      </VideoContainer>
    </>
  );
};

export default MainTemplate;
