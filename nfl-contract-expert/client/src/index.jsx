import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import axios from 'axios';
import Info from './components/info/Info.jsx';
import NavBar from './components/header/NavBar.jsx';
import Diagram from './components/diagram/Diagram.jsx';

function App() {


  return(
    <div className='app'>
      <NavBar />
      <div className='page-content'>
        <Diagram />
        <Info />
      </div>
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>);