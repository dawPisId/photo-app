export interface PageSelectProps {
  currentPage: number;
  currentPageSetter: (value: number) => void;
  pagesCount: number;
  itemCount: number;
  itemsPerPageSetter: (value: number) => void;
}
