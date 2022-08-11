import React, {useEffect, useState} from 'react';
import PlayerEntry from './PlayerEntry.jsx';

function PlayerList({currentData}) {

  return(
    <div>
      <ul className='player-list'>
        {currentData["Green Bay Packers"]?.players.map((player) => {
          return (
            <PlayerEntry player={player} key={player._id}/>
          )
        })}
      </ul>
    </div>
  )
}

export default PlayerList;