import styled, { keyframes } from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const SayHiContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  height: 350px;
`;

export const PictureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 350px;
`;

export const SayHiHeader = styled.h1``;

export const SayHiContent = styled.p``;

export const SayHiLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const SayHiLink = styled.img`
  alt: ${({ alt }) => alt};
  src: ${({ src }) => src};
`;

const picAnimation = keyframes`
 from{
  border-top-left-radius: 30% 30%;
  border-top-right-radius: 70% 30%;
  border-bottom-right-radius: 70% 70%;
  border-bottom-left-radius: 30% 70%;

  //border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
 }

 to {
  border-top-left-radius: 54% 70%;
  border-top-right-radius: 46% 71%;
  border-bottom-right-radius: 49% 29%;
  border-bottom-left-radius: 51% 30%;

  //border-radius: 54% 46% 49% 51% / 70% 71% 29% 30%;
 }

`;

export const Picture = styled.img`
  background: white;
  alt: ${({ alt }) => alt};
  src: ${({ src }) => src};
  width: 200px;
  aspect-ratio: 1;
  outline: 3px solid blue;

  animation-name: ${picAnimation};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;

  /*
  transition: border-radius 500ms ease;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  &:hover {
    border-radius: 54% 46% 49% 51% / 70% 71% 29% 30%;
  }
  */
`;
