import MainTemplate from "../Templates/Main";

const MainPage = ({
  socketId,
  setSocketId,
  alarmData,
  setAlarmData,
  modalMode,
  setmodalMode,
  prevSocketId,
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
    />
  );
};

export default MainPage;
