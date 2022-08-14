import React, {useEffect, useState, useContext} from 'react';
import PlayerEntry from './PlayerEntry.jsx';
import {TeamContext} from '../../index.jsx';


function PlayerList({currentData}) {

  const teamContext = useContext(TeamContext);
  const [pos, setPos] = useState([]);
  var {positionsShowing} = teamContext;


  var filterPlayersByPos = () => {
    var pos = []
    for (let key in positionsShowing) {
      if (positionsShowing[key]) {
        if (key === "All"){
          continue;
        } else {
          pos.push(key);
        }
      }
    }
    setPos(pos);
  }

  useEffect(() => {
    filterPlayersByPos();
  })

  return(
    <div>
      <ul className='player-list'>
        {currentData[teamContext.teamShowing]?.players.map((player) => {
          if (pos.indexOf(player.position) >= 0 || positionsShowing["All"]){
            console.log(player.position);
            return (
              <PlayerEntry player={player} key={player._id}/>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default PlayerList;