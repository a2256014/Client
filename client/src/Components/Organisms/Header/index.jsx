import { Group, Container, Logo } from "./style";
import { useNavigate } from "../../../../node_modules/react-router-dom/index";
import NavBar from "../NavBar/index";
import AlarmC from "../../Molecules/Alarm/index";

const Header = ({ alarmData, setAlarmData }) => {
  const navigator = useNavigate();
  const handleLogo = () => navigator("/");

  return (
    <>
      <Container>
        <Group>
          <NavBar />
          <Logo onClick={handleLogo}> Stop!</Logo>
        </Group>
        <AlarmC alarmData={alarmData} setAlarmData={setAlarmData} />
      </Container>
    </>
  );
};
export default Header;
