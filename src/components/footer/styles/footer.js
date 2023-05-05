import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  
`;

export const Techstaff = styled.div`
  display: flex;
  align-items: center;
  justf-content: space-between;
  gap: 3rem;

  @media(max-width: 600px) {
   flex-wrap: wrap;
   gap: 1rem;
   padding: 1rem;
  }
`;

export const Tech = styled.img`
  src: ${({src}) => src};
  alt: ${({alt}) => alt};
`;

export const TechInfo = styled.p`
font-size: 2rem;
font-weight: 700;
`;

