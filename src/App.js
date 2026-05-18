
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';



function App() {

  const [mode, setMode] = useState("light")
  const handleMode = ()=>
  {
    if (mode === "dark")
    {
      setMode("light") 
      document.body.style.backgroundColor = "white"
    }
    else 
    {
     setMode("dark")
       document.body.style.backgroundColor = "grey"
    }
  } 


  return (
   <> 
   
  
  <Navbar  title = "TextUtils" about = "About" mode = {mode} toggleMode = {handleMode} />
   <div className='container my-3'>   
   <Textform heading = "Enter The Text To Analyze" mode = {mode}  />
   </div>

   </>
  );
}

export default App;
