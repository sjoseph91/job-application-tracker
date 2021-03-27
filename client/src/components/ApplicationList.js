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
        let applicationType = application.responseReceived ? "application priority" : "application";
        return (
            <div className={applicationType} key={application._id} id={application._id}>
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
                    <a title ={application.postingUrl}href={application.postingUrl}>Job Post</a>
                </div>
                <div className="coverLetter">
                    Cover Letter: {application.hasCoverLetter ? "Yes": "No"}
                </div>
                <div className="outreach">
                    Reached out to Company: {application.contactedSomeoneAtCompany ? "Yes": "No"}
                </div>
                {application.comments? (
                    <textarea 
                    readOnly
                    className="comments"
                    rows="3"
                    value={application.comments} 
                    />
                ) : <div></div> }
                <div className="application-buttons">
                    <button id="delete-button" onClick={() => deleteApplication(application._id)}>Delete</button>
                    {application.responseReceived ? "Response Received" : <button 
                    onClick={() => handleResponseReceived(application._id)}> Response?
                    </button>}
                </div>
                   
                
                
            </div>
        )
        
    })
    return (
        <div className="application-list">
            {applicationComponents}
        </div>
        
    )
};