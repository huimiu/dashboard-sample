import { CSSProperties } from "react";

export const dashboardStyles = (
  isMobile?: boolean,
  rowHeighs?: string,
  columnWidths?: string
): CSSProperties => {
  return {
    display: "grid",
    gap: "20px",
    padding: "20px",
    gridTemplateColumns: isMobile ? "1fr" : columnWidths ?? "4fr 6fr",
    gridTemplateRows: rowHeighs ?? "1fr",
  };
};

export const oneColumn = (heights?: string, width?: string): CSSProperties => {
  if (heights) {
    return {
      display: "grid",
      gap: "20px",
      gridTemplateRows: heights ?? "1fr",
      gridAutoColumns: width ?? "1fr",
    };
  } else {
    return {
      display: "grid",
      gap: "20px",
      gridAutoColumns: width ?? "1fr",
    };
  }
};
