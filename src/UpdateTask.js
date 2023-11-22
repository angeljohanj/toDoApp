import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';


function UpdateTask() {
  
    const [task,setTask] = useState('');
    const [expDate,setExpDate] = useState('');
    const [notes,setNotes] = useState('');
    const {id}= useParams();
    const nav = useNavigate();

    useEffect(()=>{
    axios.get('https://localhost:7225/api/ToDoApp/GetOne?id='+id)
    .then(res=>{
        setTask(res.data.task);
        setExpDate(res.data.expDate);
        setNotes(res.data.notes);
    }).catch(e=>console.log(e));
    },[])
    

    function HandleSubmit(e){
        e.preventDefault();
        axios.put('https://localhost:7225/api/ToDoApp/updateNote', {
            id:id,task:task, expDate:expDate, notes:notes
        }).then(res=>{
            console.log(res);
            nav('/Tasks');
        }).catch(e=>console.log(e));
    }
  return (
    <div className='task_cont'>
        <div className='task_cont2'>
          <h1>Edit task</h1>
    <form onSubmit={HandleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Task</label>
    <input type="text" value={task} className="form-control" id="exampleInputEmail1" placeholder="Enter task title"
    onChange={e=>setTask(e.target.value)}></input>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Time</label>
    <input type="text" value={expDate} className="form-control" id="exampleInputPassword1"
    onChange={e=>setExpDate(e.target.value)}></input>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Task Notes</label>
    <textarea type="text" value={notes} className="form-control" id="exampleInputEmail1" placeholder="Type task notes here"
    onChange={e=>setNotes(e.target.value)} defaultValue={''}></textarea>
  </div>
  
  <button type="submit" className="btn btn-primary">Update</button><br></br>
  <Link to={'/Tasks'} className='btn btn-danger'>Go to tasks</Link>
</form>
    </div>
    </div>
  )
}

export default UpdateTask