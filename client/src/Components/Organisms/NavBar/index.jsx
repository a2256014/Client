import * as React from "react";
import { useState, useRef, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "../../../../node_modules/react-router-dom/index";
import { DropList, DropMenu, Item, MenuButton } from "./style";
import { ItemData } from "./ItemData";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const showMenu = () => {
    setShow(!show);
  };

  const OutsideClick = () => {
    if (show) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", OutsideClick);
    return () => {
      document.removeEventListener("click", OutsideClick);
    };
  });

  return (
    <>
      {show ? (
        <>
          <MenuButton>
            <AiIcons.AiOutlineClose onClick={showMenu} />
          </MenuButton>
          <DropMenu>
            {ItemData.map((item, index) => {
              return (
                <Link to={item.path} onClick={showMenu}>
                  <DropList>
                    <Item>
                      {item.icon} {item.title}
                    </Item>
                  </DropList>
                </Link>
              );
            })}
          </DropMenu>
        </>
      ) : (
        <MenuButton>
          <FaIcons.FaBars onClick={showMenu} />
        </MenuButton>
      )}
    </>
  );
};

export default NavBar;
