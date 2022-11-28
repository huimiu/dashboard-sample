import { CSSProperties } from 'react';

export const todayText = (): CSSProperties => ({
  fontWeight: "700",
  lineHeight: "1rem",
  fontSize: "0.75rem",
  fontFamily: "Segoe UI",
});

export const meetingSummary = (): CSSProperties => ({
  fontWeight: "400",
  lineHeight: "1rem",
  fontSize: "0.75rem",
  fontFamily: "Segoe UI",
});

export const meetingItemLayout = (): CSSProperties => ({
  display: "grid",
  gridTemplateColumns: "max-content 1fr max-content",
  gap: "0.625rem",
});

export const divider = (): CSSProperties => ({
  display: "grid",
  width: "6px",
  height: "1fr",
  borderRadius: "3px",
  backgroundColor: "#5b5fc7",
});

export const meetingTitle = (): CSSProperties => ({
  fontWeight: "400",
  lineHeight: "1.5rem",
  fontSize: "1rem",
  fontFamily: "Segoe UI",
  fontStyle: "normal",
});

export const meetingTime = (): CSSProperties => ({
  fontWeight: "400",
  lineHeight: "1rem",
  fontSize: "0.875rem",
  fontFamily: "Roboto",
  fontStyle: "normal",
  color: "#6E6E6E",
});

export const meetingLocation = (): CSSProperties => ({
  fontWeight: "400",
  lineHeight: "1rem",
  fontSize: "0.75rem",
  fontFamily: "Roboto",
  fontStyle: "normal",
  color: "#6E6E6E",
});
