import { useReducer, useState } from "react";
import { LForm, Signup, Text } from "./Style";
import { Button, ButtonGroup } from "../../Atoms/Button/style";
import { Input, InputGroup } from "../../Atoms/Input/style";
import { HeaderTitle } from "../../Atoms/HeaderIcon/style";
import { BiCctv } from "react-icons/bi";
import * as axios from "axios";
import { useNavigate } from "../../../../node_modules/react-router-dom/index";
import onLoginSuccess from "../../../Common/Util/LoginSuccess/index";
import { initialUser, InPutReducer } from "../../../Common/Util/InPut/index";
import { SIGNIN_SERVER_URL } from "../../../Common/Constant/index";

const LoginForm = () => {
  const [state, dispatch] = useReducer(InPutReducer, initialUser);

  const change = (e) => {
    const changeType = e.target.attributes[1].value;
    dispatch({
      type: changeType,
      email: e.target.value,
      password: e.target.value,
      repassword: e.target.value,
    });
  };

  const nav = useNavigate();

  // const onclick = async () => {
  //   const {
  //     data: { users },
  //   } = await axios.get(SIGNIN_SERVER_URL);

  //   const { id, password, name } = users[0];
  //   if (id === state.id && password === state.password) {
  //     console.log("로그인 성공", name);
  //     const { data } = await axios.get("/token.json");
  //     onLoginSuccess(data);
  //     window.location.reload();
  //   } else {
  //     console.log("실패");
  //   }
  // };

  const onclick = () => {
    axios
      .post(
        "http://ec2-3-36-163-212.ap-northeast-2.compute.amazonaws.com:8080/no-login/auth/signin",
        {
          email: state.email,
          password: state.password,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onclick2 = () => {
    nav("/sign-up");
  }; //반환 받으면

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
      <InputGroup>
        <Input
          type="id"
          typeof="email"
          placeholder="아이디"
          onChange={change}
        />
        <Input
          type="password"
          typeof="password"
          placeholder="비밀번호"
          onChange={change}
        />
      </InputGroup>
      <ButtonGroup>
        <Button onClick={onclick}>로그인</Button>
      </ButtonGroup>
      <Text>
        Stop!이 처음이신가요? <Signup onClick={onclick2}>회원가입하기</Signup>
      </Text>
    </LForm>
  );
};

export default LoginForm;
