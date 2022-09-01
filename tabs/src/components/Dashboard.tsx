import "./Styles.css";
import "../style/Dashboard.css";
import "../style/CardLayout.css";

import Banner from "../card/Banner";
import Collaboration from "../card/Collaboration";
import Events from "../card/Events";
import Files from "../card/Files";
import Task from "../card/Task";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="banner">
        <Banner />
      </div>
      <div className="dashboard-bottom">
        <div className="dashboard-bottom-left">
          <div className="card-row">
            <div className="card-small">
              <Task />
            </div>
            <div className="card-medium">
              <Collaboration />
            </div>
          </div>
          <div className="card-row">
            <div className="card-small">
              <Files />
            </div>
            <div className="card-medium">
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
