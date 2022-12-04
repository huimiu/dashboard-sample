import { CSSProperties } from "react";

export const timeSpanStyle = (): CSSProperties => ({
  fontFamily: "Segoe UI",
  fontSize: "0.6875rem",
  fontWeight: "400",
  lineHeight: "0.625rem",
  fontStyle: "normal",
});

export const tableColumnStyle = (): CSSProperties => ({
  display: "grid",
  gridTemplateColumns: "4fr repeat(4, 1fr)",
});
