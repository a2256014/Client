import { useEffect } from "react";

let _setId;
const openEvnet = () => {
  console.log("connnected");
};

const useOnMessageEvent = (evt) => {
  const { data: id } = evt;
  _setId(id);
};

const errorEvent = (err) => {
  console.log(err);
};
const socketInit = (socket, setId) => {
  socket.onopen = openEvnet;
  socket.onmessage = useOnMessageEvent;
  socket.onerror = errorEvent;
};

export const useSocket = (setSocket, setId, url) => {
  let socket;
  _setId = setId;
  useEffect(() => {
    socket = new WebSocket(url);
    socketInit(socket);
    setSocket(socket);
  }, []);
};

export const sendMessage = (socket, msg) => {
  socket.send(msg);
};
