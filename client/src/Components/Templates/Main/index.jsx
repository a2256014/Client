import { useEffect, useState } from "react";
import { sendMessage, useSocket } from "../../../Common/Hook/useSocket";
import {
  ALERT_GET_URL,
  SOCKET_SERVER_URL,
  IMAGE_STREAM_URL,
} from "../../../Common/Constant/index";

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
    <>
      <VideoContainer>
        {data === "" || <_Modal log={data} />}
        {new Array(8).fill(0).map(() => (
          <VideoForm path={imgPath} />
        ))}
      </VideoContainer>
    </>
  );
};

export default MainTemplate;
