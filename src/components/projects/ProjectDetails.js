import React from "react";
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const ProjectDetails = (props) => {
    const { project, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />
    if (project) {
        return (
         <div>
            <div>
        <div className="">
            <spen className="">{project.title}</spen>
            <p>{project.content}</p>
        </div>
        <div>
        <div>Posted by {project.authorFistName} {project.authorLastName}</div>
        </div>
    </div>
        </div>
        )
    }else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null

    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'project' }
    ])
)(ProjectDetails)