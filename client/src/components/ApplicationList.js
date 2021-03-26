import React from 'react';

export default function ApplicationList(props){
    const { applications, deleteApplication } = props;
    const applicationComponents = applications.map(application=> (
        <div className="application" key={application._id}>
            <div className="jobTitle">
                {application.jobTitle}
            </div>
            <div className="companyName">
                {application.companyName}
            </div>
            <div className="postingUrl">
                {application.postingUrl}
            </div>
            <div className="coverLetter">
                Cover Letter: {application.hasCoverLetter ? "Yes": "No"}
            </div>
            <div className="outreach">
                Reached out to Company: {application.contactedSomeoneAtCompany ? "Yes": "No"}
            </div>
            <div className="comments">
                Comments: {application.comments}
            </div>
            <button onClick={() => deleteApplication(application._id)}>X</button>
            <button>Response Received!</button>
        </div>
    ))
    return (
        <div className="application-list">
            <h2>Completed Applications</h2>
            {applicationComponents}
        </div>
        
    )
};