import { Container, SelectItem } from "./PageSelectItems.styled";
import { next, prev, range } from "../PageSelect/helpers";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React from "react";

interface InputProps {
  currentPage: number;
  pageCount: number;
  setCurrentPage: (value:number) => void;
}
function PageSelectItems({ currentPage, setCurrentPage, pageCount }:InputProps) {
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
      return <Container />;
  }
  let createPageNumbers = range(flags.beginning, flags.end).map(
    (page, index) => (
      <SelectItem
        key={index}
        className={currentPage === page ? "active" : undefined}
        onClick={() => setCurrentPage(page)}
      >
        {page}
      </SelectItem>
    )
  );
  return (
    <Container>
      <ArrowBackIosIcon onClick={() => prev(currentPage, setCurrentPage)} />
      <SelectItem
        className={currentPage === 1 ? "active" : undefined}
        onClick={() => setCurrentPage(1)}
      >
        1
      </SelectItem>
      {flags.leftDots && <SelectItem>...</SelectItem>}
      {createPageNumbers}
      {flags.rightDots && <SelectItem>...</SelectItem>}
      {pageCount > 7 && (
        <SelectItem
          className={currentPage === pageCount ? "active" : undefined}
          onClick={() => setCurrentPage(pageCount)}
        >
          {pageCount}
        </SelectItem>
      )}
      <ArrowForwardIosIcon
        onClick={() => next(currentPage, setCurrentPage, pageCount)}
      />
    </Container>
  );
}

export default PageSelectItems;
