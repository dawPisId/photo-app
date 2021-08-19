export const zoom = (
  setZoom: (bool: boolean) => void,
  setUrl: (value: string) => void,
  imgUrl: string,
  setLabel: (value: string) => void,
  label: string
) => {
  setUrl(imgUrl);
  setLabel(label);
  setZoom(true);
};

export const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const prev = (
  currentPage: number,
  setCurrentPage: (number: number) => void
) => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};

export const next = (
  currentPage: number,
  setCurrentPage: (number: number) => void,
  pageCount: number
) => {
  if (currentPage < pageCount) {
    setCurrentPage(currentPage + 1);
  }
};

export const changeItemCount = (
  itemCount: number,
  setItemCount: (count: number) => void,
  setDropdownToggle: (bool: boolean) => void
) => {
  setItemCount(itemCount);
  setDropdownToggle(false);
};

export const counts = [12, 16, 20];
