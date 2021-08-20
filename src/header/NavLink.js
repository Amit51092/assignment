import React from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Registration from "./Registration";
import User from "./User";
import update from "../update";
import { useHistory } from "react-router";
import { toast } from 'react-toastify';
function NavLink() {
  const history = useHistory();
  function logOut() {
    localStorage.removeItem("currentMyUser");
    toast("Logut Successfully");
    history.push("/login");
  }
  const currentUser = JSON.parse(localStorage.getItem("currentMyUser"));
  
  return (
    <div className="Navbar">
      <div text="center">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/home" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          { currentUser ===null ? (
          <li className="nav-item">
            <Link to="/login" className="nav-link ">
              Login
            </Link>
          </li> ) : ("")}
          { currentUser === null ? (
          <li className="nav-item">
            <Link to="/registration" className="nav-link">
              Registration
            </Link>
          </li> ) : ("")}
          {currentUser !== null ? (
            <li className="nav-item">
              <Link to="/user" className="nav-link">
                users
              </Link>
            </li>
          ) : (
            " "
          )} 
          {currentUser !==null ? (
          <button type="button" class="btn btn-link margin70" onClick={()=>history.push("/update",
          {currentObject:currentUser})}>{currentUser.fullName}</button>):""}
           {currentUser !==null ? (
           <button
              type="button"
              class="btn btn-secondary "
              onClick={() => logOut()}
            >
              Log out
            </button>
           ):"" }
          
         
        </ul>

        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/user" component={User} />
          <Route path="/update" component={update} />
        </Switch>
      </div>
    </div>
  );
}
export default NavLink;
