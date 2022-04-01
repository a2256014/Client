import { useState } from "react";
import { Button, ButtonGroup, HeaderTitle, Input, LForm } from "./Style";
import { BiCctv } from "react-icons/bi";
import * as axios from "axios";
import { useNavigate } from "../../../../node_modules/react-router-dom/index";
import onLoginSuccess from "../../../Common/Util/LoginSuccess/index";

const LoginForm = () => {
  const [login, setlogin] = useState({
    id: "",
    password: "",
  });
  const nav = useNavigate();

  const changeId = (e) => {
    setlogin((prev) => ({ ...prev, id: e.target.value }));
  };
  const changePassword = (e) => {
    setlogin((prev) => ({ ...prev, password: e.target.value }));
  };
  const onclick = async () => {
    const {
      data: { users },
    } = await axios.get("/test.json");

    const { id, password, name } = users[0];
    if (id === login.id && password === login.password) {
      console.log("로그인 성공", name);
      const { data } = await axios.get("/token.json");
      onLoginSuccess(data);
      window.location.reload();
    } else {
      console.log("실패");
    }
  };

  const onclick2 = () => {
    nav("/sign-up");
  };

  //백엔드 연결 로그인
  // const onSubmit = (e)=>{
  //     e.preventDefalut()
  //     // id,password
  //     axios.post(REACT_APP_SERVER_URL,login)
  //     //동기화
  //     .then(response=>{
  //         if(response.token){
  //             setCookies("Access-token",response.token)
  //             nav("/")
  //         }else if(!response.token){
  //             alert("아이디 및 비밀번호를 잘못 입력했습니다.")
  //         }
  //     })
  // }

  return (
    <LForm>
      <HeaderTitle>
        <BiCctv />
      </HeaderTitle>

      <Input placeholder="아이디를 입력해주세요" onChange={changeId} />
      <Input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={changePassword}
      />
      <ButtonGroup>
        <Button onClick={onclick}>Log In</Button>
        <Button onClick={onclick2}>Sign Up</Button>
      </ButtonGroup>
    </LForm>
  );
};

export default LoginForm;
