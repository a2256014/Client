import { Container } from "./style";
import * as axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../../Atoms/Button/style";
import Logout from "../../../Common/Util/Logout/index";

const MyPageTemplate = () => {
  const [name, setName] = useState();

  const MyInfo = async () => {
    const {
      data: { users },
    } = await axios.get("/test.json");

    const { id, password, name } = users[0];
    setName(name);
  };

  useEffect(() => {
    MyInfo();
  }, []);

  return (
    <Container>
      이름 : {name}
      <Button onClick={() => dispatchEvent(Logout())}>로그아웃</Button>
    </Container>
  );
};

export default MyPageTemplate;
