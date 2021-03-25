import React, { useState } from 'react';
import axios from 'axios';

export const ApplicationContext = React.createContext();

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function ApplicationProvider(props){
    const [applications, setApplications] = useState([]);

    function getApplications(){
        userAxios.get("/api/application/user")
            .then(res => {
                setApplications(res.data);
            })
            .catch(err => console.log(err));
    }

    function addApplication(application){
        userAxios.post("/api/application", application)
            .then(res => {
                setApplications(prevApplications => ([...prevApplications, res.data]))
            })
            .catch(err => console.log(err))

    }




    return (
        <ApplicationContext.Provider value={{
            getApplications,
            addApplication,
            applications
        }}>
            {props.children}
        </ApplicationContext.Provider>
    )
}