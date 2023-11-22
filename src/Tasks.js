import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Tasks() {

    const [notes, setNotes]=useState([]);
    const [completeNotes, setCompleteNotes]=useState([])

    useEffect(()=>{
        axios.get('https://localhost:7225/api/ToDoApp/GetNotes')
        .then(res=>{
            setNotes(res.data)
        }).catch(e=>console.log(e));
    },[]);

    const handleDelete=(id)=>{
        axios.delete('https://localhost:7225/api/ToDoApp/deleteNote?id='+id)
        .then(res=>{
            console.log(res);
            window.location.reload();
        }).catch(e=>console.log(e));
    }

    
    useEffect(()=>{
        axios.get('https://localhost:7225/api/ToDoApp/GetComplete')
        .then(res=>{setCompleteNotes(res.data)})
        .catch(e=>{console.log(e)});
    },[])

    function HandleCheck(id){
        axios.put('https://localhost:7225/api/ToDoApp/setAsComplete?id='+id)
        .then(res=>{
            console.log(res);
            window.location.reload();})
            .catch(e=>{console.log(e)});                
        }
    function HandleUncheck(id){
        axios.put('https://localhost:7225/api/ToDoApp/setAsIncomplete?id='+id)
        .then(res=>{
            console.log(res);
            window.location.reload();})
            .catch(e=>{console.log(e)});  
    }
  return (
        <div className='task_cont'>
        <div className='task_cont2'>
        <h2>TASKS</h2>
        <Link to={'/CreateTask'} className='btn btn-primary'>Add +</Link>            
        <table className='table'>
        
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Task</th>
                    <th>Time</th>
                    <th>Notes</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {notes.map((note, key)=>{
                    return (                        
                        <tr key={key}>
                            <td>{note.id}</td>
                            <td>{note.task}</td>
                            <td>{note.expDate}</td>
                            <td><textarea>{note.notes}</textarea></td>
                            <td>
                            <div className='d-flex'>
                            <span className="material-symbols-outlined">
                            <button className='btn btn-success' onClick={(e)=>{HandleCheck(note.id)}}>Check</button>
                            </span>                            
                            <span className="material-symbols-outlined">
                            <Link to={`/UpdateTask/${note.id}`} className='btn btn-warning'>Edit</Link>
                            </span>                            
                            <span className="material-symbols-outlined">
                            <button onClick={(e)=>handleDelete(note.id)} className='btn btn-danger'>Delete</button>
                            </span>
                            </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <hr></hr>
    {/*=====================================================================================================  */}
    <h2>Completed and expired tasks</h2>      
        <table className='table'>
        
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Task</th>
                    <th>Time</th>
                    <th>Notes</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {completeNotes.map((note, key)=>{
                    if(note===null){
                        <tr>
                            <td><small>No data</small></td>
                        </tr>
                    }
                    return(
                    <tr key={key}>
                        <td>{note.id}</td>
                        <td>{note.task}</td>
                        <td>{note.expDate}</td>
                        <td>{note.notes}</td>
                        <td>
                        <div className='d-flex'>
                            
                            <span className="material-symbols-outlined">
                            <button className='btn btn-success' onClick={(e)=>{HandleUncheck(note.id)}}>keyboard_return</button>
                            </span>
                            <span className="material-symbols-outlined">
                            <button onClick={(e)=>handleDelete(note.id)} className='btn btn-danger'>Delete</button>
                            </span>
                            </div>
                            </td>
                    </tr>
                    )
                })}
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default Tasks