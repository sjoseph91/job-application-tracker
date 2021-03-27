import React from 'react';

export default function ApplicationList(props){
    const { applications, deleteApplication, updateApplication } = props;

    function handleResponseReceived(id){
        updateApplication(id, {responseReceived: true})
    }

    applications.sort((a,b) => {
        return (a.responseReceived === b.responseReceived)? 0: a.responseReceived? -1 : 1;
    })
    const applicationComponents = applications.map(application=> {
        let date = new Date(application.createDate)
        return (
            <div className="application" key={application._id} id={application._id}>
                <div className="date">
                    {`Date: ${date.getMonth() + 1} / ${date.getDate()}`}
                </div>
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
                {application.comments? (
                    <textarea 
                    className="comments"
                    rows="3"
                    value={application.comments} 
                    />
                ) : <div></div> }
                
                   
                <button id="delete-button" onClick={() => deleteApplication(application._id)}>Delete</button>
                {application.responseReceived ? "Priority" : <button 
                onClick={() => handleResponseReceived(application._id)}>Received Response?
                </button>}
                
            </div>
        )
        
    })
    return (
        <div className="application-list">
            {applicationComponents}
        </div>
        
    )
};