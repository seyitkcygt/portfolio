import React from "react";
import { Info } from "../../components";

export default function InfoContainer() {
  return (
    <Info>
      <Info.SayHiContainer>
        <Info.SayHiHeader>Front-End React Developer 👋</Info.SayHiHeader>

        <Info.SayHiContent>
          Hi, I`m Seyit Kocyigit. A passionate Front-End React Developer based
          in Turkey.
        </Info.SayHiContent>

        <Info.SayHiLinkContainer>
          <Info.SayHiLink src={"icons/github.svg"} alt={"Github"} href={"https://github.com/seyitkcygt"}></Info.SayHiLink>

          <Info.SayHiLink src={"icons/linkedin.svg"} alt={"LinkedIn"} href={"https://www.linkedin.com/in/seyit-ahmet-kocyigit-512049168/"}></Info.SayHiLink>
        </Info.SayHiLinkContainer>
      </Info.SayHiContainer>
      <Info.PictureContainer>
        <Info.Picture src={"images/my_images/brad.jpg"} alt="My Image"></Info.Picture>
      </Info.PictureContainer>
    </Info>
  );
}
