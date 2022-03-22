import { useEffect, useState } from "react";
import * as axios from "axios";
import LoginForm from "./Components/Molecules/Login/index";
import VideoForm from "./Components/Molecules/Video/index";
import ActionImg from "./Components/Molecules/ActionImg/index";

const App = () => {
  const a = async () => {
    const { data } = await axios.get("./test.json");

    alert(data);
  }
  useEffect(() => {
    a()
  }, [])
  return <div>
    <ActionImg />
    <LoginForm></LoginForm>
  </div>;
};

export default App;
