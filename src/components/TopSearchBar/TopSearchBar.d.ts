export interface TopSearchBarProps {
  /**
   * Page label displayed on the left side of the page, under the header.
   */
  label: string;
  /**
   * Function used to pass through the search query to the main componen
   */
  setSearchQuery: (value: string) => void;
}
