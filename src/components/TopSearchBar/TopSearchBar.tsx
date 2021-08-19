import { Container, Label } from "./TopSearchBar.styled";
import React, { useState } from "react";

import Button from "../../components/Button/Button";
import Search from "../../components/Search/Search";

interface InputProps {
  label: string;
  setSearchQuery: (value: string) => void;
}

function TopSearchBar({ label, setSearchQuery }: InputProps) {
  const [inputQuery, setInputQuery] = useState("");
  return (
    <Container>
      <Label>{label}</Label>
      <Search inputSetter={setInputQuery} label="Search by title" />
      <Button name="SEARCH" action={() => setSearchQuery(inputQuery)}></Button>
    </Container>
  );
}

export default TopSearchBar;
