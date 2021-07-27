import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavLink from "./header/NavLink";
function App() {
  return (
    <div className="App">
      <Router>
        <NavLink />
      </Router>
    </div>
  );
}

export default App;