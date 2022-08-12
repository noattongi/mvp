import React, {useEffect, useState, createContext} from 'react';
import {createRoot} from 'react-dom/client';
import axios from 'axios';
import Info from './components/info/Info.jsx';
import NavBar from './components/header/NavBar.jsx';
import Diagram from './components/diagram/Diagram.jsx';

export const TeamContext = createContext();

function App() {

  const [teamShowing, setTeamShowing] = useState('San Francisco 49ers');

  return(
    <div className='app'>
      <TeamContext.Provider value={{
        teamShowing: teamShowing,
        setTeamShowing: setTeamShowing
      }}>
      <NavBar />
      <div className='page-content'>
        <Diagram />
        <Info />
      </div>
      </TeamContext.Provider>
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>);