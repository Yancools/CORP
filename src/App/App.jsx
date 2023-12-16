import React from "react";
import  Home  from "../view/Home/Home"
import '../css/reset.css';
import './App.css'
import { Route, Routes} from "react-router-dom";




function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element= {<Home />} ></Route>
        </Routes>
    </div>
  );
}

export default App;