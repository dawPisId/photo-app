import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
    display:inline-block;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    background-color:#e5e5e5;
    border: none;
    border-radius:2px;
    box-shadow: 0px 4px 3px #aaaaaa;

    &:active{
        background-color: #d9d9d9;
    }
`



const Button = (props) => (
  <Wrapper>
      {props.name}
  </Wrapper>
);

export default Button
;
