import styled, { keyframes } from "styled-components/macro";

export const Nav = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: 900;
  flex: 5;
  padding: 1rem;
`;

const AppearAnimation = keyframes`
  0% {
    border-radius: 25% 0% 100% 25% / 50% 0% 0% 50% ;
    right: -10rem;
  }

  50%{
    border-radius: 25% 0% 100% 25% / 50% 0% 0% 50% ;
  }
  100 % {
    border-radius: 0;
    right:2rem;
  }
`;

export const NavLinks = styled.div.attrs((props) => ({
  "aria-expanded": props.expanded,
}))`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex: 3;

  @media (max-width: 600px) {
    position: absolute;
    right: 2rem;
    top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 10rem;
    height: 6rem;
    flex: 3;
    background: black;
    color: white;

    &[aria-expanded="false"] {
      display: none;
    }

    animation: ${AppearAnimation} 500ms;
  }
`;

export const Link = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
`;

export const Hamburger = styled.div`
  display: none;
  width: 3.5rem;
  font-size: 2rem;
  aspect-ratio: 1;

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
  }

  & svg {
    fill: none;
    stroke: black;
    width: 3rem;
    height: 3.5rem;
  }
`;

export const HamburgerSvg = styled.svg.attrs((props) => ({
  "aria-expanded": props.expanded,
}))`
  & path {
    transform-origin: center;
    transition: 1s;
    stroke-dasharray: 30 16 30 300;
  }

  &[aria-expanded="true"] path {
    stroke-dasharray: 30 50 30 300;
    stroke-dashoffset: -46;
    translate: 5px -5px;
    rotate: 0.125turn;
  }
`;

export const Message = styled.div`
  display: none;
  position: absolute;
  top: 2%;
  right: 10%;
  transformorigin: center;
  width: 3rem;
  aspect-ratio: 1;
  cursor: pointer;
  outline: 3px solid grey;

  //after display flex
  align-items: center;
  justify-content: center;
`;
