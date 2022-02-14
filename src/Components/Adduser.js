import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import Data from "./Data"

const Adduser = () => {
  const history = useHistory();
  const [user,setUser] = useState({name:"",username:"",email:"",phone:""})

  useEffect(()=>{
    if(history.location.state !== null){
      console.log(history.location.state)
      const {name,username,email,phone} = history.location.state;
      const Name = document.getElementById("name");
      const Username = document.getElementById("username");
      const Email = document.getElementById("email");
      const Phone = document.getElementById("phone");
      Name.value = name;
      Username.value = username;
      Email.value = email;
      Phone.value = phone;
    }
  },[])

  const handleInput = (e) =>{
    const {name,value} = e.target;
    setUser({...user,[name]:value})
  }


  const addUser = () =>{
    const {name,username,email,phone} = user;
    const messageBox = document.querySelector('.user-added-alert');
    if(name && username && email && phone){
      Data.push(user);
      messageBox.style.top = "2%";
      setTimeout(() => {
        history.push("/")
      }, 1700);
    }else{
      messageBox.innerText = "kindly fill data first ..!!"
      messageBox.style.top = "2%";
      setTimeout(() => {
        messageBox.style.top = "-50%";
      }, 1600);
    }

  }

  return (
    <>
      <Navbar />
      <span className="user-added-alert" >
        user added successfully !!!
      </span>
      <div className="add-user">
        <h1>Add User</h1>
        <input type="text" name="name" id="name" placeholder="Name" value={user.name} onChange={handleInput}/>
        <input type="text" name="username" id="username" placeholder="Username" value={user.username} onChange={handleInput}/>
        <input type="email" name="email" id="email" placeholder="Email" value={user.email}  onChange={handleInput}/>
        <input type="text" name="phone" id="phone" placeholder="Phone" value={user.phone} onChange={handleInput}/>
        <button className="btn add-btn" onClick={addUser}>add user</button>
      </div>
    </>
  );
};

export default Adduser;
