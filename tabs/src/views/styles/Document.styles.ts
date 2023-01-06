import { CSSProperties } from "react";

import { tokens } from "@fluentui/react-theme";

export const widgetStyle: CSSProperties = {
  padding: 0,
  gap: 0,
};

export const headerStyle: CSSProperties = {
  padding: "1.25rem",
}

export const bodyLayout = (hasDocument: boolean): CSSProperties => {
  if (hasDocument) {
    return {
      display: "grid",
      alignContent: "start",
      overflowX: "hidden",
      minWidth: "18rem",
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

export const taskContainer = (active: boolean): CSSProperties => ({
  display: "grid",
  height: "3rem",
  alignContent: "center",
  backgroundColor: active ? tokens.colorNeutralBackground5Hover : tokens.colorNeutralBackground1,
});

export const itemContent: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "max-content 1fr max-content",
  gap: "1rem",
  alignItems: "center",
  height: "2.75rem",
  marginLeft: "1.25rem",
  marginRight: "1.25rem",
};

export const titleStyle: CSSProperties = {
  overflow: "ellipsis",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
};

export const divider: CSSProperties = {
  height: "1px",
  background: tokens.colorNeutralStroke2,
};
