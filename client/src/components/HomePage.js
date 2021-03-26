import React, { useContext, useEffect } from 'react';
import ApplicationForm from "./ApplicationForm.js";
import { ApplicationContext } from "../context/ApplicationProvider.js"
import  ApplicationList from "./ApplicationList.js";

function HomePage(){
    const {addApplication, getApplications, deleteApplication, applications} = useContext(ApplicationContext);

    useEffect(() => {
        return getApplications()
    }, [])
    return (
        <div className="homepage">
            <h1>Pending applications</h1>
            <ApplicationForm submit={addApplication}/>
            <ApplicationList 
              applications={applications}
              deleteApplication={deleteApplication} 
            />


        </div>
    )
}

export default HomePage;