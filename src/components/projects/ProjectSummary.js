import React from 'react'
import "./project.css"

const ProjectSummary = ({project}) => {
    return (
        <div >
            <form className="card-box">
                <form className="box-title">
                    <spen className="card-name">{project.title}</spen>
                </form>
                <form className="box-name">
                    <p className="card-post1">Posted by {project.authorFirstName} {project.LastName}</p>
                   
                </form>
            </form>
        </div>
    )
}
export default ProjectSummary

/*<div>
<div className="">
    <spen className="">{project.title}</spen>
    <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
</div>
</div>
)
}*/