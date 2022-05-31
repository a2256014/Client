import { Routes, Route, useLocation } from "react-router-dom";

import LoginPage from "./Components/Pages/LoginPage.jsx";
import MainPage from "./Components/Pages/MainPage.jsx";
import InfoPage from "./Components/Pages/InfoPage.jsx";
import Header from "./Components/Organisms/Header/index.jsx";
import PublicRoute from "./Routes/PublicRoute/index.jsx";
import PrivateRoute from "./Routes/PrivateRoute/index.jsx";
import SignUpPage from "./Components/Pages/SignUpPage.jsx";
import LogPage from "./Components/Pages/LogPage.jsx";
import { useEffect, useState } from "react";
import { useSocket } from "./Common/Hook/useSocket.js";
import { DANGER_SOCKET_SERVER_URL } from "./Common/Constant/index.js";

const App = () => {
  const location = useLocation().pathname;
  const [, setDangerSocket] = useState();
  const [modalMode, setmodalMode] = useState(false);
  const [alarmData, setAlarmData] = useState([]);
  const [socketId, setSocketId] = useState(-1);
  const [prevSocketId, setPrevSocketId] = useState(-1);

  useSocket(
    setDangerSocket,
    socketId,
    setSocketId,
    setPrevSocketId,
    0,
    DANGER_SOCKET_SERVER_URL
  );

  useEffect(() => {
    if (location !== "/home" && socketId !== -1) {
      setAlarmData([...alarmData, socketId]);
      setSocketId(-1);
    }
  }, [socketId]);
  return (
    <>
      <Header alarmData={alarmData} setAlarmData={setAlarmData} />
      <Routes>
        <Route
          restricted={false}
          path="/"
          element={<PublicRoute component={<LoginPage />} />} //로그인 페이지
        />
        <Route
          restricted={false}
          path="/sign-up"
          element={<PublicRoute component={<SignUpPage />} />} //로그인 페이지
        />
        <Route
          restricted={false}
          path="/home"
          element={
            <PrivateRoute
              component={
                <MainPage
                  socketId={socketId}
                  setSocketId={setSocketId}
                  alarmData={alarmData}
                  setAlarmData={setAlarmData}
                  modalMode={modalMode}
                  setmodalMode={setmodalMode}
                  prevSocketId={prevSocketId}
                />
              }
            />
          } //영상보여주는 페이지
        />
        <Route
          restricted={false}
          path="/info/:id"
          element={<PrivateRoute component={<InfoPage />} />} //위험행동 감지 페이지
        />
        <Route
          restricted={false}
          path="/log/:type/:id"
          element={<PrivateRoute component={<LogPage />} />} //위험행동 감지 페이지
        />
      </Routes>
    </>
  );
};

export default App;
