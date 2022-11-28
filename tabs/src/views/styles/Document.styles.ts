import { CSSProperties } from "react";

export const itemContainer = (): CSSProperties => ({
  display: "grid",
  gridTemplateColumns: "max-content 1fr max-content",
  gap: "1rem",
  alignItems: "center",
  height: "2.25rem",
});

export const titleStyle = (): CSSProperties => ({
  overflow: "ellipsis",
  fontFamily: "Segoe UI",
  fontStyle: "normal",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
});
