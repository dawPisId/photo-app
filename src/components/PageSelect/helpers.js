export const zoom = (setZoom, setUrl, imgUrl, setLabel, label) => {
  setUrl(imgUrl);
  setLabel(label);
  setZoom(true);
};

export const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const prev = (currentPage, setCurrentPage) => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};

export const next = (currentPage, setCurrentPage, pageCount) => {
  if (currentPage < pageCount) {
    setCurrentPage(currentPage + 1);
  }
};

export const changeItemCount = (itemCount, setItemCount, setDropdownToggle) => {
  setItemCount(itemCount);
  setDropdownToggle(false);
};

export const counts = [10, 20, 50];
