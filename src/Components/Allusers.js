import React from "react";
import Navbar from "./Navbar";
import Data from "./Data"
import { useHistory } from "react-router-dom";

const Allusers = () => {
  const history = useHistory();

  console.log(Data);

  const editUser = (e) =>{
    // alert(e.target.id);
    history.push({ 
    pathname: '/adduser',
    state: Data[e.target.id]
    });

  }

  const deleteUser = (e) =>{
    // alert(e.target.id);
    let idx = e.target.id;
    delete Data[idx];
    history.push("/")
  }

  return (
    <>
      <Navbar />
      <div className="all-users">
        <tr>
          <th>id</th>
          <th>name</th>
          <th>username</th>
          <th>email</th>
          <th>phone</th>
          <th>operation</th>
        </tr>
        {Data.map((curr,index)=>{
          return (
              <tr>
                <td>{index + 1}</td>
                <td>{curr.name}</td>
                <td>{curr.username}</td>
                <td>{curr.email}</td>
                <td>{curr.phone}</td>
                <td>
                  <button className="btn edit-btn" onClick={editUser} id={index}>edit</button>
                  <button className="btn delete-btn" onClick={deleteUser} id={index}>delete</button>
                </td>
              </tr>
          )
        })}
      </div>
    </>
  );
};

export default Allusers;
