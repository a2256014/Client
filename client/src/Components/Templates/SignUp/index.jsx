import { Button, HeaderTitle, Input, UpForm } from "./style";
import { BiCctv } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "../../../../node_modules/react-router-dom/index";

const SignUpTemplate = () => {
  const nav = useNavigate();
  const [login, setlogin] = useState({
    id: "",
    password: "",
    repassword: "",
  });

  const changeId = (e) => {
    setlogin((prev) => ({ ...prev, id: e.target.value }));
  };
  const changePassword = (e) => {
    setlogin((prev) => ({ ...prev, password: e.target.value }));
  };
  const changeRePassword = (e) => {
    setlogin((prev) => ({ ...prev, repassword: e.target.value }));
  };

  const onclick = async () => {
    //아이디 비밀번호 보내기
    nav("/");
  };

  return (
    <UpForm>
      <HeaderTitle>
        <BiCctv />
      </HeaderTitle>

      <Input placeholder="아이디를 입력해주세요" onChange={changeId} />
      <Input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={changePassword}
      />
      <Input
        type="repassword"
        placeholder="비밀번호를 재입력해주세요"
        onChange={changeRePassword}
      />
      <Button onClick={onclick}>Sign Up</Button>
    </UpForm>
  );
};

export default SignUpTemplate;
