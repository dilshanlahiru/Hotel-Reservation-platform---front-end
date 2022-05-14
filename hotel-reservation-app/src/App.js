import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">

<React.Fragment>

                <header>
                  <Navbar/>
                </header>
     
   
              <Routes>
                

                <Route path="/" element={<Home/>} exact />
                
              </Routes>
   
 
          
       

     </React.Fragment>

   
    </div>
  );
}

export default App;
