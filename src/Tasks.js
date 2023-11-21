import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Tasks() {

    const [notes, setNotes]=useState([]);

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
  return (
    <div className='task_cont'>
        <div className='task_cont2'>
            <Link to={'/CreateTask'} className='btn btn-primary'>Add +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Task</th>
                    <th>Time</th>
                    <th>Notes</th>
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
                            <button onClick={(e)=>handleDelete(note.id)} className='btn btn-danger'>Delete</button>
                            </span>
                            <span className="material-symbols-outlined">
                            <Link to={`/UpdateTask/${note.id}`} className='btn btn-warning'>Edit</Link>
                            </span>
                            <span className="material-symbols-outlined">
                            <button className='btn btn-dark'>Check</button>
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