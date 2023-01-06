import { FxContext } from "./singletonContext";

export const scope = ["Files.Read", "Tasks.ReadWrite", "Calendars.Read"];

export async function loginAction(scope: string[]) {
  try {
    var teamsfx = FxContext.getInstance().getTeamsFx();
    await teamsfx.login(scope);
    FxContext.getInstance().setTeamsFx(teamsfx);
  } catch (e) {
    console.log(e);
    throw e;
  }
}
