import React, { useContext, useEffect } from 'react';
import ApplicationForm from "./ApplicationForm.js";
import {motion} from "framer-motion";
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
        <motion.div 
        className="homepage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        >
            <h1>Application Log</h1>
            <ApplicationForm submit={addApplication}/>
            <div className="breaker">
                
            </div>
            <div className="applicationList">
                <ApplicationList 
                applications={applications}
                deleteApplication={deleteApplication}
                updateApplication={updateApplication}
                />
            </div>
            


        </motion.div>
    )
}

export default HomePage;