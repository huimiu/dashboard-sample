import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
  banner: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("8px"),
  },
  root: {
    display: "flex",
    flexDirection: "row",
    marginTop: "8px",
    ...shorthands.gap("8px"),
  },
  card: {
    height: "600px",
    width: "280px",
  },
  spacedPreview: { ...shorthands.padding("25px") },
  grayBackground: {
    backgroundColor: tokens.colorNeutralBackground3,
  },
  logoBadge: {
    backgroundColor: "#FFF",
    ...shorthands.padding("5px"),
    ...shorthands.borderRadius(tokens.borderRadiusSmall),
    boxShadow:
      "0px 1px 2px rgba(0, 0, 0, 0.14), 0px 0px 2px rgba(0, 0, 0, 0.12)",
  },
  smallRadius: { ...shorthands.borderRadius(tokens.borderRadiusSmall) },
  caption: {
    color: tokens.colorNeutralForeground3,
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    ...shorthands.gap("4px"),
  },
  cardListContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
    marginBottom: "10px",
    ...shorthands.gap("8px"),
  }
});
