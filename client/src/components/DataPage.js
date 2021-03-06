import React, {useContext, useEffect} from 'react';
import {motion} from "framer-motion";
import { ApplicationContext } from "../context/ApplicationProvider.js";


function DataPage(){
    const { 
        getResponseRate,
        responseRate,
        getCoverLetterRate,
        coverLetterRate, 
        getLinkedinrate,
        linkedinRate
        } = useContext(ApplicationContext);

    useEffect(() => {
        getCoverLetterRate()
        getLinkedinrate()
        return getResponseRate()
    }, [])
    return (
        <motion.div 
        className="datapage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        >
            <h1>Data</h1>
            <div className="responseRate">
                <h2>{(responseRate *100).toFixed(2)} %</h2>
                <h2>Response rate</h2>
            </div>
            <div className="letter">
                <h2>{(coverLetterRate * 100).toFixed(2)} %</h2>
                <h2>Sent with personal letter</h2>
            </div>
            <div className="linkedin">
                <h2>{(linkedinRate * 100).toFixed(2)} %</h2>
                <h2>Made LinkedIn Connection</h2>
            </div>
        </motion.div>
    )
}

export default DataPage;