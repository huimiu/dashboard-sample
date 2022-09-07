import { TeamsFx } from "@microsoft/teamsfx";
import { dashboardTeamsFxContext as ctx } from "../components/Context";

export const scope = [
  "Files.Read",
  "User.Read",
  "User.ReadWrite.All",
  "Files.ReadWrite.All",
  "Directory.ReadWrite.All",
  "Tasks.ReadWrite",
  "Calendars.ReadWrite",
];

export function initTeamsFx() {
  let teamsfx = ctx.getTeamsfx();
  if (teamsfx === undefined) {
    teamsfx = new TeamsFx();
    ctx.setTeamsfx(teamsfx);
  }
  return teamsfx;
}

export function loginAction() {
  try {
    ctx.getTeamsfx()?.login(scope);
  } catch (e) {
    console.log(e);
    throw "Login Error: can not login!";
  }
}
