import "./Styles.css";

import Banner from "../card/Banner";
import Collaboration from "../card/Collaboration";
import Events from "../card/Events";
import Files from "../card/Files";
import TableWidget from "../card/TableWidget";
import Task from "../card/Task";

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
              <Collaboration />
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
