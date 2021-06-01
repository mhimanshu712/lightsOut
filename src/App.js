import React, {useState} from 'react'
import Board from './Board'
import './App.css';
import settingsIco from './settings.png'
import SettingsDialog from './SettingsDialog'

function App(props) {
  let level = Math.floor(Math.random()*3)+2

  let [hasWon,setHasWon] = useState(false)
  let [toggleSettings,setToggleSettings] = useState(false)

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
        nrows={5}
        ncols={5}
        level={level}
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
