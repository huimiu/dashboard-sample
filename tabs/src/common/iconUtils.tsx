import { FilesType } from "./filesType";
import {
  ExcelIcon,
  FilesTxtIcon,
  OneNoteIcon,
  PowerPointIcon,
  VisioIcon,
  WordIcon,
} from "@fluentui/react-icons-northstar";
import { EXCEL_SVG, PPT_SVG, VISIO_SVG, WORD_SVG } from "./constants";

/**
 * match icon by files type
 *
 * @param fileType the string of files type
 * @returns react icon
 */
export function matchFileIcon(fileType: string) {
  let icon;
  switch (fileType) {
    case FilesType.WORD:
      icon = <WordIcon />;
      break;
    case FilesType.EXCEL:
      icon = <ExcelIcon />;
      break;
    case FilesType.PPT:
      icon = <PowerPointIcon />;
      break;
    case FilesType.VISIO:
      icon = <VisioIcon />;
      break;
    default:
      icon = <FilesTxtIcon />;
      break;
  }
  return icon;
}

export function matchFileIconUrl(fileType: string): string | undefined {
  let url;
  switch (fileType) {
    case FilesType.WORD:
      url = WORD_SVG;
      break;
    case FilesType.EXCEL:
      url = EXCEL_SVG;
      break;
    case FilesType.PPT:
      url = PPT_SVG;
      break;
    case FilesType.VISIO:
      url = VISIO_SVG;
      break;
  }
  return url;
}
