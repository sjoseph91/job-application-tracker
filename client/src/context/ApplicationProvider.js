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
    function deleteApplication(id){
        userAxios.delete(`/api/application/${id}`)
            .then(res => {
                setApplications(prevApplications => {
                    return prevApplications.filter(each => (
                        each._id !== id
                    ))
                })
            })
            .catch(err => console.log(err));
    }
    function updateApplication(id, updateObj){
        userAxios.put(`/api/application/${id}`, updateObj)
            .then(res => {
                setApplications(prevApplications => (
                    prevApplications.map(each => {
                        if(each._id === id){
                            return res.data
                        }
                        return each;
                    })
                ))
            })
            .catch(err => console.log(err));
    }




    return (
        <ApplicationContext.Provider value={{
            getApplications,
            addApplication,
            deleteApplication,
            updateApplication,
            applications
        }}>
            {props.children}
        </ApplicationContext.Provider>
    )
}