import { A, B, C, Container, Icons, Naming } from "./style";
import { MdPersonalInjury, MdDoNotTouch } from "react-icons/md";
import { GiCctvCamera } from "react-icons/gi";
import {
  useNavigate,
  useParams,
} from "../../../../node_modules/react-router-dom/index";

const LogHeader = () => {
  const param = useParams();
  const nav = useNavigate();
  const onclick = (e) => {
    nav(`/log/${e.currentTarget.id}/0`);
  };

  let select = [false, false, false];

  if (param.type === "all") {
    select[0] = true;
  } else if (param.type === "violence") {
    select[1] = true;
  } else if (param.type === "절도") {
    select[2] = true;
  }

  return (
    <Container>
      <Icons id="all" select={select[0]} onClick={onclick}>
        <GiCctvCamera />
        <Naming>전체</Naming>
      </Icons>
      <Icons id="violence" select={select[1]} onClick={onclick}>
        <MdPersonalInjury />
        <Naming>폭력</Naming>
      </Icons>
      <Icons id="절도" select={select[2]} onClick={onclick}>
        <MdDoNotTouch />
        <Naming>절도</Naming>
      </Icons>
    </Container>
  );
};

export default LogHeader;
