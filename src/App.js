import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavLink from "./header/NavLink";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <div className="App">
      <Router>
        <NavLink />
        <ToastContainer />
        
      </Router>
    </div>
  );
}

export default App;
