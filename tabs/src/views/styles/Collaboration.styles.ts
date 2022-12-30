import { tokens } from "@fluentui/react-components";
import { CSSProperties } from "react";

export const contentLayout: CSSProperties = ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: "0.75rem",
});

export const gridDisplay: CSSProperties = {
  display: "grid",
};

export const titleStyle: CSSProperties = ({
  fontFamily: "Segoe UI",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "0.75rem",
  lineHeight: "1rem",
  marginTop: "0.5rem",
});

export const descriptionStyle: CSSProperties = ({
  fontFamily: "Segoe UI",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "0.75rem",
  lineHeight: "1rem",
  marginBottom: "1.125rem",
  color: tokens.colorNeutralForeground3,
  marginTop: "0.25rem",
});

export const footerLayout: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "8fr min-content max-content 2fr",
};

export const shareBtnStyle: CSSProperties = {
  padding: 0,
  justifyContent: "start",
};

export const colorNeutralForeground3: CSSProperties = { color: tokens.colorNeutralForeground3 };
