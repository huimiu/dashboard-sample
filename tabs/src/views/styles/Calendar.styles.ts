import { CSSProperties } from "react";

export const todayTextStyle = (): CSSProperties => ({
  fontWeight: "700",
  lineHeight: "1rem",
  fontSize: "0.75rem",
  fontFamily: "Segoe UI",
});

export const meetingSummaryStyle = (): CSSProperties => ({
  fontWeight: "400",
  lineHeight: "1rem",
  fontSize: "0.75rem",
  fontFamily: "Segoe UI",
});

export const meetingTitleStyle = (): CSSProperties => ({
  fontWeight: "400",
  lineHeight: "1.5rem",
  fontSize: "1rem",
  fontFamily: "Segoe UI",
  fontStyle: "normal",
});

export const meetingTimeStyle = (): CSSProperties => ({
  fontWeight: "400",
  lineHeight: "1rem",
  fontSize: "0.875rem",
  fontFamily: "Roboto",
  fontStyle: "normal",
  color: "#6E6E6E",
});

export const meetingLocationStyle = (): CSSProperties => ({
  fontWeight: "400",
  lineHeight: "1rem",
  fontSize: "0.75rem",
  fontFamily: "Roboto",
  fontStyle: "normal",
  color: "#6E6E6E",
});
