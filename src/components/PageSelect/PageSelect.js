import {
  PageCountButton,
  PageCountLabel,
  PageCountList,
  SelectContainer,
  SelectItem,
} from "./PageSelect.styled";
import React, { useState } from "react";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

//Temporary var to test the component.

const PagesCount = 10;

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const prev = (currentPage, setCurrentPage) => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};

const next = (currentPage, setCurrentPage, pageCount) => {
  if (currentPage < pageCount) {
    setCurrentPage(currentPage + 1);
  }
};

/*
TODO: Refactor this function ASAP, set up flags for dots,
set beginning and end values for numbers in the switch statement and
put only one return statement after the switch, render stuff there.
Also, finish up the pageCount dropdown.
*/

const createPageList = (currentPage, setCurrentPage, pageCount) => {
  switch (true) {
    case pageCount < 8:
      return (
        <SelectContainer>
          <ArrowBackIosIcon onClick={() => prev(currentPage, setCurrentPage)} />
          {range(1, pageCount).map((page) => (
            <SelectItem
              className={currentPage === page ? "active" : null}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </SelectItem>
          ))}
          <ArrowForwardIosIcon
            onClick={() => next(currentPage, setCurrentPage, PagesCount)}
          />
        </SelectContainer>
      );
    case currentPage <= 4 && pageCount > 7:
      return (
        <SelectContainer>
          <ArrowBackIosIcon onClick={() => prev(currentPage, setCurrentPage)} />
          {range(1, 5).map((page) => (
            <SelectItem
              className={currentPage === page ? "active" : null}
              key={page}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </SelectItem>
          ))}
          <SelectItem>...</SelectItem>
          <SelectItem onClick={() => setCurrentPage(pageCount)}>
            {pageCount}
          </SelectItem>
          <ArrowForwardIosIcon
            onClick={() => next(currentPage, setCurrentPage, PagesCount)}
          />
        </SelectContainer>
      );
    case currentPage >= 5 && currentPage <= pageCount - 4 && pageCount > 7:
      return (
        <SelectContainer>
          <ArrowBackIosIcon onClick={() => prev(currentPage, setCurrentPage)} />
          <SelectItem id={1} onClick={() => setCurrentPage(1)}>
            1
          </SelectItem>
          <SelectItem>...</SelectItem>
          {range(currentPage - 1, currentPage + 1).map((page) => (
            <SelectItem
              className={currentPage === page ? "active" : null}
              key={page}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </SelectItem>
          ))}
          <SelectItem>...</SelectItem>
          <SelectItem onClick={() => setCurrentPage(pageCount)}>
            {pageCount}
          </SelectItem>
          <ArrowForwardIosIcon
            onClick={() => next(currentPage, setCurrentPage, PagesCount)}
          />
        </SelectContainer>
      );
    case currentPage >= pageCount - 3 && pageCount > 7:
      return (
        <SelectContainer>
          <ArrowBackIosIcon onClick={() => prev(currentPage, setCurrentPage)} />
          <SelectItem id={1} onClick={() => setCurrentPage(1)}>
            1
          </SelectItem>
          <SelectItem>...</SelectItem>
          {range(pageCount - 4, pageCount).map((page) => (
            <SelectItem
              className={currentPage === page ? "active" : null}
              key={page}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </SelectItem>
          ))}
          <ArrowForwardIosIcon
            onClick={() => next(currentPage, setCurrentPage, PagesCount)}
          />
        </SelectContainer>
      );
    default:
      return <SelectContainer />;
  }
};

function PageSelect() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <SelectContainer>
        {createPageList(currentPage, setCurrentPage, PagesCount)}
        <PageCountList>
          <PageCountLabel>Per page</PageCountLabel>
          <PageCountButton>{PagesCount}</PageCountButton>
          <ArrowDropDownIcon />
        </PageCountList>
      </SelectContainer>
    </div>
  );
}

export default PageSelect;
