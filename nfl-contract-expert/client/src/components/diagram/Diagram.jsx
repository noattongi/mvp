import React from 'react';

function Diagram() {
  return(
    <div className="diagram">
      <div className='defense' id='s'>S</div>
      <div className='defense' id='lb'>LB</div>
      <div id='d-line-button'>Defensive Line</div>
      <div className='line-esc'>
        <div className='wr-cb'>
          <div className='defense' id='cb'>CB</div>
          <div className='offense' id='wr'>WR</div>
        </div>
        <div className='the-line'>
          <div className='d-line-group'>
            <div className='d-lineman'>DE</div>
            <div className='d-lineman'>DT</div>
            <div className='d-lineman'>DT</div>
            <div className='d-lineman'>DE</div>
          </div>

          <div className='o-line-group'>
            <div className='o-lineman'>LT</div>
            <div className='o-lineman'>LG</div>
            <div className='o-lineman'>C</div>
            <div className='o-lineman'>RG</div>
            <div className='o-lineman'>RT</div>
          </div>

        </div>
        <div className='offense' id='te'>TE</div>
      </div>
      <div className='offense-back'>
        <div id='o-line-button'>Offensive Line</div>
        <div className='offense' id='rb'>RB</div>
        <div className='offense'>QB</div>
      </div>
    </div>
  )
}

export default Diagram;