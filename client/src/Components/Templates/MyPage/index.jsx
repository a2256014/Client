import { Button, Container } from "./style";
import * as axios from "axios";
import { useEffect, useState } from "react";

const MyPageTemplate = () => {
  const [name, setName] = useState();

  const onclick = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  const pull = async () => {
    const {
      data: { users },
    } = await axios.get("/test.json");

    const { id, password, name } = users[0];
    setName(name);
  };

  useEffect(() => {
    pull();
  }, []);

  return (
    <Container>
      이름 : {name}
      <Button onClick={onclick}>로그아웃</Button>
    </Container>
  );
};

export default MyPageTemplate;
