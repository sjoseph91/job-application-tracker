import React from 'react';
import ApplicationForm from "./ApplicationForm.js";
function HomePage(){
    return (
        <div className="homepage">
            <h1>Pending applications</h1>
            <ApplicationForm />

        </div>
    )
}

export default HomePage;