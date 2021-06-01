import React, {useState} from 'react'
import Board from './Board'
import './App.css';
import settingsIco from './settings.png'
import SettingsDialog from './SettingsDialog'

function App(props) {
  
  let [gameStates,setGameStates] = useState({level:2,size:5})
  let [hasWon,setHasWon] = useState(false)
  let [toggleSettings,setToggleSettings] = useState(false)

  let finalLevel = Math.floor(Math.random()*2) + gameStates.level

  let wonEle =
    <div className='won-container'>
      <div className='title-won'>
        <div className='neon'>You</div>
        <div className='flux'>Won</div>
      </div>
      <div className='replay-button' onClick={() => setHasWon(false)}></div>
    </div>;

  let boardEle = 
    <>
      <div className='title'>
        <div className='neon'>Lights</div>
        <div className='flux'>Out</div>
        <div className='setting-button' onClick={() => setToggleSettings(true)}></div>
      </div>
        <Board
        nrows={gameStates.size}
        ncols={gameStates.size}
        level={finalLevel}
        key={1}
        setHasWon={setHasWon}
        />
    </>;

    let settingsEle = 
      <>
        <SettingsDialog/>
      </>;


  return (
    toggleSettings? settingsEle : (hasWon? wonEle : boardEle )
  )
}

export default App;
