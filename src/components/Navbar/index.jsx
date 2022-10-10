import React from "react";
import Splash from "./NavbarElements";
import { ThemeProvider } from "styled-components";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavButton,
  NavBtnLink,
  LightTheme,
  DarkTheme,
  theme,
} from "./NavbarElements";

import { useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Coline</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="portfolio">Portfolio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavButton>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavButton>
          <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
            <Splash theme={theme} setTheme={setTheme} />
          </ThemeProvider>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
