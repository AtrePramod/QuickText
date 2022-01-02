import './App.css';
import About from './components/About'; 
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";

function App() {
   const [mode, setmode] = useState("light");
   const togglemode=()=>{
     if(mode==='light'){
       setmode('dark');
       document.body.style.backgroundColor='#0d213f';
       showalert("Dark mode has been Enable","success");
       document.title="TextUtils -Dark mode";
      // setInterval(() => {
      //  document.title="TextUtils amazing mode";
      // }, 2000);
      // setInterval(() => {
      //  document.title="Install TextUtils Now";
      // }, 1500);
     }
     else{
       setmode('light');
       document.body.style.backgroundColor='white';
       showalert("Light mode has been Enable","success");
       document.title="TextUtils -Light mode"
     }
   }
   const [alert, setalert] = useState(null);
   const showalert=(message, type)=>{
      setalert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setalert(null);
      },1500);
   }
  return (
     <>
      <Router>
         <Navbar title="TextUtils"  about="About Text" mode={mode} togglemode={togglemode}/> 
        <Alert alert= {alert}/> 
        <div className="container my-3 ">
        <Switch>
          <Route exact path="/About">
            <About/>
          </Route>
          
          <Route exact path="/">
          <Textform showalert={showalert}head="Enter the text to analyze below" mode={mode}/>
          </Route>
        </Switch>
           
      </div>
     </Router>
     </>
  );
}
export default App;