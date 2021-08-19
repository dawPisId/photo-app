import {
  ItemCountButton,
  ItemCountLabel,
  ItemCountList,
  ItemCountListItem,
  ItemCountNumber,
  ItemCountWrapper,
  SelectContainer,
} from "./PageSelect.styled";
import React, { useState } from "react";
import { changeItemCount, counts } from "./helpers";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import PageSelectItems from "../PageSelectItems/PageSelectItems";

interface InputProps {
  currentPage: number;
  currentPageSetter: (value: number) => void;
  pagesCount: number;
  itemCount: number;
  itemsPerPageSetter: (value: number) => void;
}

function PageSelect({
  currentPage,
  currentPageSetter,
  pagesCount,
  itemCount,
  itemsPerPageSetter,
}: InputProps) {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  return (
    <div>
      <SelectContainer>
        <PageSelectItems
          currentPage={currentPage}
          setCurrentPage={currentPageSetter}
          pageCount={pagesCount}
        />
        <ItemCountWrapper>
          <ItemCountButton onClick={() => setDropdownToggle(!dropdownToggle)}>
            <ItemCountLabel>Per page</ItemCountLabel>
            <ItemCountNumber>{itemCount}</ItemCountNumber>
            <ArrowDropDownIcon />
          </ItemCountButton>
          <ItemCountList className={dropdownToggle ? "active" : "hidden"}>
            {counts.map((number, index) => (
              <ItemCountListItem
                key={index}
                onClick={() =>
                  changeItemCount(number, itemsPerPageSetter, setDropdownToggle)
                }
              >
                {number}
              </ItemCountListItem>
            ))}
          </ItemCountList>
        </ItemCountWrapper>
      </SelectContainer>
    </div>
  );
}

export default PageSelect;
