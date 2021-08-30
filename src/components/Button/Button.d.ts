export interface ButtonProps {
  /** 
  * Text displayed in the button.
  */
  name: string;
  /** 
  * Function called when the label is used.
  */
  action: () => void;
  /**
   * Choice between primary and secondary style.
   */
  theme:("primary" | "secondary")
}
