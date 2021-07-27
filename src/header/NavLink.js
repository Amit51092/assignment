import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Registration from "./Registration";
import User from "./User";

function NavLink() {
  // var User = localStorage.getItem("currentUser")
  return (
    <div className="Navbar">
      <div text="center">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/Home" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Login" className="nav-link ">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Registration" className="nav-link">
              Registration
            </Link>
          </li>
        </ul>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Login" component={Login} />
          <Route path="/Registration" component={Registration} />
          <Route path="/User" component={User} />
        </Switch>
      </div>
    </div>
  );
}
export default NavLink;
