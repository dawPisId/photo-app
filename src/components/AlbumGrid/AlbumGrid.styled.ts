import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 2rem;
  min-width: 0;
  min-height: 0;
  @media (max-width: 740px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 510px) {
    grid-template-columns: 1fr;
  }
`;
