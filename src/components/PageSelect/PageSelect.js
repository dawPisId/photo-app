import {
  ItemCountButton,
  ItemCountLabel,
  ItemCountList,
  ItemCountListItem,
  ItemCountNumber,
  ItemCountWrapper,
  SelectContainer,
  SelectItem,
} from "./PageSelect.styled";
import React, { useState } from "react";
import { changeItemCount, next, prev, range } from "./helpers";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const createPageList = (currentPage, setCurrentPage, pageCount) => {
  let flags = {
    leftDots: false,
    rightDots: false,
    beginning: 0,
    end: 0,
  };
  switch (true) {
    case pageCount < 8: //no dots are displayed, pageCount is less or equal to item limit in selectBar.
      flags = {
        ...flags,
        beginning: 2,
        end: pageCount,
      };
      break;
    case currentPage <= 4 && pageCount > 7: //only right dots are displayed
      flags = {
        ...flags,
        rightDots: true,
        beginning: 2,
        end: 5,
      };
      break;
    case currentPage >= 5 && currentPage <= pageCount - 4 && pageCount > 7: //left and right dots are displayed
      flags = {
        leftDots: true,
        rightDots: true,
        beginning: currentPage - 1,
        end: currentPage + 1,
      };
      break;
    case currentPage >= pageCount - 3 && pageCount > 7: //only left dots are displayed
      flags = {
        ...flags,
        leftDots: true,
        beginning: pageCount - 4,
        end: pageCount - 1,
      };
      break;
    default:
      return <SelectContainer />;
  }
  let createPageNumbers = range(flags.beginning, flags.end).map(
    (page, index) => (
      <SelectItem
        key={index}
        className={currentPage === page ? "active" : null}
        onClick={() => setCurrentPage(page)}
      >
        {page}
      </SelectItem>
    )
  );
  return (
    <SelectContainer>
      <ArrowBackIosIcon onClick={() => prev(currentPage, setCurrentPage)} />
      <SelectItem
        className={currentPage === 1 ? "active" : null}
        onClick={() => setCurrentPage(1)}
      >
        1
      </SelectItem>
      {flags.leftDots && <SelectItem>...</SelectItem>}
      {createPageNumbers}
      {flags.rightDots && <SelectItem>...</SelectItem>}
      {pageCount > 7 && (
        <SelectItem
          className={currentPage === pageCount ? "active" : null}
          onClick={() => setCurrentPage(pageCount)}
        >
          {pageCount}
        </SelectItem>
      )}
      <ArrowForwardIosIcon
        onClick={() => next(currentPage, setCurrentPage, pageCount)}
      />
    </SelectContainer>
  );
};

function PageSelect({
  currentPage,
  currentPageSetter,
  pagesCount,
  itemCount,
  itemsPerPageSetter,
}) {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  return (
    <div>
      <SelectContainer>
        {createPageList(currentPage, currentPageSetter, pagesCount)}
        <ItemCountWrapper>
          <ItemCountButton onClick={() => setDropdownToggle(!dropdownToggle)}>
            <ItemCountLabel>Per page</ItemCountLabel>
            <ItemCountNumber>{itemCount}</ItemCountNumber>
            <ArrowDropDownIcon />
          </ItemCountButton>
          <ItemCountList className={dropdownToggle ? "active" : "hidden"}>
            <ItemCountListItem
              onClick={() =>
                changeItemCount(10, itemsPerPageSetter, setDropdownToggle)
              }
            >
              10
            </ItemCountListItem>
            <ItemCountListItem
              onClick={() =>
                changeItemCount(20, itemsPerPageSetter, setDropdownToggle)
              }
            >
              20
            </ItemCountListItem>
            <ItemCountListItem
              onClick={() =>
                changeItemCount(50, itemsPerPageSetter, setDropdownToggle)
              }
            >
              50
            </ItemCountListItem>
          </ItemCountList>
        </ItemCountWrapper>
      </SelectContainer>
    </div>
  );
}

export default PageSelect;
