import { React,useState, useEffect } from 'react'
import Header from './compents/Header';
import Left from './compents/Left'
import Otherall from './compents/Otherall';
import './index.css'
const App=()=>{
  return (
    <div className="App">
      <Header/>
      <div className="app_box">
      <Left/>
      <Otherall/> 
      </div>
      
      
    </div>
  );
}

export default App;
