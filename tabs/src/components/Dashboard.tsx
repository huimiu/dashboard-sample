import "../style/dashboard.css";
import "../style/cardLayout.css";

import Collaboration from "../card/collaboration";
import Events from "../card/events";
import Files from "../card/files";
import Task from "../card/task";
import Chart from "../card/chart";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-above">
        <div className="dashboard-above-left">
          <Chart />
        </div>
        <div className="dashboard-above-right">
          <div className="card-events">
            <Events />
          </div>
          <div className="card-tasks">
            <Task />
          </div>
        </div>
      </div>

      <div className="dashboard-bottom">
        <div className="dashboard-bottom-left">
          <Collaboration />
        </div>
        <div className="dashboard-bottom-right">
          <Files />
        </div>
      </div>
    </div>
  );
}
