import React, { useContext } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Auth from "./components/Auth";
import HomePage from "./components/HomePage.js";
import Datapage from "./components/DataPage.js";
import ProtectedRoute from "./components/ProtectedRoute"
import { UserContext } from './context/UserProvider.js'
import ApplicationProvider from "./context/ApplicationProvider.js";
import "./App.css"

function App(){
    const { token, logout } = useContext(UserContext);
    return (
        <ApplicationProvider>
            <div className="app">
                { token && <Navbar logout={ logout }/> }
                <Switch>
                    <Route 
                    exact path="/" 
                    render={()=> token ? <Redirect to="/homepage"/> : <Auth />}
                    />
                    <ProtectedRoute 
                    path="/homepage"
                    component={HomePage}
                    redirectTo="/"
                    token={token}
                    />
                    <ProtectedRoute 
                    path="/data"
                    component={Datapage}
                    redirectTo="/"
                    token={token}
                    />
                   
                </Switch>
            </div>
        </ApplicationProvider>
        
    )
}

export default App;