import { tokens } from "@fluentui/react-components";
import { CSSProperties } from "react";

export const areaChartStyle: CSSProperties = {
  fontWeight: 700,
  fontSize: "1.125rem",
  lineHeight: "1.5rem",
  color: tokens.colorNeutralForeground1,
};

export const actionLayout: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(4, max-content)",
};

export const legendLayout: CSSProperties = {
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: "repeat(7, max-content)",
  alignItems: "center",
  marginBottom: "1.25rem",
};

export const legendItemLayout: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "max-content 1fr",
  gap: "0.25rem",
  alignItems: "end",
};

export const legendDividerStyle: CSSProperties = {
  height: "0.875rem",
  width: "1px",
  backgroundColor: tokens.colorNeutralForeground4,
};

export const legendBoldStyle: CSSProperties = {
  fontWeight: "700",
  fontSize: "0.75rem",
  lineHeight: "1rem",
  color: tokens.colorNeutralForeground3,
};

export const legendNormalStyle: CSSProperties = {
  fontWeight: "400",
  fontSize: "0.75rem",
  lineHeight: "1rem",
  color: tokens.colorNeutralForeground4,
};

export const timeSpanLayout: CSSProperties = {
  display: "grid",
  gap: "4rem",
  gridTemplateColumns: "repeat(3, max-content)",
};

export const timeSpanStyle: CSSProperties = {
  fontSize: "0.6875rem",
  fontWeight: "400",
  lineHeight: "0.625rem",
  fontStyle: "normal",
  width: "min-content",
  minWidth: "max-content",
  paddingLeft: 0,
  paddingRight: 0,
};

export const areaChartLayout: CSSProperties = {
  position: "relative",
  height: "200px",
  width: "100%",
};

export const tableLayout: CSSProperties = {
  display: "grid",
  gap: "0.69rem",
  marginTop: "1.1875rem",
  paddingRight: "1.5rem",
};

export const backlogStyle: CSSProperties = {
  fontFamily: "Segoe UI",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "0.75rem",
  lineHeight: "1rem",
};

export const tableColumnStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "8fr 4fr 4fr 2fr 3fr",
  gap: "0.6rem",
  alignItems: "center",
};

export const tableHeaderStyle: CSSProperties = {
  fontFamily: "Segoe UI",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "0.75rem",
  lineHeight: "2rem",
  color: tokens.colorNeutralForeground4,
};

export const titleStyle: CSSProperties = {
  display: "grid",
  gap: "0.6rem",
  gridTemplateColumns: "max-content max-content 1fr",
};

export const avatarStyle: CSSProperties = {
  display: "grid",
  gap: "0.25rem",
  alignItems: "center",
  gridTemplateColumns: "max-content 1fr",
};

export const stateLayout: CSSProperties = {
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "1fr 1fr",
  gap: "0.375rem",
};

export const stateStyle: CSSProperties = {
  fontWeight: "700",
  fontSize: "0.625rem",
  lineHeight: "0.75rem",
  color: tokens.colorNeutralForeground1,
};

export const divider: CSSProperties = {
  height: "1px",
  background: tokens.colorNeutralStroke2,
};