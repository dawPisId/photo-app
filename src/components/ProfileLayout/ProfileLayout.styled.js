import styled from "styled-components";

export const Section = styled.div``;
export const Label = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
`;

export const FirstHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid lightgrey;
  svg {
    padding-right: 1rem;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  svg {
    padding-right: 1rem;
  }
`;

export const SectionLayout = styled.div`
  display: grid;
  padding: 3rem 2rem 3rem 2rem;
  grid-template-columns: 1.05fr 0.95fr;
  grid-gap: 1rem;
  grid-column-gap: 4rem;
  @media(max-width:730px){
      grid-template-columns: 1fr;
  }
`;

export const CompanyLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem 3rem 2rem;
  gap:1rem;
`;
