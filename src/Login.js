import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';



function Login() {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <h1>Login</h1>
      <div className="form-group">
    <label htmlForfor="exampleInputEmail1">Username</label>
    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter task title"
    ></input>
  </div>
  <div className="form-group">
    <label htmlForfor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
    ></input>
  </div>
  <div>
  <button type='submit' className='btn btn-primary'>Enter</button><br></br>
  <small>Not a user yet?</small><br></br>
  <Link to={'/UserAdd'}>Create new</Link>
  </div>
        </div>
    </div>
  )
}

export default Login