import { Back, Dismatch, UpForm } from "./style";
import { Button, ButtonGroup } from "../../Atoms/Button/style";
import { Input, InputGroup } from "../../Atoms/Input/style";
import { HeaderTitle } from "../../Atoms/HeaderIcon/style";
import { BiCctv } from "react-icons/bi";
import { useReducer, useState } from "react";
import { useNavigate } from "../../../../node_modules/react-router-dom/index";
import { InPutReducer, initialUser } from "../../../Common/Util/InPut/index";
import axios from "../../../../node_modules/axios/index";
import { SIGNUP_POST_URL } from "../../../Common/Constant/index";

const SignUpTemplate = () => {
  const [state, dispatch] = useReducer(InPutReducer, initialUser);
  const nav = useNavigate();
  const reg =
    /^[a-zA-z0-9]([-_.]?[a-zA-z0-9])*@[a-zA-z0-9]([-_.]?[a-zA-z0-9])*.[a-zA-z]{2,3}$/;

  const change = (e) => {
    const changeType = e.target.attributes[1].value;
    dispatch({
      type: changeType,
      username: e.target.value,
      email: e.target.value,
      password: e.target.value,
      repassword: e.target.value,
    });
  };

  const isMatch = (state) => {
    if (
      reg.test(state.email) &&
      state.password === state.repassword &&
      state.password !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const onclick = () => {
    isMatch(state)
      ? axios
          .post(`${SIGNUP_POST_URL}`, {
            email: state.email,
            username: state.username,
            password: state.password,
          })
          .then((response) => {
            alert(`email : ${response.data.email}
                  이름 : ${response.data.username}
                  회원가입 성공!!`);
            nav("/");
          })
          .catch((error) => {
            alert("email이 중복됐습니다.");
          })
      : alert("제대로 입력해 주세요");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onclick();
    }
  };

  return (
    <UpForm>
      <HeaderTitle>
        <BiCctv />
      </HeaderTitle>
      <InputGroup onKeyPress={onKeyPress}>
        <Input
          type="name"
          typeof="username"
          placeholder="이름"
          onChange={change}
        />
        <Input
          type="id"
          typeof="email"
          placeholder="아이디(이메일)"
          onChange={change}
        />
        {reg.test(state.email) || state.email === "" || (
          <Dismatch>이메일 형식이 아닙니다.</Dismatch>
        )}
        <Input
          type="password"
          typeof="password"
          placeholder="비밀번호"
          onChange={change}
        />
        <Input
          type="password"
          typeof="repassword"
          placeholder="비밀번호 확인"
          onChange={change}
        />
        {state.password !== state.repassword && (
          <Dismatch>비밀번호가 맞지 않습니다.</Dismatch>
        )}
      </InputGroup>
      <ButtonGroup>
        <Button onClick={onclick}>회원가입</Button>
      </ButtonGroup>
      <Back
        onClick={() => {
          nav(-1);
        }}
      >
        뒤로가기
      </Back>
    </UpForm>
  );
};

export default SignUpTemplate;
