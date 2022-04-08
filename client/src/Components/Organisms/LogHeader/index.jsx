import { A, B, C, Container, Icons, Naming } from "./style";
import { MdPersonalInjury, MdDoNotTouch } from "react-icons/md";
import { GiCctvCamera } from "react-icons/gi";
import {
  useNavigate,
  useParams,
} from "../../../../node_modules/react-router-dom/index";

const LogHeader = () => {
  const id = useParams();
  const nav = useNavigate();
  const onclick = (e) => {
    nav(`/log/${e.currentTarget.id}/0`);
  };

  return (
    <Container>
      <Icons id="all" onClick={onclick}>
        <A id={id.type}>
          <GiCctvCamera />
          <Naming>전체</Naming>
        </A>
      </Icons>
      <Icons id="violence" onClick={onclick}>
        <B id={id.type}>
          <MdPersonalInjury />
          <Naming>폭력</Naming>
        </B>
      </Icons>
      <Icons id="절도" onClick={onclick}>
        <C id={id.type}>
          <MdDoNotTouch />
          <Naming>절도</Naming>
        </C>
      </Icons>
    </Container>
  );
};

export default LogHeader;
