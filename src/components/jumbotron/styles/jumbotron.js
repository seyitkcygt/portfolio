import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0 2rem 0;
  margin-top: 3rem;
  height: 500px;
  /*clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 20%,
    100% 80%,
    80% 100%,
    20% 100%,
    0% 80%,
    0% 20%
  );*/
  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

export const Item = styled.div`
  --cnt: ${({ file }) => file};
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 700px;
  height: 350px;
  background: #f8d775;
  padding: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: inherit;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 20px 16px 0px,
      rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  }

  &::before {
    content: "${({ file }) => file}";
    position: absolute;
    width: 100px;
    height: 50px;
    top: -30px;
    right: 0;
    background: green;
    text-align: center;
  }

  &:hover .PictureContainer,
  &:hover .DetailContainer {
    transform: translateY(-200px);
    background: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px -185px 36px -28px inset;
  }
`;

export const PictureContainer = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  transition: all 0.5s;
`;

export const DetailContainer = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s;
`;

export const Picture = styled.img`
  src: ${({ src }) => src};
  alt: ${({ alt }) => alt};
`;

export const Title = styled.h1``;

export const Detail = styled.p``;

export const Image = styled.img`
  src: ${({ src }) => src};
  alt: ${({ alt }) => alt};
`;
