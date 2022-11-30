import { CSSProperties } from "react";

export const itemContent = (): CSSProperties => ({
  display: "grid",
  gridTemplateColumns: "max-content 1fr max-content",
  gap: "1rem",
  alignItems: "center",
  height: "2.75rem",
  marginLeft: "2.25rem",
  marginRight: "1.25rem",
});

export const titleStyle = (): CSSProperties => ({
  overflow: "ellipsis",
  fontFamily: "Segoe UI",
  fontStyle: "normal",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
});
