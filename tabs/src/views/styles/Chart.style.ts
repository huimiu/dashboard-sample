import { tokens } from "@fluentui/react-components";
import { CSSProperties } from "react";

export const bodyLayout: CSSProperties = {
  overflowX: "hidden",
}

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
  overflowX: "auto",
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
  marginTop: "2.5rem",
};

export const backlogLayout: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr max-content",
  alignItems: "center",
};

export const tableContentLayout: CSSProperties = {
  display: "grid",
  overflowX: "auto",
  gap: "0.75rem",
};

export const backlogStyle: CSSProperties = {
  fontWeight: "600",
  fontSize: "0.75rem",
  lineHeight: "1rem",
};

export const tableColumnStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "8fr 4fr 4fr 2fr 2fr",
  gap: "0.6rem",
  alignItems: "center",
};

export const minWidthStyle = (v: number): CSSProperties => {
  return {
    minWidth: `${v}rem`,
  };
};

export const tableHeaderStyle: CSSProperties = {
  fontWeight: "400",
  fontSize: "0.75rem",
  lineHeight: "2rem",
  color: tokens.colorNeutralForeground4,
};

export const titleStyle: CSSProperties = {
  display: "grid",
  gap: "0.6rem",
  gridTemplateColumns: "max-content max-content 1fr",
  minWidth: "18rem",
};

export const avatarStyle: CSSProperties = {
  display: "grid",
  gap: "0.25rem",
  alignItems: "center",
  gridTemplateColumns: "max-content 1fr",
  minWidth: "8rem",
};

export const stateLayout: CSSProperties = {
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "1fr 1fr",
  gap: "0.375rem",
  minWidth: "6rem",
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
