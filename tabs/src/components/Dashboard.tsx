import "./Styles.css";

import Banner from "../widget/Banner";
import Collaboration from "../widget/Collaboration";
import Events from "../widget/Events";
import Files from "../widget/Files";
import TableWidget from "../widget/TableWidget";
import Task from "../widget/Task";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="banner">
        <Banner />
      </div>
      <div className="dashboard-bottom">
        <div className="dashboard-bottom-left">
          <div className="widget-row">
            <div className="widget-small">
              <Task />
            </div>
            <div className="widget-medium">
              <Collaboration />
            </div>
          </div>
          <div className="widget-row">
            <div className="widget-small">
              <Files />
            </div>
            <div className="widget-medium">
              <TableWidget />
            </div>
          </div>
        </div>
        <div className="dashboard-bottom-right">
          <div className="fill-container">
            <Events />
          </div>
        </div>
      </div>
    </div>
  );
}
