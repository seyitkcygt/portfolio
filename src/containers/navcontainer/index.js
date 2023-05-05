import React, { useState } from "react";
import { NavBar } from "../../components";

export default function NavContainer() {
  const [expanded, setExpanded] = useState(false);

  return (
    <NavBar>
      <NavBar.Logo>HS</NavBar.Logo>

      <NavBar.Hamburger
        expanded={expanded}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        X
      </NavBar.Hamburger>

      <NavBar.NavLinks expanded={expanded}>
        <NavBar.Link
          onClick={() => {
            var projects = document.querySelector(
              "#projects"
            );
            var ref = projects.getClientRects();
            window.scrollTo({
              top: ref[0].top,
              behavior: "smooth",
            });
          }}
        >
          Projects
        </NavBar.Link>
        <NavBar.Link
          onClick={() => {
            //TODO: add contacts

            
          }}
        >
          Contact
        </NavBar.Link>
      </NavBar.NavLinks>
    </NavBar>
  );
}
