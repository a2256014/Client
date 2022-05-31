import { Container, Icons, Naming } from "./style";
import { MdPersonalInjury } from "react-icons/md";
import { GiCctvCamera, GiWildfires, GiHammerBreak } from "react-icons/gi";
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

  let select = [false, false, false, false];

  if (param.type === "all") {
    select[0] = true;
  } else if (param.type === "violence") {
    select[1] = true;
  } else if (param.type === "화재") {
    select[2] = true;
  } else if (param.type === "파손") {
    select[3] = true;
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
      <Icons id="화재" select={select[2]} onClick={onclick}>
        <GiWildfires />
        <Naming>화재</Naming>
      </Icons>
      <Icons id="파손" select={select[3]} onClick={onclick}>
        <GiHammerBreak />
        <Naming>파손</Naming>
      </Icons>
    </Container>
  );
};

export default LogHeader;
