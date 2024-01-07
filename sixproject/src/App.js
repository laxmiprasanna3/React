
import './App.css';
import ClassComponent from './component/ClassComponent';
import FunctionComponent from './component/FunctionComponent';
import {useState} from 'react';
import {Routes, Route} from "react-router-dom";

function App() {
  const fname = "abcdefg";
  const [name, setName]= useState("puppy")
  return (
    <Routes>
      <Route path='/' element={<ClassComponent/>}/>
      <Route path='/functional-comp' element={<FunctionComponent/>}/>
    </Routes>
    /*<div className="App">
      <h2>Hello World!</h2>
      <ClassComponent></ClassComponent>
      <FunctionComponent fname={fname} name = {name} height={5.11} setName={setName}/>
    </div>*/
  );
}

export default App;
