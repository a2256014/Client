import MainTemplate from "../Templates/Main";

const MainPage = ({
  socketId,
  setSocketId,
  alarmData,
  setAlarmData,
  modalMode,
  setmodalMode,
  prevSocketId,
  imgPath,
}) => {
  return (
    <MainTemplate
      socketId={socketId}
      setSocketId={setSocketId}
      alarmData={alarmData}
      setAlarmData={setAlarmData}
      modalMode={modalMode}
      setmodalMode={setmodalMode}
      prevSocketId={prevSocketId}
      imgPath={imgPath}
    />
  );
};

export default MainPage;
