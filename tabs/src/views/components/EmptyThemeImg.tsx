import { Image } from "@fluentui/react-components";

import { TeamsFxContext } from "../../internal/context";
import { emptyImgStyle } from "../styles/Common.styles";

export const EmptyThemeImg = (): JSX.Element => {
  return (
    <TeamsFxContext.Consumer>
      {({ themeString }) => <Image src={`empty-${themeString}.svg`} style={emptyImgStyle} />}
    </TeamsFxContext.Consumer>
  );
};
