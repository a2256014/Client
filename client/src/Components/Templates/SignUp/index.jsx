import { Back, Dismatch, UpForm } from "./style";
import { Button, ButtonGroup } from "../../Atoms/Button/style";
import { Input, InputGroup } from "../../Atoms/Input/style";
import { HeaderTitle } from "../../Atoms/HeaderIcon/style";
import { BiCctv } from "react-icons/bi";
import { useReducer } from "react";
import { useNavigate } from "../../../../node_modules/react-router-dom/index";
import { InPutReducer, initialUser } from "../../../Common/Util/InPut/index";

const SignUpTemplate = () => {
  const [state, dispatch] = useReducer(InPutReducer, initialUser);
  const nav = useNavigate();

  const change = (e) => {
    const changeType = e.target.attributes[1].value;
    console.log(e.target.attributes[1].value);
    dispatch({
      type: changeType,
      username: e.target.value,
      email: e.target.value,
      password: e.target.value,
      repassword: e.target.value,
    });
  };

  const onclick = async () => {
    //아이디 비밀번호 보내기
    console.log(
      `세팅된회원${state.email},${state.password},${state.repassword},${state}`
    );
    nav("/");
  };

  return (
    <UpForm>
      <HeaderTitle>
        <BiCctv />
      </HeaderTitle>
      <InputGroup>
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
