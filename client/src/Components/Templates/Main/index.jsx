import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendMessage, useSocket } from "../../../Common/Hook/useSocket";
import { SOCKET_SERVER_URL } from "../../../Common/Constant/index";

import VideoForm from "../../Molecules/Video";

import { VideoContainer } from "./Style";

const MainTemplate = () => {
  const navigator = useNavigate();

  const [socket, setSocket] = useState();
  const [id, setId] = useState(0);

  useSocket(setSocket, setId, SOCKET_SERVER_URL);

  useEffect(() => {
    socket === undefined || socket.readyState === 0
      ? console.log("loading")
      : sendMessage(socket, "hi");
  });

  useEffect(() => {
    if (id === 0) return;
    navigator(`/info/${id}`);
  }, [id]);
  return (
    <>
      <VideoContainer>
        {new Array(8).fill(0).map(() => (
          <VideoForm />
        ))}
      </VideoContainer>
    </>
  );
};

export default MainTemplate;
