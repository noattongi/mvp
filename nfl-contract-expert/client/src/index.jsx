import React, {useEffect, useState, createContext} from 'react';
import {createRoot} from 'react-dom/client';
import axios from 'axios';
import Info from './components/info/Info.jsx';
import NavBar from './components/header/NavBar.jsx';
import Diagram from './components/diagram/Diagram.jsx';

export const TeamContext = createContext();

function App() {

  const [teamShowing, setTeamShowing] = useState('San Francisco 49ers');
  const [positionsShowing, setPositionsShowing] = useState({
    "All": true,
    "Quarterback": false,
    "Runningback": false,
    "Wide Receiver": false,
    "Tight End": false,
    "Right Tackle": false,
    "Right Guard": false,
    "Center": false,
    "Left Guard": false,
    "Left Tackle": false,
    "Edge Rusher": false,
    "Defensive Tackle": false,
    "Cornerback": false,
    "Linebacker": false,
    "Safety": false
  });

  return(
    <div className='app'>
      <TeamContext.Provider value={{
        teamShowing: teamShowing,
        setTeamShowing: setTeamShowing,
        positionsShowing: positionsShowing,
        setPositionsShowing: setPositionsShowing,
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