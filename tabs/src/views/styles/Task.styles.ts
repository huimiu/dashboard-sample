import { tokens } from "@fluentui/react-components";
import { CSSProperties } from "react";

export const bodyLayout: CSSProperties = {
  display: "grid",
  gap: "0.25rem",
};

export const addBtnStyle: CSSProperties = {
  color: tokens.colorBrandForeground1,
  marginLeft: "0.35rem",
};

export const inputStyle = (focused?: boolean): CSSProperties => ({
  border: "none",
  outline: "medium",
  height: "1.75rem",
  marginLeft: "-0.3rem",
  color: tokens.colorNeutralForeground1,
  backgroundColor: focused ? tokens.colorNeutralBackground5 : tokens.colorNeutralBackground3,
});

export const addTaskContainer = (focused?: boolean): CSSProperties => ({
  display: "grid",
  gridTemplateColumns: "max-content 1fr max-content",
  gap: "1rem",
  alignItems: "center",
  backgroundColor: focused ? tokens.colorNeutralBackground5 : tokens.colorNeutralBackground3,
  borderRadius: "4px",
  height: "2.25rem",
  paddingLeft: "0.875rem",
  paddingRight: "0.7rem",
});

export const addTaskBtnStyle = (mouseEnter?: boolean): CSSProperties => ({
  borderRadius: "4px",
  width: "2.4rem",
  height: "1.5rem",
  border: "none",
  fontWeight: "600",
  transition: "visibility 0s ease 50ms",
  backgroundColor: mouseEnter
    ? tokens.colorNeutralForegroundInvertedLinkHover
    : tokens.colorNeutralForegroundInvertedLink,
});

export const existingTaskLayout: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr max-content",
  gap: "1rem",
  alignItems: "center",
  backgroundColor: tokens.colorNeutralBackground3,
  borderRadius: "4px",
  height: "2.25rem",
  paddingLeft: "0.875rem",
  paddingRight: "0.7rem",
};
