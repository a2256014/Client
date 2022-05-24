import { useEffect, useState } from "react";
import { sendMessage, useSocket } from "../../../Common/Hook/useSocket";
import { ALERT_GET_URL, SOCKET_SERVER_URL, IMAGE_STREAM_URL } from "../../../Common/Constant/index";

import VideoForm from "../../Molecules/Video";
import _Modal from "../../Molecules/Modal/index";

import { VideoContainer } from "./Style";
import useGetData from "../../../Common/Hook/useGetData";

const MainTemplate = () => {
  const [socket, setSocket] = useState();
  const [id, setId] = useState(-1);

  useSocket(setSocket, setId, SOCKET_SERVER_URL);

  useEffect(() => {
    socket === undefined || socket.readyState === 0 ? console.log("loading") : sendMessage(socket, "hi");
  });
  const data = useGetData(ALERT_GET_URL(id));

  return (
    <>
      <VideoContainer>
        {data === "" || <_Modal log={data} />}
        {new Array(8).fill(0).map(() => (
          <VideoForm path={IMAGE_STREAM_URL} />
        ))}
      </VideoContainer>
    </>
  );
};

export default MainTemplate;
