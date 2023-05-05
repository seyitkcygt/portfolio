import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: black;
  padding: 2rem 0 2rem 0;
  margin-top: 3rem;

  clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 20%,
    100% 80%,
    80% 100%,
    20% 100%,
    0% 80%,
    0% 20%
  );
  @media (max-width: 600px) {
    border-radius: 0;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const PictureContainer = styled.div`
  width: 350px;
  aspect-ratio: 1;
  background: green;
`;

export const DetailContainer = styled.div`
  width: 350px;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: orange;
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

export const SVG = styled.div`
  position: absolute;
  inset: 0;
  width: 1px;
  & svg {
    stroke-dasharray: ${({ percent }) => percent} 100;
    transition: all 3s;
  }

  &:hover svg {
    stroke-dasharray: 100 100;
  }
`;
