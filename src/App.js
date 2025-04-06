

import Home from './Components/Home';
import About from './Components/About';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import Alerts from './Components/Alerts';
function App() {
  const [mode,setMode]=useState('light');

  const [alert,setAlert]= useState(null);

const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
}

const toggleMode=()=>{
  if(mode==='dark'){
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("light mode enabled","success")
  }else{
    setMode('dark');
    document.body.style.backgroundColor='#90caf9 ';
    showAlert("dark mode enabled","success")
  }
}


     

  return (
   <Router>
  <Navbar title="textUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
  <Alerts alert={alert}/>
  <Routes>
 <Route exact path="/" element={<TextForms showAlert={showAlert} heading="enter your text to analyze:" mode={mode} />} />
 <Route exact path="/About" element={<About mode={mode} />} />
 <Route exact path="/Home" element={<Home/>} />
  </Routes>
   </Router>
  );
}

export default App;
