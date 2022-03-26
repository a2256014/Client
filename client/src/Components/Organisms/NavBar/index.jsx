import * as React from "react";
import { useState } from "react";
import { useNavigate } from "../../../../node_modules/react-router-dom/index";
import { Container, Logo, Menu } from "./style";

const NavBar = () => {
  const navigator = useNavigate();

  const handleLogo = () => navigator("/");

  const [open, setopen] = useState(false);
  const onclick = () => {
    setopen(!open);
  };

  return (
    <>
      <Container>
        <NavBar>dd</NavBar>
        <Logo onClick={handleLogo}> Stop!</Logo>
      </Container>
    </>
  );
};

export default NavBar;
