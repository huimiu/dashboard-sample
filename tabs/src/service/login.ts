import { FxContext } from "../components/singletonContext";

export const scope = [
  "User.Read",
  "User.ReadWrite.All",
  "Files.ReadWrite.All",
  "Directory.ReadWrite.All",
  "Tasks.ReadWrite",
  "Calendars.ReadWrite",
];

export function loginAction() {
  try {
    var teamsfx = FxContext.getInstance().getTeamsFx();
    teamsfx.login(scope);
    FxContext.getInstance().setTeamsFx(teamsfx);
  } catch (e) {
    console.log(e);
    throw "Login Error: can not login!";
  }
}
