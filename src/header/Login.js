import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { toast } from 'react-toastify';
function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const history=useHistory();
  function loginHandle(e) {
    e.preventDefault(e);
   let users = JSON.parse(localStorage.getItem("values"))
    users.map(el =>{
        if (el.email === state.email && el.password === state.password){
            toast("Logged in Successfully");
            localStorage.setItem("currentMyUser", JSON.stringify(el));
            history.push("/user")
             }
        else{
          console.log("Email or password mismatch")
        }
        return null;
  })
}
 return (
    <div>
  
      <h2> User Sign in</h2> <br />
      <form onSubmit={loginHandle}>
      <br />
        <span>UserEmail or password</span>
        <br />
        <br />
        <input
          type="text"
          placeholder="Email"
          onChange={(ev) => setState({ ...state, email: ev.target.value })}
         />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter User Password"
          onChange={(ev) => setState({ ...state, password: ev.target.value })}
           />
        <br />
        <br />
       <button type="submit" className="btn btn-success">
          Sign in
        </button>
        <br />
         <br />
        <Link to="/Registration" className="link-secondary">
          Create New Account
        </Link>
       </form>
     </div>
  );
}
export default Login;
