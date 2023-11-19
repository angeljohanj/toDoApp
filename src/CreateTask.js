import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function CreateTask() {

    const [task,setTask] = useState('');
    const [time,setTime] = useState('');
    const [notes,setNotes] = useState('');
    const nav = useNavigate();
    const formattedDate=time.toString('mm/dd/yyyy');
    function HandleSubmit(e){
        e.preventDefault();
        axios.post('https://localhost:7225/api/ToDoApp/Create', {
            task:task, expDate:time , notes:notes
        }).then(res=>{
            console.log(res);
            console.log(formattedDate);
            nav('/');
        }).catch(e=>console.log(e));
    }
  return (
    <div>
    <form onSubmit={HandleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Task</label>
    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter task title"
    onChange={e=>setTask(e.target.value)}></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Time</label>
    <input type="date" className="form-control" id="exampleInputPassword1"
    onChange={e=>setTime(e.target.value)}></input>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Task Notes</label>
    <textarea type="text" className="form-control" id="exampleInputEmail1" placeholder="Type task notes here"
    onChange={e=>setNotes(e.target.value)} defaultValue={''}></textarea>
  </div>
  <Link to={'/'} className='btn btn-danger'>Go to tasks</Link>
  <button type="submit" className="btn btn-primary">Create</button>
</form>
    
    </div>
  )
}

export default CreateTask