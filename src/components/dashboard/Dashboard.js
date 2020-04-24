import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {
    //console.log(this.props);
    const { projects } = this.props;
    return (
      <div className="">
        <div className="">
          <div className="">
            <ProjectList projects={projects} />
          </div>
          <div className="">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      { collection: 'projects' },
      
  ])
)(Dashboard)
