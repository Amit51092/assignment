import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router";
function User() {
  const location = useLocation();
  const history = useHistory();
  var values = JSON.parse(localStorage.getItem("values"));
  const currentObject =
    location && location.state && location.state.currentObject;
  const user = {
    fullName: "",
    mobilNo: "",
    pinCode: "",
  };

  const [update, setUpdate] = useState(currentObject ? currentObject : user);

  const handleChange = (ev) => {
    setUpdate({ ...update, [ev.target.name]: ev.target.value });
  };
  function userFormSubmit(ev) {
    const newData = [];
    values.forEach((element) => {
      if (currentObject.email === element.email) {
        newData.push(update);
      } else {
        newData.push(element);
      }
    });
    localStorage.setItem("values", JSON.stringify(newData));
    history.push("/users");
  }

  return (
    <div>
      <form onSubmit={userFormSubmit}>
        <div class="form-group row">
          <label for="fullName" class="col-sm-4 col-form-label">
            fullName
          </label>
          <div class="col-sm-4">
            <input
              type="fullName"
              className="form-control"
              name="fullName"
              placeholder="fullName"
              value={update.fullName}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />

        <div class="form-group row">
          <label for="mobil" class="col-sm-4 col-form-label">
            mobile
          </label>
          <div class="col-sm-4">
            <input
              type="Number"
              className="form-control"
              name="mobile"
              placeholder="mobile"
              value={update.mobileNo}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <div class="form-group row">
          <label for="pinCode" class="col-sm-4 col-form-label">
            pinCode
          </label>
          <div class="col-sm-4">
            <input
              type="Number"
              className="form-control"
              name="pinCode"
              placeholder="pinCode"
              value={update.pinCode}
              onChange={handleChange}
            />
          </div>
        </div>
        <br />
        <br />

        <button type="submit" className="btn btn-success">
          Update
        </button>
        <button
          class="btn btn-secondary margin10"
          onClick={() => history.push("/user")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
export default User;
