import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
  @media (max-width: 620px) {
    flex-direction: column;
  }
`;
export const Label = styled.span`
  margin-right: auto;
  @media (max-width: 620px) {
    flex-direction: column;
    margin: inherit;
  }
`;
