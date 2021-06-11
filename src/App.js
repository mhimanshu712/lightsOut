import React, {useState} from 'react'
import Board from './Board'
import './App.css';
import SettingsDialog from './SettingsDialog'

function App(props) {

  let [hasWon,setHasWon] = useState(false)
  let [toggleSettings,setToggleSettings] = useState(false)

  let [level,setLevel] = useState([
    {label:'Easy',active:false,val:2},
    {label:'Medium',active:true,val:3},
    {label:'Hard',active:false,val:5}
  ])
  let [size,setSize] = useState([
    {label:'Small',active:false,val:3},
    {label:'Mid',active:true,val:5},
    {label:'Large',active:false,val:7}
  ])

  let finalLevel = Math.floor(Math.random()*2) + level.filter(x => x.active===true)[0].val
  console.log(finalLevel)

  const changeStates = (plevel,psize) => {
    setLevel(plevel)
    setSize(psize)
    setToggleSettings(!toggleSettings)
  }

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
        nrows={size.filter(x => x.active===true)[0].val}
        ncols={size.filter(x => x.active===true)[0].val}
        level={finalLevel}
        key={1}
        setHasWon={setHasWon}
        />
    </>;

    let settingsEle = 
      <>
        <SettingsDialog
        changeStates={changeStates}
        level={level}
        size={size}
        />
      </>;


  return (
    toggleSettings? settingsEle : (hasWon? wonEle : boardEle )
  )
}

export default App;
