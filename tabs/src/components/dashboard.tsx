import "../style/dashboard.css";
import "../style/cardLayout.css";

import React from "react";

import { Providers, ProviderState } from "@microsoft/mgt-element";
import { CacheService } from "@microsoft/mgt-react";
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
import { getCalendar } from "../service/GetCalendar";
import { getFiles } from "../service/GetFiles";
import { getTasks } from "../service/GetTasks";
import { loginAction, scope } from "../service/login";
import { FxContext } from "./singletonContext";

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
      showLogin: true,
      events: [],
      tasks: [],
      files: [],
    };
  }

  async componentDidMount() {
    await this.login();
    this.setState({ events: await getCalendar() });
    this.setState({ tasks: await getTasks() });
    this.setState({ files: await getFiles() });
    this.setState({ showLogin: false });
  }

  async initConsent() {
    let consentNeeded = await this.checkIsConsentNeeded();
    if (consentNeeded) {
      this.login();
    } else {
      this.setState({ showLogin: false });
    }
  }

  async checkIsConsentNeeded() {
    let consentNeeded = false;
    try {
      FxContext.getInstance().getTeamsFx().getCredential().getToken(scope);
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
      loginAction();
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
                {this.state.events && (
                  <div className="card-events">{Events(this.state.events)}</div>
                )}

                {this.state.tasks && (
                  <div className="card-task">{Task(this.state.tasks)}</div>
                )}
              </div>
            </div>

            <div className="dashboard-bottom">
              <div className="dashboard-bottom-left">
                <Collaboration />
              </div>
              {this.state.files && (
                <div className="dashboard-bottom-right">
                  {Files(this.state.files)}
                </div>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}
