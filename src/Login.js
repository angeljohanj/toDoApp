import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom';



function Login() {
    
const [user, setUser]= useState('');
const [pass, setPass]= useState('');
const nav = useNavigate();

const handleLogin=()=>{
    if(user===""){
        alert('Please type user');
        return false;
    }else if( pass === ""){
        alert("Please enter password");
        return false;
    }else{
        axios.post('https://localhost:7225/api/ToDoApp/Login',{
            id:0, username: user, password:pass
        }).then(res=>{
            console.log(res);
            alert('Logged in successfully!');
            nav('/Tasks');
        })
        .catch(e=>console.log(e));
    }
}
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <h1>Login</h1>
      <div className="form-group">
    <label htmlFor="exampleInputEmail1">Username</label>
    <input type="text" className="form-control" id="user" placeholder="ex. Juan"
    onChange={e=>{
        setUser(e.target.value);
    }}></input>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="pass"
    onChange={e=>{
        setPass(e.target.value);
    }}></input>
  </div>
  <div>
  <button type='button' onClick={handleLogin} className='btn btn-primary'>Enter</button><br></br>
  <small>Not a user yet?</small><br></br>
  <Link to={'/UserAdd'}>Create new</Link>
  </div>
        </div>
    </div>
  )
}

export default Login