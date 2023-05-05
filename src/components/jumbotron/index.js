import React from "react";

import {
  Container,
  Item,
  PictureContainer,
  DetailContainer,
  Picture,
  Title,
  Detail,
  Image,
  SVG,
} from "./styles/jumbotron";

import { VerticalSVG } from "../../constants/svg/github";

const Jumbotron = React.forwardRef((props, ref) => (
  <Container ref={ref} {...props}>
    {props.children}
  </Container>
));

Jumbotron.Item = function JumbotronItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Jumbotron.PictureContainer = function JumbotronPictureContainer({
  children,
  ...restProps
}) {
  return <PictureContainer {...restProps}>{children}</PictureContainer>;
};

Jumbotron.DetailContainer = function JumbotronDetailContainer({
  children,
  ...restProps
}) {
  return <DetailContainer {...restProps}>{children}</DetailContainer>;
};

Jumbotron.Picture = function JumbotronPicture({
  src,
  alt = "Demo Picture",
  ...restProps
}) {
  return <Picture src={src} alt={alt} {...restProps}></Picture>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.Detail = function JumbotronDetail({ children, ...restProps }) {
  return <Detail {...restProps}>{children}</Detail>;
};

Jumbotron.ImageLink = function JumbotronLink({ src, alt, href, ...restProps }) {
  return (
    <a href={href}>
      <Image src={src} alt={alt} {...restProps} />
    </a>
  );
};

Jumbotron.VerticalSVG = function JumbotronVerticalSVG({ ...restProps }) {
  return (
    <SVG {...restProps}>
      <VerticalSVG />
    </SVG>
  );
};

export default Jumbotron;
