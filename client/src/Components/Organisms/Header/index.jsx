import { Container, Logo } from "./style";
import { useNavigate } from "../../../../node_modules/react-router-dom/index";
import NavBar from "../NavBar/index";

const Header = () => {
  const navigator = useNavigate();

  const handleLogo = () => navigator("/");

  return (
    <>
      <Container>
        <Logo onClick={handleLogo}> Stop!</Logo>
        <NavBar />
      </Container>
    </>
  );
};
export default Header;
