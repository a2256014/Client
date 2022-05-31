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
import { SIGNIN_POST_URL } from "../../../Common/Constant/index";

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


  const onclick = () => {
    axios
      .post(`${SIGNIN_POST_URL}`, {
        email: state.email,
        password: state.password,
      })
      .then((response) => {
        onLoginSuccess(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      onclick();
    }
  };

  const onclick2 = () => {
    nav("/sign-up");
  };

  return (
    <LForm>
      <HeaderTitle>
        <BiCctv />
      </HeaderTitle>
      <InputGroup onKeyPress={onKeyPress}>
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
