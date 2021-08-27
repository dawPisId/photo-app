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
import { PageSelectProps } from './PageSelect.d';

const PageSelect: React.FC<PageSelectProps> = ({
  currentPage,
  currentPageSetter,
  pagesCount,
  itemCount,
  itemsPerPageSetter,
}) => {
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
          <ItemCountButton data-testid = "testButton" onClick={() => setDropdownToggle(!dropdownToggle)}>
            <ItemCountLabel>Per page</ItemCountLabel>
            <ItemCountNumber>{itemCount}</ItemCountNumber>
            <ArrowDropDownIcon />
          </ItemCountButton>
          <ItemCountList data-testid = "testList" className={dropdownToggle ? "active" : "hidden"}>
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
};

export default PageSelect;
