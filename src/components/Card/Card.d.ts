export interface CardProps {
  /**
   * Photo title.
   */
  name: string;
  /**
   * Url of the photo.
   */
  url: string;
  /**
   * Function to run when the card is clicked.
   */
  action: () => void;
}
