import { Routes, Route } from "react-router-dom";

import LoginPage from "./Components/Pages/LoginPage.jsx";
import MainPage from "./Components/Pages/MainPage.jsx";
import InfoPage from "./Components/Pages/InfoPage.jsx";
import Header from "./Components/Organisms/Header/index.jsx";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/info/:id" element={<InfoPage />} />
      </Routes>
    </>
  );
};

export default App;
