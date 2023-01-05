import { CSSProperties } from "react";

import { tokens } from "@fluentui/react-components";

const borderStyle: CSSProperties = {
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "white",
};

export const bodyLayout = (hasTask: boolean): CSSProperties => {
  if (hasTask) {
    return {
      display: "grid",
      gap: "0.25rem",
    };
  } else {
    return {
      display: "grid",
      gap: "1.8rem",
    };
  }
};

export const addBtnStyle: CSSProperties = {
  color: tokens.colorBrandForeground1,
  marginLeft: "0.35rem",
};

export const inputStyle = (focused?: boolean): CSSProperties => ({
  border: "none",
  outline: "medium",
  height: "1.75rem",
  marginLeft: "-0.35rem",
  color: tokens.colorNeutralForeground1,
  backgroundColor: focused ? tokens.colorNeutralBackground6 : tokens.colorNeutralBackground3,
});

export const addTaskContainer = (themeString: string, focused?: boolean): CSSProperties => {
  const border: CSSProperties = themeString === "contrast" ? borderStyle : {};
  return {
    display: "grid",
    gridTemplateColumns: "max-content 1fr max-content",
    gap: "1rem",
    alignItems: "center",
    backgroundColor: focused ? tokens.colorNeutralBackground6 : tokens.colorNeutralBackground3,
    borderRadius: "4px",
    height: "2.25rem",
    paddingLeft: "0.875rem",
    paddingRight: "0.7rem",
    ...border,
  };
};

export const addTaskBtnStyle = (mouseEnter?: boolean): CSSProperties => ({
  borderRadius: "4px",
  width: "2.4rem",
  height: "1.5rem",
  border: "none",
  fontWeight: "600",
  transition: "visibility 0s ease 50ms",
  backgroundColor: mouseEnter ? tokens.colorNeutralStroke1Hover : tokens.colorNeutralStrokeOnBrand2,
});

export const existingTaskLayout = (themeString: string): CSSProperties => {
  const border: CSSProperties = themeString === "contrast" ? borderStyle : {};
  return {
    display: "grid",
    gridTemplateColumns: "1fr max-content",
    gap: "1rem",
    alignItems: "center",
    backgroundColor: tokens.colorNeutralBackground3,
    borderRadius: "4px",
    height: "2.25rem",
    paddingLeft: "0.875rem",
    paddingRight: "0.7rem",
    ...border,
  };
};
