import React, {useEffect, useState} from 'react';
import PlayerList from './PlayerList.jsx';
import axios from 'axios';

function Info(props) {

  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/teams')
    .then((res) => {
      setData(res.data);
      setCurrentData(res.data)
    })
  }, [])

  return (
    <div className='player-list-container'>
      <PlayerList currentData={currentData}/>
    </div>
  )
}

export default Info;