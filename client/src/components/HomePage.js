import React, { useContext, useEffect } from 'react';
import ApplicationForm from "./ApplicationForm.js";
import { ApplicationContext } from "../context/ApplicationProvider.js"
import  ApplicationList from "./ApplicationList.js";

function HomePage(){
    const {
        addApplication,
        getApplications,
        deleteApplication,
        updateApplication,
        applications
        } = useContext(ApplicationContext);

    useEffect(() => {
        return getApplications()
    }, [])
    return (
        <div className="homepage">
            <h1>Application Log</h1>
            <ApplicationForm submit={addApplication}/>
            <div className="applicationList">
                <ApplicationList 
                applications={applications}
                deleteApplication={deleteApplication}
                updateApplication={updateApplication}
                />
            </div>
            


        </div>
    )
}

export default HomePage;