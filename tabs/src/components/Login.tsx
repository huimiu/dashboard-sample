import './Styles.css';

import { Escape, View } from '@fluent-blocks/react';
import { createMicrosoftGraphClient, TeamsFx, UserInfo } from '@microsoft/teamsfx';
import { dashboardTeamsFxContext } from "./Context";
import { Client } from "@microsoft/microsoft-graph-client";
import UserprofileModel from '../model/UserprofileModel';

const scope = ["User.Read"];

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

var profile: any;
async function getUserprofile() {
  const teamsfx = new TeamsFx();
  try {
    const token = await dashboardTeamsFxContext.getTeamsfx()?.getCredential().getToken(scope);
    let tokenstr;
    if (!token) tokenstr = ""; 
    else tokenstr = token.token;
    teamsfx.setSsoToken(tokenstr);
  } catch(e) {}

  try {
    const graphClient: Client = createMicrosoftGraphClient(teamsfx, [".default"]);
    profile = await graphClient.api("/me").get();
    console.log(profile);
  } catch(e) {}

  //return profile;
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
                    getUserprofile();
                    // const profilestr = profile.toString();
                    // const getProfile = (): UserprofileModel => JSON.parse(profilestr);
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
