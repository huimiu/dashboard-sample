import { Image } from "@fluentui/react-components";

import { TeamsFxContext } from "../../internal/context";

export const EmptyThemeImg = (): JSX.Element => {
  return (
    <TeamsFxContext.Consumer>
      {({ themeString }) => (
        <Image
          src={`empty-${themeString}.svg`}
          style={{height: "140px"}}
        />
      )}
    </TeamsFxContext.Consumer>
  );
};
