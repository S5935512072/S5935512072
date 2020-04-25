import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div>
        <div className="">
            <spen className="">{project.title}</spen>
            <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
        </div>
    </div>
    )
}
export default ProjectSummary