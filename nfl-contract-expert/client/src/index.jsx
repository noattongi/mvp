import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import axios from 'axios';
import Info from './info/Info.jsx';

function App() {


  return(
    <div>
      <Info />
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>);