import React from "react";
import {
  Container,
  SayHiContainer,
  PictureContainer,
  SayHiHeader,
  SayHiContent,
  SayHiLink,
  SayHiLinkContainer,
  Picture,
} from "./styles/info";

export default function Info({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Info.SayHiContainer = function InfoSayHi({ children, ...restProps }) {
  return <SayHiContainer {...restProps}>{children}</SayHiContainer>;
};

Info.PictureContainer = function InfoPictureContainer({
  children,
  ...restProps
}) {
  return <PictureContainer {...restProps}>{children}</PictureContainer>;
};

Info.SayHiHeader = function InfoSayHiHeader({ children }) {
  return <SayHiHeader>{children}</SayHiHeader>;
};

Info.SayHiContent = function InfoSayHiContent({ children }) {
  return <SayHiContent>{children}</SayHiContent>;
};

Info.SayHiLinkContainer = function InfoSayHiLinkContainer({
  children,
  ...restProps
}) {
  return <SayHiLinkContainer {...restProps}>{children}</SayHiLinkContainer>;
};

Info.SayHiLink = function InfoSayHiLink({ href, src, alt, ...restProps }) {
  return (
    <a href={href}>
      <SayHiLink src={src} alt={alt} {...restProps}></SayHiLink>
    </a>
  );
};

Info.Picture = function InfoPicture({ src, alt = "My Picture", ...restProps }) {
  return <Picture src={src} alt={alt} {...restProps}></Picture>;
};
