import React, { useRef, useLayoutEffect } from "react";
import { Jumbotron } from "../../components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function JumbotronContainer() {
  const comp = useRef(); // create a ref for the root level element (for scoping)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#projects",
        start: "start start",
        end: "center center", //TODO: work on this animation
        markers: true,
        once: true,
        onEnter: () => {
          gsap.to("#projects", {
            borderRadius: 0,
          });
        },

        onLeave: () => {
          gsap.to("#projects", {
            borderRadius: "5rem",
          });
        },
      });
      gsap.utils.toArray(".PictureContainer").forEach(function (elem) {
        gsap.set(elem, { opacity: 0 });
        ScrollTrigger.create({
          trigger: elem,
          start: "start center",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              elem,
              { x: -100, opacity: 0 },
              { duration: 2, opacity: 1, x: 0 }
            );
          },
        });
      });

      gsap.utils.toArray(".DetailContainer").forEach(function (elem) {
        gsap.set(elem, { opacity: 0 });
        ScrollTrigger.create({
          trigger: elem,
          start: "start center",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              elem,
              { x: 100, opacity: 0 },
              { duration: 2, opacity: 1, x: 0 }
            );
          },
        });
      });
    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);

  let obj = [1, 2, 3, 4, 5];

  return (
    <Jumbotron id="projects" ref={comp}>
      {obj.map((e) => {
        return (
          <Jumbotron.Item key={e}>
            <Jumbotron.PictureContainer className="PictureContainer">
              <Jumbotron.Picture></Jumbotron.Picture>
            </Jumbotron.PictureContainer>
            <Jumbotron.DetailContainer className="DetailContainer">
              <Jumbotron.Title>Title</Jumbotron.Title>
              <Jumbotron.Detail>Detail about the project</Jumbotron.Detail>

              <Jumbotron.ImageLink
                href={"https://github.com/seyitkcygt/CarRenterdApp"}
                alt={"github"}
              ></Jumbotron.ImageLink>
            </Jumbotron.DetailContainer>
          </Jumbotron.Item>
        );
      })}
    </Jumbotron>
  );
}
