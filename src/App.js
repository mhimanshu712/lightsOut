import React, {useState} from 'react'
import Board from './Board'
import './App.css';

function App(props) {
  let level = Math.floor(Math.random()*3)+2

  let [hasWon,setHasWon] = useState(false)

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
      </div>
        <Board
        nrows={5}
        ncols={5}
        level={level}
        key={1}
        setHasWon={setHasWon}
        />
    </>;


  return (
    hasWon? wonEle : boardEle
  )
}

export default App;
