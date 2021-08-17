import styled from "styled-components";

export const CloseButton = styled.div`
  margin-top: 1rem;
  margin-right: 2rem;
  align-self: flex-end;
  svg {
    color: white;
    &.MuiSvgIcon-root {
      font-size: 2rem;
      display: block;
    }
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(5px);
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0px;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

export const Image = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;
  img {
    max-width: 20rem;
  }
  @media (max-width: 430px) {
    img {
      max-width: 17rem;
    }
  }
  @media (max-width: 330px) {
    img {
      max-width: 15rem;
    }
  }
`;

export const Label = styled.div`
  color:white;
  font-size: 1.25rem;
  font-family: "Roboto", sans-serif;
  @media(max-width:430px){
    font-size:1rem;
  @media(max-width:360px){
    font-size:0.8rem;
  }
`;
