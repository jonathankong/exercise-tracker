import logo from './logo.svg';
import './App.css';
import './tailwind.css';
import { Routes, Route,  Link } from 'react-router-dom';

import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercise-list.component";
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    <div>
      <Navbar/>
      <br/>
      <Routes>
        <Route path="/" exact element = {<ExerciseList/>}/>
        <Route path="/edit/:id" element = {<EditExercise/>}/>
        <Route path="/create" element = {<CreateExercise/>}/>
        <Route path="/user" element = {<CreateUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
