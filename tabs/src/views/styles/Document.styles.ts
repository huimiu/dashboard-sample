import { CSSProperties } from "react";

import { tokens } from "@fluentui/react-theme";

export const widgetStyle: CSSProperties = {
  padding: 0,
};

export const headerStyle: CSSProperties = {
  padding: "0.75rem 1.25rem 1rem 1.25rem",
};

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

export const taskContainer: CSSProperties = {
  display: "grid",
  height: "max-content",
  alignContent: "center",
};

export const itemContent = (active: boolean): CSSProperties => ({
  display: "grid",
  gridTemplateColumns: "1fr max-content",
  gap: "1rem",
  alignItems: "center",
  height: "2.75rem",
  paddingLeft: "1.25rem",
  paddingRight: "1.25rem",
  backgroundColor: active ? tokens.colorNeutralBackground5Hover : tokens.colorNeutralBackground1,
});

export const docInfoLayout: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "max-content 1fr",
  gap: "1rem",
  alignItems: "center",
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
