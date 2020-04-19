import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

class Dashboard extends Component {
  render() {
    return (
      <div className="">
        <div className="">
          <div className="">
            <ProjectList />
          </div>
          <div className="">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard
