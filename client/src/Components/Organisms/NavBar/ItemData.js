import React from "react";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import * as GoIcons from "react-icons/go";
export const ItemData = [
  {
    title: "Home",
    path: "/home",
    icon: <BsIcons.BsFillHouseDoorFill />,
    cName: "nav-text",
    isLogin: true,
  },
  {
    title: "Log",
    path: "/log/all/0",
    icon: <BsIcons.BsFillInfoCircleFill />,
    cName: "nav-text",
    isLogin: true,
  },
  {
    title: "Login",
    path: "/",
    icon: <RiIcons.RiLoginBoxLine />,
    cName: "nav-text",
    isLogin: false,
  },
  {
    title: "Logout",
    path: "/",
    icon: <RiIcons.RiLogoutBoxLine />,
    cName: "nav-text",
    isLogin: true,
  },
  {
    title: "SignUp",
    path: "/sign-up",
    icon: <GoIcons.GoSignIn />,
    cName: "nav-text",
    isLogin: false,
  },
];
