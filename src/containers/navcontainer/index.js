import React, { useRef, useState, useLayoutEffect } from "react";
import { NavBar } from "../../components";

import { ScrollTrigger } from "gsap/all";
import { gsap, Bounce } from "gsap";

export default function NavContainer() {
  const [expanded, setExpanded] = useState(false);

  const containerRef = useRef(null);
  const contactRef = useRef(null);
  const messageRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)

    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "none play reverse none",
        },
      })
      .to(contactRef.current, {
        opacity: 0,
      })
      .to(
        messageRef.current,
        {
          display: "flex",
          position: "fixed",
          zIndex: "999",
          borderRadius: "50%",
          duration: 0.3,
        },
        ">-0.3"
      )
      .to(messageRef.current, {
        position: "fixed",
        right: "9%",
        top: "90vh",
        duration: 2,
        ease: Bounce.easeOut,
      });

    let ctx = gsap.context(() => {}, containerRef); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <NavBar ref={containerRef}>
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
        <NavBar.Link onClick={() => {}}>Projects</NavBar.Link>
        <NavBar.Link
          onClick={() => {
            //TODO: add contacts
          }}
          ref={contactRef}
        >
          Contact
        </NavBar.Link>

        <NavBar.Message
          onClick={() => {
            //TODO: add contacts
          }}
          ref={messageRef}
        >
          SVG
        </NavBar.Message>
      </NavBar.NavLinks>
    </NavBar>
  );
}
