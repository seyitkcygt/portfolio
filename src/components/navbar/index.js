import React from "react";

import {
  Nav,
  Logo,
  NavLinks,
  Link,
  Hamburger,
  HamburgerSvg,
} from "./styles/navbar";

export default function NavBar({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
}

NavBar.Logo = function NavBarLogo({ children }) {
  return <Logo>{children}</Logo>;
};

NavBar.NavLinks = function NavBarNavLinks({
  children,
  expanded,
  onClick,
  ...restProps
}) {
  return (
    <NavLinks onClick={onClick} expanded={expanded} {...restProps}>
      {children}
    </NavLinks>
  );
};

NavBar.Link = function NavbarLink({ children, href, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

NavBar.Hamburger = function NavBarHamburger({ expanded, ...restProps }) {
  return (
    <Hamburger {...restProps}>
      <HamburgerSvg expanded={expanded}>
        <path
          d="m 10 25 l 30 0 a 1 1 0 0 1 0 10 l -30 0 a 1 1 0 0 1 0 -20 l 15 0 l 0 40"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </HamburgerSvg>
    </Hamburger>
  );
};
