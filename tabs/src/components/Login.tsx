import './Styles.css';

import { Escape, View } from '@fluent-blocks/react';
import { TeamsFx } from '@microsoft/teamsfx';
import { dashboardTeamsFxContext } from "./Context";
import { getUserprofile } from '../service/GetUserprofile';
import { getFiles } from '../service/GetFiles';

const scope = ["User.Read", "Files.Read"];
async function loginAction() {
  const teamsfx = new TeamsFx();
  try {
    await teamsfx.login(scope);
    // store the teamsfx globally
    dashboardTeamsFxContext.setTeamsfx(teamsfx);
  } catch(e) {
    console.log(e);
    throw "Login Error: can not login!";
  }
}

export default function Login() {
  return (
    <View
      accentScheme="teams"
      themeName="light"
      main={{
        title: "",
        blocks: [
          {
            inputs: [
              {
                button: {
                  actionId: "login",
                  label: "Login",
                  variant: "primary",
                  onAction: () => {
                    loginAction();
                    getFiles();
                  },
                },
              },
            ],
            variant: "narrow-block",
          },
        ],
        message: {
          media: {
            illustration: "hello",
            label: "hello",
          },
        },
      }}
      onAction={function noRefCheck() {}}
    />
  );
}
