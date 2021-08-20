import { InputBox, InputLabel, InputWrapper } from "./Search.styled";

import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const Search = ({ label, inputSetter }: SearchProps) => (
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
