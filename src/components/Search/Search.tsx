///<reference path="Search.d.ts"/>

import { InputBox, InputLabel, InputWrapper } from "./Search.styled";

import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const Search: React.FC<SearchProps> = ({ label, inputSetter }) => (
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
