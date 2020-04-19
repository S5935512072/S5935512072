import React from "react";
import ProjectSummarry from './ProjectSummary'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div>
            <div>
        <div className="">
            <spen className="">หัวข้อ{id}</spen>
            <p>น้องหมาน่ารัก</p>
        </div>
    </div>
        </div>
        
    )
}

export default ProjectDetails