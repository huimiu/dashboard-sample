import { TeamsFx } from "@microsoft/teamsfx";
import { createContext } from "react";

export class TeamsFxContext {
  private teamsfx: TeamsFx | undefined;

  constructor(teamsfx?: TeamsFx) {
    this.teamsfx = teamsfx;
  }

  setTeamsfx(teamsfx: TeamsFx) {
    this.teamsfx = teamsfx;
  }

  getTeamsfx(): TeamsFx | undefined{
    return this.teamsfx;
  }
}

export const dashboardTeamsFxContext = new TeamsFxContext();
