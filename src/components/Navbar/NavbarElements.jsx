import styled from "styled-components";
import { Link as LinkRoute } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import { useState } from "react";

export const Nav = styled.nav`
  height: 80px;
  /*  margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  z-index: 10;
  top: 0;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease; // 0.8s all ease is the default value for transition property in CSS 3 so you can remove it if you want to
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1; // z-index is the default value for z-index property in CSS 3 so you can remove it if you want to
  width: 100%;
  padding: 0 24px;
  max-width: 1100px; // 1100px is the max width of the container in the design so you can change it if you want to but it's better to keep it the same as the design to avoid any issues with the design and the code and also to make it easier to work with'
`;

export const NavLogo = styled(LinkRoute)`
  color: red;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: red;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: right;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: Black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavButton = styled.nav`
  // I changed the name of this component from NavBtn to NavButton to make it easier to understand
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRoute)`
  border-radius: 50px;
  background: red;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const LightTheme = {
  body: "#fff",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
};

export const DarkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
};

export const theme = {
  light: LightTheme,
  dark: DarkTheme,
};
