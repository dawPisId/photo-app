export interface StateProps {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export interface AlbumCardProps {
  /**
   * Album name.
   */
  name: string;
  /**
   * Album number used for photo fetching.
   */
  albumNumber: number;
}
