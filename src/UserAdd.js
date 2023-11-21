import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function UserAdd() {

    function ValidateNewUser(){
        var user= document.getElementById('username').value;
        var pass= document.getElementById('pass').value;
        var passRep= document.getElementById('passRep').value;
        
        if(user===""){
            alert('Please type a username');
            return false;
        }else if(pass.length <=4){
            alert('password must contain 5 or more characters');
            return false;
        } else if (pass !== passRep){   
            alert('passwords do not match!');        
            return false;
        }else{
            HandleSubmit();
        }
    }

    const[user, setUser]= useState('');
    const[pass, setPass]= useState('');

    const HandleSubmit =()=>{
        axios.post('https://localhost:7225/api/ToDoApp/UserAdd', {
            id:0, username: user, password:pass
        })
        .then(res=>{console.log(res)
        alert("User has been added successfully!")})
        .catch(e=>console.log(e));
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <h1>New user</h1>
        <form className='form' id='form'>
      <div className="form-group">
    <label htmlForfor="exampleInputEmail1">Username</label>
    <input type="text"  className="form-control" id="username" placeholder="ex. Paul"
    onChange={(e)=>{setUser(e.target.value)}}></input>
  </div>
  <div className="form-group">
    <label htmlForfor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control"  id="pass"
    onChange={(e)=>{setPass(e.target.value)}}></input>
  </div>
  <div className="form-group">
    <label htmlForfor="exampleInputPassword1">Repeat password</label>
    <input type="password" className="form-control" id="passRep"
    placeholder="password must be the same"
    ></input>
  </div>
  <div>
  <button type='button' className='btn btn-primary' onClick={ValidateNewUser}>Create</button><br></br>
  <small>Already a user?</small><br></br>
  <Link to={'/'}>Log in</Link>
  </div>
  </form>
        </div>
    </div>
  )
}

export default UserAdd