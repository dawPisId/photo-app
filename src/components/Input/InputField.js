import { InputBox, InputLabel, InputWrapper } from "./InputField.styled";

import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const InputField = ({label, action}) => (
  <InputWrapper>
    <SearchIcon />
    <InputLabel>{label}</InputLabel>
    <InputBox type="text" onChange = {action}/>
  </InputWrapper>
);

export default InputField;
