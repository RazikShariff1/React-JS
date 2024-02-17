import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react'


function App() {
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
   setAlert({
    msg:message,
    typ:type
   })
  }
  const [mode,setmode]=useState("light")
  const toggle=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor="gray"
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled","success")
    }
  }

  return (
   <>
   <Navbar mode={mode} togglemode={toggle} nature={toggle.nature}/>
   <Alert alert={alert}/>
   <div className='container my-3'>
   <Textform heading="enter the text "/></div> 
    {/* container in bootstrap is element function which appy properties by its own */}
   {<About/>}
   </>
  );
}

export default App;
