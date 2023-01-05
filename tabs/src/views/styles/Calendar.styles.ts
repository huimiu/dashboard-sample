import { CSSProperties } from "react";

export const bodyLayout = (hasMeeting: boolean): CSSProperties => {
  if (hasMeeting) {
    return {
      display: "grid",
      gap: "1.25rem",
    };
  } else {
    return {
      display: "grid",
      height: "100%",
      justifyContent: "center",
      alignContent: "center",
    };
  }
};

export const todayLayout: CSSProperties = {
  display: "grid",
  gap: "0.25rem",
};

export const todayText: CSSProperties = {
  fontWeight: "700",
  lineHeight: "1rem",
  fontSize: "0.75rem",
  fontFamily: "Segoe UI",
};

export const meetingLayout: CSSProperties = {
  display: "grid",
  gap: "0.25rem",
};

export const meetingSummary: CSSProperties = {
  fontWeight: "400",
  lineHeight: "1rem",
  fontSize: "0.75rem",
  fontFamily: "Segoe UI",
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
  backgroundColor: "#5b5fc7",
};

export const meetingTitle: CSSProperties = {
  fontWeight: "400",
  lineHeight: "1.5rem",
  fontSize: "1rem",
  fontFamily: "Segoe UI",
  fontStyle: "normal",
};

export const meetingTime: CSSProperties = {
  fontWeight: "400",
  lineHeight: "1rem",
  fontSize: "0.875rem",
  fontFamily: "Roboto",
  fontStyle: "normal",
  color: "#6E6E6E",
};

export const meetingLocation: CSSProperties = {
  fontWeight: "400",
  lineHeight: "1rem",
  fontSize: "0.75rem",
  fontFamily: "Roboto",
  fontStyle: "normal",
  color: "#6E6E6E",
};

export const meetingActionBtn: CSSProperties = {
  alignSelf: "start",
  minWidth: "3.375rem",
  fontWeight: 500,
  fontStyle: "normal",
};
