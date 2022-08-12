import React, {useEffect, useState, useContext} from 'react';
import PlayerEntry from './PlayerEntry.jsx';
import {TeamContext} from '../../index.jsx';


function PlayerList({currentData}) {

  const teamContext = useContext(TeamContext);

  return(
    <div>
      <ul className='player-list'>
        {currentData[teamContext.teamShowing]?.players.map((player) => {
          return (
            <PlayerEntry player={player} key={player._id}/>
          )
        })}
      </ul>
    </div>
  )
}

export default PlayerList;