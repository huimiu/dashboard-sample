import { Image } from "@fluentui/react-components";

import { Dashboard } from "../lib/Dashboard";
import { oneColumn } from "../lib/Dashboard.styles";
import { Calendar } from "../widgets/Calendar";
import { Chart } from "../widgets/Chart";
import { Collaboration } from "../widgets/Collaboration";
import { Documents } from "../widgets/Document";
import { Task } from "../widgets/Task";

interface IDashboardProp {
  showLogin?: boolean;
}

export default class IDashboard extends Dashboard {
  protected headerImage(): JSX.Element | undefined {
    return <Image src="bg.png" style={{ marginBottom: "-9rem" }} />;
  }

  protected columnWidths(): string | undefined {
    return "7fr 3fr";
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
        <Documents />
      </>
    );
  }
}
