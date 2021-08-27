export interface SearchProps {
  /**
   * Label value displayed on the top left of the box.
   */
  label: string;
  /**
   * Function used to set the input query.
   */
  inputSetter: (value: string) => void;
}
