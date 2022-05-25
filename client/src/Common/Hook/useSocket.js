import { useEffect } from "react";

let setSocketId = 0;
let setImagePath = 0;
let curSocketId = 0;
let setPrevSocketId = 0;
const openEvnet = () => {
  if (setImagePath === 0) console.log("id Socket connected");
  else console.log("img Socket connected");
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
