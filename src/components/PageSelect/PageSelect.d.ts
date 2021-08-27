export interface PageSelectProps {
  /**
   * Number of the user's current page.
   */
  currentPage: number;
  /**
   * Function to set the current page on click.
   */
  currentPageSetter: (value: number) => void;
  /**
   * Total count of the pages.
   */
  pagesCount: number;
  /**
   * Total count of images/albums displayed on the current page.
   */
  itemCount: number;
  /**
   * Function to set the items per page count.
   */
  itemsPerPageSetter: (value: number) => void;
}
