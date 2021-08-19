import { InputBox, InputLabel, InputWrapper } from "./Search.styled";

import React from "react";
import SearchIcon from "@material-ui/icons/Search";

interface InputProps {
  label: string;
  inputSetter: (value: string) => void;
}

const Search = ({ label, inputSetter }: InputProps) => (
  <InputWrapper>
    <SearchIcon />
    <InputLabel>{label}</InputLabel>
    <InputBox
      type="text"
      onChange={(event) => {
        inputSetter(event.target.value);
      }}
    />
  </InputWrapper>
);

export default Search;
