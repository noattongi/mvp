import React, {useState, useContext} from 'react';
import {TeamContext} from '../../index.jsx';

function Diagram() {

  const teamContext = useContext(TeamContext);
  const [sSelect, setSSelect] = useState(false);
  const [lbSelect, setLbSelect] = useState(false);
  const [cbSelect, setCbSelect] = useState(false);
  const [ltSelect, setLtSelect] = useState(false);
  const [lgSelect, setLgSelect] = useState(false);
  const [cSelect, setCSelect] = useState(false);
  const [rgSelect, setRgSelect] = useState(false);
  const [rtSelect, setRtSelect] = useState(false);
  const [deSelect, setDeSelect] = useState(false);
  const [dtSelect, setDtSelect] = useState(false);
  const [teSelect, setTeSelect] = useState(false);
  const [wrSelect, setWrSelect] = useState(false);
  const [rbSelect, setRbSelect] = useState(false);
  const [qbSelect, setQbSelect] = useState(false);

  const handleSClick = (e) => {
    if (!sSelect){
      var prev = teamContext.positionsShowing;
      prev["All"] = false;
      prev["Safety"] = true;
      teamContext.setPositionsShowing(prev);
      setSSelect(true);
    } else {
      var prev = teamContext.positionsShowing;
      prev["Safety"] = false;
      var hasTrue = false;
      for (let pos in prev) {
        if (prev[pos]){
          prev["All"] = true;
          break;
        }
      }
      teamContext.setPositionsShowing(prev);
      setSSelect(false);
    }
  }
  const handleLBClick = (e) => {

  }
  const handleCBClick = (e) => {

  }
  const handleDEClick = (e) => {

  }
  const handleDTClick = (e) => {

  }
  const handleLTClick = (e) => {

  }
  const handleLGClick = (e) => {

  }
  const handleCClick = (e) => {

  }
  const handleRGClick = (e) => {

  }
  const handleRTClick = (e) => {

  }
  const handleWRClick = (e) => {

  }
  const handleTEClick = (e) => {

  }
  const handlRBClick = (e) => {

  }
  const handleQBClick = (e) => {

  }


  return(
    <div className="diagram">
      <div className='defense' id='s' onClick={handleSClick}>S</div>
      <div className='defense' id='lb'>LB</div>
      <div id='d-line-button'>Defensive Line</div>
      <div className='line-esc'>
        <div className='wr-cb'>
          <div className='defense' id='cb'>CB</div>
          <div className='offense' id='wr'>WR</div>
        </div>
        <div className='the-line'>
          <div className='d-line-group'>
            <div id='de' className='d-lineman'>DE</div>
            <div id='dt' className='d-lineman'>DT</div>
            <div id='dt' className='d-lineman'>DT</div>
            <div id='de' className='d-lineman'>DE</div>
          </div>
          <div className='o-line-group'>
            <div id='lt' className='o-lineman'>LT</div>
            <div id='lg' className='o-lineman'>LG</div>
            <div id='c' className='o-lineman'>C</div>
            <div id='rg' className='o-lineman'>RG</div>
            <div id='rt' className='o-lineman'>RT</div>
          </div>
        </div>
        <div className='offense' id='te'>TE</div>
      </div>
      <div className='offense-back'>
        <div id='o-line-button'>Offensive Line</div>
        <div className='offense' id='rb'>RB</div>
        <div className='offense' id='qb'>QB</div>
      </div>
    </div>
  )
}

export default Diagram;