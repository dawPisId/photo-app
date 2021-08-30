import { Container, Label } from "./TopSearchBar.styled";
import React, { FC, useState } from "react";

import Button from "../../components/Button/Button";
import Search from "../../components/Search/Search";
import { TopSearchBarProps } from "./TopSearchBar.d";

/**
 * Top search bar used for the search feature used on the Albums and Photos pages.
 */
const TopSearchBar: FC<TopSearchBarProps> = ({ label, setSearchQuery }) => {
  const [inputQuery, setInputQuery] = useState("");
  return (
    <Container>
      <Label>{label}</Label>
      <Search inputSetter={setInputQuery} label="Search by title" />
      <Button
        name="SEARCH"
        action={() => setSearchQuery(inputQuery)}
        theme="primary"
      ></Button>
    </Container>
  );
};

export default TopSearchBar;
