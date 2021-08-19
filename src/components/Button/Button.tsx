import React from "react";
import { Wrapper } from "./Button.styled";

const performFunction = (e:React.MouseEvent<HTMLElement,MouseEvent>,action:()=>void) =>{
  e.preventDefault();
  action();
}

interface IProps {
  name: string,
  action: () => void
}

const Button = ({ name, action }:IProps) => (
  <Wrapper onClick={(e) => {performFunction(e,action)}}>{name}</Wrapper>
);

export default Button;
