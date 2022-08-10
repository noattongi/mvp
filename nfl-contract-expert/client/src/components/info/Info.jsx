import React, {useEffect, useState} from 'react';
import PlayerList from './PlayerList.jsx';

function Info(props) {

  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/teams')
    .then((res) => {
      setData(res.data);
      setCurrentData(res.data)
    })
  }, [data])

  return (
    <div>
      <PlayerList />
    </div>
  )
}

export default Info;