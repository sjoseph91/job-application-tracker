import React from 'react';

export default function ApplicationList(props){
    const { applications } = props;
    console.log(applications);
    const applicationComponents = applications.map(application=> (
        <div className="application" key={application._id}>
            <h3>{application.jobTitle}</h3>
            <p>{application.companyName}</p>
        </div>
    ))
    return (
        <div className="application-list">
            {applicationComponents}
        </div>
        
    )
};