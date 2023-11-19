import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Tasks from './Tasks';
import CreateTask from './CreateTask';

function App() {
  return (
    <div className="App">
      <h1>ToDoApp</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Tasks/>}></Route>
          <Route path='/CreateTask' element={<CreateTask/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
