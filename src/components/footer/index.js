import React from "react";
import { Container, Techstaff, Tech, TechInfo } from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.TechStaff = function FooterTechStaf({ children, ...restProps }) {
  return <Techstaff {...restProps}>{children}</Techstaff>;
};


Footer.Tech = function FooterTech({src, alt, ...restProps}) {
  return <Tech src={src} alt={alt} {...restProps}></Tech>;
}

Footer.TechInfo = function FooterTechInfo({children, ...restProps}) {
  return <TechInfo {...restProps}>{children}</TechInfo>;
}