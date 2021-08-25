import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 2rem;
  @media (max-width: 880px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 670px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 440px) {
    grid-template-columns: 1fr;
  }
`;
