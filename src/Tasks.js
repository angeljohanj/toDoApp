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
                        <tr>
                            <td>{note.id}</td>
                            <td>{note.task}</td>
                            <td>{note.expDate}</td>
                            <td><textarea>{note.notes}</textarea></td>
                            <td>
                            <div className='d-flex'>
                            <span class="material-symbols-outlined">
                            <button className='btn btn-danger'>Delete</button>
                            </span>
                            <span class="material-symbols-outlined">
                            <button className='btn btn-warning'>Edit</button>
                            </span>
                            <span class="material-symbols-outlined">
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