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
      const minScale = 0.9;
      const offset = 100;
      const items = gsap.utils.toArray(".Item");
      const distrubitor = gsap.utils.distribute({
        base: minScale,
        amount: 0.5,
      });

      items.forEach((item, index) => {
        const scaleVal = distrubitor(index, items[index], items);
        const tween = gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: `top center+=${offset}`,
            end: `bottom center+=${offset}`,
            scrub: true,
            // markers: true,
            invalidateOnRefresh: true,
          },
          //ease: "none",
          yPercent: index * 15,
          scale: scaleVal,
          // opacity: scaleVal,
        });
      });
    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);

  let obj = [1, 2, 3, 4, 5];

  return (
    <Jumbotron ref={comp} itemC={obj.length - 2}>
      {obj.map((e) => {
        return (
          <Jumbotron.Item
            onClick={() => {
              console.log(e);
            }}
            className="Item"
            key={e}
            file={`${e}`}
          >
            <Jumbotron.PictureContainer className="PictureContainer">
              <Jumbotron.Picture></Jumbotron.Picture>
            </Jumbotron.PictureContainer>
            <Jumbotron.DetailContainer className="DetailContainer">
              <Jumbotron.Title>Title {e}</Jumbotron.Title>
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
