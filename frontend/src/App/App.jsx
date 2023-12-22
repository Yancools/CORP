import React from "react";
import  Home  from "../view/Home/Home"
import '../css/reset.css';
import './App.css'
import { Route, Routes} from "react-router-dom";
import { ThemeProvider } from "../providers/ThemeProvider";
import Layout from "../components/Layout/Layout";
import "../components/Layout/Layout.css";




function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div className="App">
          <Routes>
            <Route path="/" element= {<Home />} ></Route>
          </Routes>
        </div>   
      </Layout>
    </ThemeProvider>
  );
}

export default App;