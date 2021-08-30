import { InputBox, InputLabel, InputWrapper } from "./Search.styled";
import React, { FC } from "react";

import SearchIcon from "@material-ui/icons/Search";
import { SearchProps } from "./Search.d";

/**
 * Search input component used for getting queries from the user. Used in Photos and Albums pages.
 */
const Search: FC<SearchProps> = ({ label, inputSetter }) => (
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
