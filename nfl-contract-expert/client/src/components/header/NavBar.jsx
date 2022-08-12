import React, {useState, useContext} from 'react';
import {TeamContext} from '../../index.jsx';

function NavBar(props) {

  const teamContext = useContext(TeamContext);
  const [showingTeamModal, setShowingTeamModal] = useState(false);

  const handleTeamMenuClick = (e) => {
    setShowingTeamModal(true);
  }

  const handleTeamClick = (e, teamName) => {
    teamContext.setTeamShowing(teamName);
    setShowingTeamModal(false);
  }

  return(
    <div>
      <nav className="nav-bar">
        <div className='logo'>NFL Contract Expert</div>
        <div className="nav-options">
          <div className="nav-players">Players</div>
          <div className='nav-teams' onClick={handleTeamMenuClick}>Teams</div>
        </div>
      </nav>
      {showingTeamModal &&
        <div className='team-modal'>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Buffalo Bills')}} src='https://overthecap.com/Logos/Bills.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Miami Dolphins')}} src='https://overthecap.com/Logos/Dolphins.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'New England Patriots')}} src='https://overthecap.com/Logos/Patriots.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'New York Jets')}} src='https://overthecap.com/Logos/Jets.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Baltimore Ravens')}} src='https://overthecap.com/Logos/Ravens.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Cincinnati Bengals')}} src='https://overthecap.com/Logos/Bengals.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Cleveland Browns')}} src='https://overthecap.com/Logos/Browns.gif' />
          </div>
          <div className='logo-grid-cell'>
          < img onClick={(e) => {handleTeamClick(e, 'Pittsburgh Steelers')}} src='https://overthecap.com/Logos/Steelers.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Houston Texans')}} src='https://overthecap.com/Logos/Texans.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Indianapolis Colts')}} src='https://overthecap.com/Logos/Colts.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Jacksonville Jaguars')}} src='https://overthecap.com/Logos/Jaguars.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Tennessee Titans')}} src='https://overthecap.com/Logos/Titans.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Denver Broncos')}} src='https://overthecap.com/Logos/Broncos.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Kansas City Chiefs')}} src='https://overthecap.com/Logos/Chiefs.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Las Vegas Raiders')}} src='https://overthecap.com/Logos/Raiders.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Los Angeles Chargers')}} src='https://overthecap.com/Logos/Chargers.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Dallas Cowboys')}} src='https://overthecap.com/Logos/Cowboys.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'New York Giants')}} src='https://overthecap.com/Logos/Giants.gif' />
          </div>
          <div className='logo-grid-cell'>
          <img onClick={(e) => {handleTeamClick(e, 'Philadelphia Eagles')}} src='https://overthecap.com/Logos/Eagles.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Washington Commanders')}} src='https://overthecap.com/Logos/Commanders.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Chicago Bears')}} src='https://overthecap.com/Logos/Bears.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Detroit Lions')}} src='https://overthecap.com/Logos/Lions.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Green Bay Packers')}} src='https://overthecap.com/Logos/Packers.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Minnesota Vikings')}} src='https://overthecap.com/Logos/Vikings.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Atlanta Falcons')}} src='https://overthecap.com/Logos/Falcons.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Carolina Panthers')}} src='https://overthecap.com/Logos/Panthers.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'New Orleans Saints')}} src='https://overthecap.com/Logos/Saints.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Tampa Bay Buccaneers')}} src='https://overthecap.com/Logos/Buccaneers.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Arizona Cardinals')}} src='https://overthecap.com/Logos/Cardinals.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Los Angeles Rams')}} src='https://overthecap.com/Logos/Rams.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'San Francisco 49ers')}} src='https://overthecap.com/Logos/49ers.gif' />
          </div>
          <div className='logo-grid-cell'>
            <img onClick={(e) => {handleTeamClick(e, 'Seattle Seahawks')}} src='https://overthecap.com/Logos/Seahawks.gif' />
          </div>
        </div>
      }
    </div>
  )
}

export default NavBar;