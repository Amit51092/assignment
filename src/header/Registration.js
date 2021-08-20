import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import Validation from "./Validation";
import { toast } from 'react-toastify';
function Registration() {
  const LOCAL_STORAGE_KEY = "values";

  const [values, setValues] = useState([]);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState({
    fullName: "",
    email: "",
    mobileNo: "",
    pinCode: "",
    password: "",
    id: 1,
  });
  const history = useHistory();

  const RegistrationHandler = (e) => {
    e.preventDefault(e);
    setErrors(Validation(values));
    let idVal =
      JSON.parse(localStorage.getItem("values")) &&
      JSON.parse(localStorage.getItem("values")).length + 1;
    state["id"] = idVal;
    setValues([...values, state]);
    toast("Registered Successfully")
    // history.push("/login")
    window.location.href = window.location.origin + "/login";
  };

  useEffect(() => {
    const retriveValues = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveValues) setValues(retriveValues);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(values));
  }, [values]);
  
  

  return (
    <div>
      <p> Create New Account</p>

      <form onSubmit={RegistrationHandler}>
        <div class="form-group row">
          <label for="fullName" class="col-sm-4 col-form-label">
            Full Name
          </label>
          <div class="col-sm-4">
            <input
              type="text"
              className="form-control"
              name="fullName"
              placeholder="Full Name"
              value={state.fullName}
              onChange={(ev) =>
                setState({ ...state, fullName: ev.target.value })
              }
            />
            {errors.fullName && <p className="errors">{errors.fullName}</p>}
          </div>
        </div>
        <br />
        <div class="form-group row">
          <label for="email" class="col-sm-4 col-form-label">
            Email
          </label>
          <div class="col-sm-4">
            <input 
              type="Email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={state.Email}
              onChange={(ev) => setState({ ...state, email: ev.target.value })}
              
            />
            {errors.Email && <p className="errors">{errors.Email}</p>}
          </div>
        </div>
        <br />
        <div class="form-group row">
          <label for="mobileNo" class="col-sm-4 col-form-label">
            Mobile No
          </label>
          <div class="col-sm-4">
            <input
              type="number"
              name="mobileNo"
              className="form-control"
              placeholder="Mobile No"
              value={state.MobileNo}
              onChange={(ev) =>
                setState({ ...state, mobileNo: ev.target.value })
              }
            />
            {errors.MobileNo && <p className="errors">{errors.MobileNo}</p>}
          </div>
        </div>
        <br />
        <div class="form-group row">
          <label for="pinCode" class="col-sm-4 col-form-label">
            Pin Code
          </label>
          <div class="col-sm-4">
            <input
              type="number"
              name="pinCode"
              className="form-control"
              placeholder="Pin Code"
              value={state.PinCode}
              onChange={(ev) =>
                setState({ ...state, pinCode: ev.target.value })
              }
            />

            {errors.PinCode && <p className="errors">{errors.PinCode}</p>}
            <br />
          </div>
        </div>
        <div class="form-group row">
          <label for="password" class="col-sm-4 col-form-label">
            Create Password
          </label>
          <div class="col-sm-4">
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Create Password"
              value={state.password}
              onChange={(ev) =>
                setState({ ...state, password: ev.target.value })
              }
            />
            <br />
            {errors.CreatePassword && (
              <p className="errors">{errors.CreatePassword}</p>
            
            )}
            
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Registration;
