import React from 'react'
import { useHistory } from 'react-router'
function User() {
    var currentUser = localStorage.getItem("currentMyUser")
   
   const history=useHistory();
  const users = JSON.parse(localStorage.getItem("values"));
  if (currentUser == null){
    history.push('/login')
    return 
  }
function removeItem(elm){
  const newData =[];
  users.forEach(element => {
    if(elm.email !==element.email){
     newData.push(element)
    }
 });
   localStorage.setItem("values",JSON.stringify(newData))
     history.push("/user")
}



  return (
      
    <div className= "row">
      <table className="table col-md-6">
        <thead  className="thead-light">
          <tr>
            <th scope="col">FullName</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">PinCode</th>
            <th scope="col">Action</th>
           
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
                <td>
                <button  class="btn btn-secondary " onClick={()=>history.push("/update",{currentObject:element})}>Edit</button>
                <button class="btn btn-danger" onClick={() => {if(window.confirm('Are you Sure?')){removeItem(element)};}}>Delete</button>
                </td>
              </tr>
              
            
      
            );
          })}
        </tbody>
      </table>
    
    </div>
    
  );
}
export default User;
