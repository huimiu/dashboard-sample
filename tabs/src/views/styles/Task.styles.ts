import { CSSProperties } from 'react';

export const itemContainer = (): CSSProperties => ({
  display: "grid",
  gridTemplateColumns: "max-content 1fr max-content",
  gap: "1rem",
  alignItems: "center",
  backgroundColor: "#F2F2F2",
  borderRadius: "4px",
  height: "2.25rem",
  paddingLeft: "0.875rem",
  paddingRight: "0.7rem",
});
