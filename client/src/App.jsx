import { Routes, Route } from "react-router-dom";

import LoginPage from "./Components/Pages/LoginPage.jsx";
import MainPage from "./Components/Pages/MainPage.jsx";
import InfoPage from "./Components/Pages/InfoPage.jsx";
import Header from "./Components/Organisms/Header/index.jsx";
import PublicRoute from "./Routes/PublicRoute/index.jsx";
import PrivateRoute from "./Routes/PrivateRoute/index.jsx";
import SignUpPage from "./Components/Pages/SignUpPage.jsx";
import MyPage from "./Components/Pages/MyPage.jsx";

const App = () => {
  return (
    <>
      <Header />
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
          element={<PrivateRoute component={<MainPage />} />} //영상보여주는 페이지
        />
        <Route
          restricted={false}
          path="/info:id"
          element={<PrivateRoute component={<InfoPage />} />} //위험행동 감지 페이지
        />
        <Route
          restricted={false}
          path="/mypage"
          element={<PrivateRoute component={<MyPage />} />} //로그인 페이지
        />
      </Routes>
    </>
  );
};

export default App;
