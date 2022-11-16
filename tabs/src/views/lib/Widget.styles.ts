import { CSSProperties } from "react";

export const cardStyles = (): CSSProperties => ({
  paddingLeft: "1.3rem",
  paddingRight: "1.25rem",
  paddingTop: "1rem",
});

export const headerStyles = (): CSSProperties => ({
  display: "grid",
  alignItems: "center",
});

export const headerContentStyle = (): CSSProperties => ({
  display: "grid",
  gap: "8px",
  gridTemplateColumns: "max-content 1fr max-content",
  alignItems: "center",
});

export const headerStyleWithoutIcon = (): CSSProperties => ({
  display: "grid",
  gap: "8px",
  gridTemplateColumns: "1fr max-content",
  alignItems: "center",
});

export const headerTextStyle = (): CSSProperties => ({
  fontWeight: "600",
  lineHeight: "1.25rem",
  fontStyle: "normal",
  fontSize: "0.875rem",
  fontFamily: "Segoe UI",
});
