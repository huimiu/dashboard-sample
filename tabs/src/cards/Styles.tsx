import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
  cardContainer: {
    height: "340px",
    width: "350px",
    display: "flex",
    flexDirection: "column"
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
    alignItems: "center",
    ...shorthands.gap("4px"),
  },
  footerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "left",
    verticalAlign: "bottom",
    marginTop: "auto"
  },
  toggleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",    
    ...shorthands.gap("2px"),
  },
  cardListContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
    marginBottom: "10px",
    ...shorthands.gap("8px"),
  }
});
