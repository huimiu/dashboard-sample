import { FxContext } from "../components/singletonContext";

export const scope = [
  "Files.ReadWrite.All",
  "Tasks.ReadWrite",
  "Calendars.ReadWrite",
];

export function loginAction(scope: string[]) {
  try {
    var teamsfx = FxContext.getInstance().getTeamsFx();
    teamsfx.login(scope);
    FxContext.getInstance().setTeamsFx(teamsfx);
  } catch (e) {
    console.log(e);
    throw "Login Error: can not login!";
  }
}
