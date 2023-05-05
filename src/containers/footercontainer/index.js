import React from "react";
import { Footer } from "../../components";

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.TechStaff style={{ marginTop: "2rem" }}>
        <Footer.TechInfo>Tech Stack |</Footer.TechInfo>
        <Footer.Tech src={"icons/html.svg"} alt={"html"} />
        <Footer.Tech src={"icons/css.svg"} alt={"css"} />
        <Footer.Tech src={"icons/javascript.svg"} alt={"js"} />
        <Footer.Tech src={"icons/react.svg"} alt={"react"} />
        <Footer.Tech src={"icons/figma.svg"} alt={"figma"} />
      </Footer.TechStaff>
    </Footer>
  );
}
