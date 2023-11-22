import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function CreateTask() {

    const [task,setTask] = useState('');
    const [expDate,setExpDate] = useState('');
    const [notes,setNotes] = useState('');
    const nav = useNavigate();

    function HandleSubmit(e){
        e.preventDefault();
        axios.post('https://localhost:7225/api/ToDoApp/Create', {
            id:0, task: task, expDate: expDate, notes:notes
        }).then(res=>{
            console.log(res);
            nav('/');
        }).catch(e=>console.log(e));
    }
  return (
    <div>
    <form onSubmit={HandleSubmit}>
  <div className="form-group">
    <label htmlForfor="exampleInputEmail1">Task</label>
    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter task title"
    onChange={e=>setTask(e.target.value)}></input>
  </div>
  <div className="form-group">
    <label htmlForfor="exampleInputPassword1">Time</label>
    <input type="text" className="form-control" id="exampleInputPassword1"
    onChange={e=>setExpDate(e.target.value)}></input>
  </div>
  <div className="form-group">
    <label htmlForfor="exampleInputEmail1">Task Notes</label>
    <textarea type="text" className="form-control" id="exampleInputEmail1" placeholder="Type task notes here"
    onChange={e=>setNotes(e.target.value)} defaultValue={''}></textarea>
  </div>
  <Link to={'/Tasks'} className='btn btn-danger'>Go to tasks</Link>
  <button type="submit" className="btn btn-primary">Create</button>
</form>
    
    </div>
  )
}

export default CreateTask