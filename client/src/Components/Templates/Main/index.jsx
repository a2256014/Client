import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendMessage, useSocket } from "../../../Common/Hook/useSocket";
import {
  ALERT_GET_URL,
  SOCKET_SERVER_URL,
} from "../../../Common/Constant/index";

import VideoForm from "../../Molecules/Video";
import _Modal from "../../Molecules/Modal/index";

import { VideoContainer } from "./Style";
import GetData from "../../../Common/Util/GetData/index";
import axios from "../../../../node_modules/axios/index";
import { AutoHeader } from "../../../Common/Util/AutoHeader/index";
import useGetData from "../../../Common/Hook/useGetData";
import useAsync from "../../../Common/Hook/useAsync";

const MainTemplate = () => {
  const [socket, setSocket] = useState();
  const [id, setId] = useState(-1);

  useSocket(setSocket, setId, SOCKET_SERVER_URL);

  useEffect(() => {
    socket === undefined || socket.readyState === 0
      ? console.log("loading")
      : sendMessage(socket, "hi");
  });

  const data = useGetData(ALERT_GET_URL(id));

  return (
    <>
      <VideoContainer>
        {data === "" || <_Modal log={data} />}
        {new Array(8).fill(0).map(() => (
          <VideoForm />
        ))}
      </VideoContainer>
    </>
  );
};

export default MainTemplate;
