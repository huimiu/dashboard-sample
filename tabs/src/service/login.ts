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
    FxContext.getInstance().getTeamsFx()?.login(scope);
  } catch (e) {
    console.log(e);
    throw "Login Error: can not login!";
  }
}
