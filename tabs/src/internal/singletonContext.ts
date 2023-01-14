import { TeamsFx } from "@microsoft/teamsfx";

export class FxContext {
  private static instance: FxContext;
  private isMobile: boolean;
  private teamsfx: TeamsFx | undefined;
  private constructor() { this.isMobile = false; }

  public static getInstance(): FxContext {
    if (!FxContext.instance) {
      FxContext.instance = new FxContext();
    }

    return FxContext.instance;
  }

  public setTeamsFx(teamsfx: TeamsFx) {
    this.teamsfx = teamsfx;
  }

  public getTeamsFx() {
    if (!this.teamsfx) {
      this.teamsfx = new TeamsFx();
    }
    return this.teamsfx;
  }

  public setIsMobile(isMobile: boolean) {
    this.isMobile = isMobile;
  }

  public getIsMobile() {
    return this.isMobile;
  }
}
