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

  const posStateHandler = (state, setState, pos) => {
    if (!state) {
      var prev = teamContext.positionsShowing;
      prev["All"] = false;
      prev[pos] = true;
      teamContext.setPositionsShowing(prev);
      setState(true);
    } else {
      var prev = teamContext.positionsShowing;
      prev[pos] = false;
      var hasTrue = false;
      for (let position in prev) {
        if (prev[position]){
          hasTrue = true;
          break;
        }
      }
      prev["All"] = !hasTrue;
      teamContext.setPositionsShowing(prev);
      setState(false);
    }
    console.log(pos);
  }

  const handleSClick = (e) => {
    posStateHandler(sSelect, setSSelect, 'Safety');
  }
  const handleLBClick = (e) => {
    posStateHandler(lbSelect, setLbSelect, 'Linebacker');
  }
  const handleCBClick = (e) => {
    posStateHandler(cbSelect, setCbSelect, 'Cornerback');
  }
  const handleDEClick = (e) => {
    posStateHandler(deSelect, setDeSelect, 'Edge Rusher');
  }
  const handleDTClick = (e) => {
    posStateHandler(dtSelect, setDtSelect, 'Interior Defensive Line');
  }
  const handleLTClick = (e) => {
    posStateHandler(ltSelect, setLtSelect, 'Left Tackle');
  }
  const handleLGClick = (e) => {
    posStateHandler(lgSelect, setLgSelect, 'Left Guard')
;  }
  const handleCClick = (e) => {
    posStateHandler(cSelect, setCSelect, 'Center');
  }
  const handleRGClick = (e) => {
    posStateHandler(rgSelect, setRgSelect, 'Right Guard');
  }
  const handleRTClick = (e) => {
    posStateHandler(rtSelect, setRtSelect, 'Right Tackle');
  }
  const handleWRClick = (e) => {
    posStateHandler(wrSelect, setWrSelect, 'Wide Receiver');
  }
  const handleTEClick = (e) => {
    posStateHandler(teSelect, setTeSelect, 'Tight End');
  }
  const handleRBClick = (e) => {
    posStateHandler(rbSelect, setRbSelect, 'Running Back');
  }
  const handleQBClick = (e) => {
    posStateHandler(qbSelect, setQbSelect, 'Quarterback');
  }


  return(
    <div className="diagram">
      <div style={{backgroundColor: sSelect ? 'lightgreen' : ''}} className='defense' id='s' onClick={handleSClick}>S</div>
      <div style={{backgroundColor: lbSelect ? 'lightgreen' : ''}} className='defense' id='lb' onClick={handleLBClick}>LB</div>
      <div id='d-line-button'>Defensive Line</div>
      <div className='line-esc'>
        <div className='wr-cb'>
          <div style={{backgroundColor: cbSelect ? 'lightgreen' : ''}} className='defense' id='cb' onClick={handleCBClick}>CB</div>
          <div style={{backgroundColor: wrSelect ? 'lightgreen' : ''}} className='offense' id='wr' onClick={handleWRClick}>WR</div>
        </div>
        <div className='the-line'>
          <div className='d-line-group'>
            <div id='de' className='d-lineman' style={{backgroundColor: deSelect ? 'lightgreen' : ''}} onClick={handleDEClick}>DE</div>
            <div id='dt' className='d-lineman' style={{backgroundColor: dtSelect ? 'lightgreen' : ''}} onClick={handleDTClick}>DT</div>
            <div id='dt' className='d-lineman' style={{backgroundColor: dtSelect ? 'lightgreen' : ''}} onClick={handleDTClick}>DT</div>
            <div id='de' className='d-lineman' style={{backgroundColor: deSelect ? 'lightgreen' : ''}} onClick={handleDEClick}>DE</div>
          </div>
          <div className='o-line-group'>
            <div id='lt' className='o-lineman' style={{backgroundColor: ltSelect ? 'lightgreen' : ''}} onClick={handleLTClick}>LT</div>
            <div id='lg' className='o-lineman' style={{backgroundColor: lgSelect ? 'lightgreen' : ''}} onClick={handleLGClick}>LG</div>
            <div id='c' className='o-lineman' style={{backgroundColor: cSelect ? 'lightgreen' : ''}} onClick={handleCClick}>C</div>
            <div id='rg' className='o-lineman' style={{backgroundColor: rgSelect ? 'lightgreen' : ''}} onClick={handleRGClick}>RG</div>
            <div id='rt' className='o-lineman' style={{backgroundColor: rtSelect ? 'lightgreen' : ''}} onClick={handleRTClick}>RT</div>
          </div>
        </div>
        <div className='offense' id='te' style={{backgroundColor: teSelect ? 'lightgreen' : ''}} onClick={handleTEClick}>TE</div>
      </div>
      <div className='offense-back'>
        <div id='o-line-button'>Offensive Line</div>
        <div className='offense' id='rb' style={{backgroundColor: rbSelect ? 'lightgreen' : ''}} onClick={handleRBClick}>RB</div>
        <div className='offense' id='qb' style={{backgroundColor: qbSelect ? 'lightgreen' : ''}} onClick={handleQBClick}>QB</div>
      </div>
    </div>
  )
}

export default Diagram;