import React from "react";

import { Providers, ProviderState } from "@microsoft/mgt-element";
import { TeamsFxProvider } from "@microsoft/mgt-teamsfx-provider";

import { Dashboard } from "../lib/Dashboard";
import { oneColumn } from "../lib/Dashboard.styles";
import { Calendar } from "../widgets/Calendar";
import { Chart } from "../widgets/Chart";
import { Collaboration } from "../widgets/Collaboration";
import { Task } from "../widgets/Task";
import { File } from "../widgets/File";
import { Image } from "@fluentui/react-northstar";

interface IDashboardProp {
  showLogin?: boolean;
}

export default class IDashboard extends Dashboard {
  protected headerImage(): JSX.Element | undefined {
    return <Image src="bg.png" style={{ marginBottom: "-9rem" }} fluid />;
  }

  protected columnWidths(): string | undefined {
    return "6fr 4fr";
  }

  protected dashboardLayout(): JSX.Element | undefined {
    return (
      <>
        <Chart />
        <div style={oneColumn()}>
          <Calendar />
          <Task />
        </div>
        <Collaboration />
        <File />
      </>
    );
  }
}
