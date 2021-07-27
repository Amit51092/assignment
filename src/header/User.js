import React from 'react'

function User() {
    console.log( localStorage.getItem("currentMyUser"));
//   let currentUser = localStorage.getItem("currentUser");
//   console.log(currentUser)
//   alert("heo")
//   if (currentUser == null) {
    // window.location.href = window.location.origin + "/Login";
//   }
  const users = JSON.parse(localStorage.getItem("values"));

  return (
      
    <div className= "row">
      <table className="table col-md-6">
        <thead  className="thead-light">
          <tr>
            <th scope="col">FullName</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">PinCode</th>
          </tr>
        </thead>
        <tbody>
          {users.map((element, index) => {
            return (
              <tr>
                <td>{element.fullName}</td>
                <td>{element.email}</td>
                <td>{element.mobileNo}</td>
                <td>{element.pinCode}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    
  );
}
export default User;
