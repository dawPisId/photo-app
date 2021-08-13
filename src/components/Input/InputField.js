import { InputBox, InputLabel, InputWrapper } from "./InputField.styled";

import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const InputField = ({ label, inputSetter }) => (
  <InputWrapper>
    <SearchIcon />
    <InputLabel>{label}</InputLabel>
    <InputBox type="text" onChange={(event) => {inputSetter(event.target.value)}} />
  </InputWrapper>
);

export default InputField;
