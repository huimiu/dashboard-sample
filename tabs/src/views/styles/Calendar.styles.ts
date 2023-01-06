import { CSSProperties } from "react";

import { tokens } from "@fluentui/react-theme";

import { widgetPaddingStyle } from "./Common.styles";

export const bodyLayout = (hasMeeting: boolean): CSSProperties => {
  if (hasMeeting) {
    return {
      display: "grid",
      gap: "1.25rem",
      overflowX: "hidden",
      minWidth: "18rem",
      gridTemplateRows: "repeat(2, max-content)",
    };
  } else {
    return {
      display: "grid",
      height: "100%",
      justifyContent: "center",
      alignContent: "center",
      overflowX: "hidden",
      minWidth: "18rem",
    };
  }
};

export const widgetStyle: CSSProperties = {
  ...widgetPaddingStyle,
  gap: "0.625rem",
};

export const todayLayout: CSSProperties = {
  display: "grid",
  gap: "0.25rem",
};

export const todayText: CSSProperties = {
  fontWeight: "700",
  lineHeight: "1rem",
  fontSize: "0.75rem",
};

export const meetingLayout: CSSProperties = {
  display: "grid",
  gap: "0.25rem",
  gridTemplateRows: "repeat(3, max-content)",
};

export const meetingSummary: CSSProperties = {
  fontWeight: "400",
  lineHeight: "1rem",
  fontSize: "0.75rem",
};

export const meetingItemLayout: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "max-content 1fr min-content",
  gap: "0.625rem",
};

export const divider: CSSProperties = {
  display: "grid",
  width: "6px",
  height: "1fr",
  borderRadius: "3px",
  backgroundColor: tokens.colorBrandStroke1,
};

export const meetingTitle: CSSProperties = {
  fontWeight: "400",
  lineHeight: "1.5rem",
  fontSize: "1rem",
};

export const meetingTime: CSSProperties = {
  fontWeight: "400",
  lineHeight: "1rem",
  fontSize: "0.875rem",
  color: tokens.colorNeutralStrokeAccessible,
};

export const meetingLocation: CSSProperties = {
  fontWeight: "400",
  lineHeight: "1rem",
  fontSize: "0.75rem",
  color: tokens.colorNeutralStrokeAccessible,
};

export const meetingActionBtn: CSSProperties = {
  alignSelf: "start",
  minWidth: "3.375rem",
  fontWeight: 500,
};
