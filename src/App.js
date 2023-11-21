import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Tasks from './Tasks';
import CreateTask from './CreateTask';
import UpdateTask from './UpdateTask';
import Login from './Login';
import UserAdd from './UserAdd';


function App() {
  return (
    <div className="App">
      <h1>ToDoApp</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/UserAdd' element={<UserAdd/>}></Route>
          {/* <Route path='/' element={<Tasks/>}></Route>
          <Route path='/CreateTask' element={<CreateTask/>}></Route>
          <Route path='/UpdateTask/:id' element={<UpdateTask/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
