import { useEffect } from "react";
import { AutoHeader } from "../Util/AutoHeader/index";
const token = localStorage.getItem("accessToken");
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

const socketInit = (socket, url, setSocket) => {
  socket.onopen = openEvnet;
  socket.onmessage = useOnMessageEvent;
  socket.onerror = errorEvent;
  socket.onclose = () => {
    init(socket, url, setSocket);
  };
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
    init(socket, url, setSocket);
  }, []);
};

const init = (socket, url, setSocket) => {
  socket = new WebSocket(url);
  socketInit(socket, url, setSocket);
  setSocket(socket);
};

export const sendMessage = (socket, msg) => {
  if (socket.readyState === 1) {
    socket.send(msg);
    console.log(`sendMessage : ${msg}`);
  }
};
