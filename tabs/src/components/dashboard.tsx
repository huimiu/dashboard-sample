import "../style/dashboard.css";
import "../style/cardLayout.css";

import React from "react";

import { Providers, ProviderState } from "@microsoft/mgt-element";
import { TeamsFxProvider } from "@microsoft/mgt-teamsfx-provider";

import Banner from "../card/banner";
import Chart from "../card/chart";
import Collaboration from "../card/collaboration";
import { Events } from "../card/events";
import { Files } from "../card/files";
import { Task } from "../card/task";
import EventsModel from "../model/EventsModel";
import FilesModel from "../model/FilesModel";
import TaskModel from "../model/TaskModel";
import { loginAction, scope } from "../service/login";
import { FxContext } from "./singletonContext";
import { acquireData } from "../service/request";

interface IDashboardProp {
  showLogin?: boolean;
  events?: EventsModel[];
  files?: FilesModel[];
  tasks?: TaskModel[];
}

export default class Dashboard extends React.Component<{}, IDashboardProp> {
  constructor(props: any) {
    super(props);

    this.state = {
      showLogin: undefined,
      events: undefined,
      tasks: undefined,
      files: undefined,
    };
  }

  async componentDidMount() {
    this.initTeamsFxProvider();
    await this.initConsent();
    let data: {
      tasks: TaskModel[];
      events: EventsModel[];
      files: FilesModel[];
    } = (await acquireData()) ?? { tasks: [], events: [], files: [] };
    this.setState({
      events: data.events,
      tasks: data.tasks,
      files: data.files,
    });
    this.setState({ showLogin: false });
  }

  initTeamsFxProvider() {
    let teamsfx = FxContext.getInstance().getTeamsFx();
    const provider = new TeamsFxProvider(teamsfx, scope);
    Providers.globalProvider = provider;
  }

  async initConsent() {
    let consentNeeded = await this.checkIsConsentNeeded();
    if (consentNeeded) {
      await this.login();
    } else {
      this.setState({ showLogin: false });
    }
  }

  async checkIsConsentNeeded() {
    let consentNeeded = false;
    try {
      await FxContext.getInstance()
        .getTeamsFx()
        .getCredential()
        .getToken(scope);
    } catch (error) {
      consentNeeded = true;
    }
    this.setState({
      showLogin: consentNeeded,
    });
    Providers.globalProvider.setState(
      consentNeeded ? ProviderState.SignedOut : ProviderState.SignedIn
    );
    return consentNeeded;
  }

  async login() {
    try {
      await loginAction();
      this.setState({ showLogin: false });
      Providers.globalProvider.setState(ProviderState.SignedIn);
    } catch (err: any) {
      if (err.message?.includes("CancelledByUser")) {
        const helpLink = "https://aka.ms/teamsfx-auth-code-flow";
        err.message +=
          '\nIf you see "AADSTS50011: The reply URL specified in the request does not match the reply URLs configured for the application" ' +
          "in the popup window, you may be using unmatched version for TeamsFx SDK (version >= 0.5.0) and Teams Toolkit (version < 3.3.0) or " +
          `cli (version < 0.11.0). Please refer to the help link for how to fix the issue: ${helpLink}`;
      }
      alert("Login failed: " + err);
      return;
    }
  }

  render() {
    let d = this.state.showLogin;
    return (
      <>
        {this.state.showLogin === false && (
          <div className="dashboard">
            <Banner />
            <div className="dashboard-above">
              <div className="dashboard-above-left">
                <Chart />
              </div>
              <div className="dashboard-above-right">
                <div className="card-events">
                  {this.state.events && Events(this.state.events)}
                </div>

                <div className="card-task" id="task-card">
                  {this.state.tasks && <Task tasks={this.state.tasks} />}
                </div>
              </div>
            </div>

            <div className="dashboard-bottom">
              <div className="dashboard-bottom-left">
                <Collaboration />
              </div>
              <div className="dashboard-bottom-right">
                {this.state.tasks && Files(this.state.files)}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
