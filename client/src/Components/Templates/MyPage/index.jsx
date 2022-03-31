import SignOut from "../../../Common/Util/SignOut/index";
import { Button } from "./style";

const MyPageTemplate = () => {
  const onclick = (event) => {
    SignOut(event);
  };
  return (
    <>
      <Button onClick={onclick}>로그아웃</Button>
    </>
  );
};

export default MyPageTemplate;
