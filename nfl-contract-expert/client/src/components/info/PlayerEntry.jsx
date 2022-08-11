import React, {useEffect, useState} from 'react';

function PlayerEntry({player}) {
  var backupImg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  var imageSrc = player.playerImg;

  return(
    <div className='player-card'>
      <img className='player-image' src={imageSrc} onError={
        ({currentTarget}) => {
          currentTarget.onerror = null;
          currentTarget.src = backupImg;
        }}/>
      <div className='player-card-info'>
        <div>{player.name}</div>
        <div>{player.position}</div>
        <div>{player.capHit}</div>
      </div>
    </div>
  )
}

export default PlayerEntry;