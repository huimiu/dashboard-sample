import "../../style/Dashboard.css";
import "../../style/CardLayout.css";

import Banner from "../card/banner";
import Collaboration from "../card/collaboration";

export default function Dashboard1() {
  return (
    <div className="dashboard">
      <div className="banner">
        <Banner />
      </div>
      <div className="dashboard-bottom">
        <div className="dashboard-bottom-left">
          <div className="card-row">
            <div className="card-small"></div>
            <div className="card-medium">
              <Collaboration />
            </div>
          </div>
          <div className="card-row">
            <div className="card-small"></div>
            <div className="card-medium">
              <Collaboration />
            </div>
          </div>
        </div>
        <div className="dashboard-bottom-right">
          <div className="fill-container"></div>
        </div>
      </div>
    </div>
  );
}
