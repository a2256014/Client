import { useEffect } from "react";

let setSocketId;
let setImagePath;
let curSocketId;
let setPrevSocketId;
const openEvnet = () => {
  console.log("connnected");
};

const useOnMessageEvent = (evt) => {
  const { data: message } = evt;
  if (message / 1) {
    setPrevSocketId(curSocketId);
    setSocketId(message);
  } else {
    setImagePath(message);
  }
};

const errorEvent = (err) => {
  console.log(err);
};
const closeEvent = () => {
  console.log("closed");
};
const socketInit = (socket, setId) => {
  socket.onopen = openEvnet;
  socket.onmessage = useOnMessageEvent;
  socket.onerror = errorEvent;
  socket.onclose = closeEvent;
};

export const useSocket = (
  setSocket,
  curId,
  setId,
  setPrevId,
  setImgPath,
  url
) => {
  let socket;
  if (setId) {
    setSocketId = setId;
    curSocketId = curId;
    setPrevSocketId = setPrevId;
  }
  if (setImgPath) setImagePath = setImgPath;
  useEffect(() => {
    socket = new WebSocket(url);
    socketInit(socket);
    setSocket(socket);
  }, []);
};

export const sendMessage = (socket, msg) => {
  if (socket.readyState === 1) {
    socket.send(msg);
    console.log(`sendMessage : ${msg}`);
  }
};
