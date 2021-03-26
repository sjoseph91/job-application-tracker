import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import UserProvider from "./context/UserProvider.js";
import ApplicationProvider from "./context/ApplicationProvider.js"


ReactDOM.render(
  <Router>
    <ApplicationProvider>
      <UserProvider>
        <App />
      </UserProvider> 
    </ApplicationProvider>
  </Router>
    
  ,document.getElementById('root')
);
