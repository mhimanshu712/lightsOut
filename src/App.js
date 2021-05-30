import React, {useState} from 'react'
import Board from './Board'
import './App.css';

function App(props) {
  let level = Math.floor(Math.random()*3)+3
  return (
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
      />
    </>
  )
}

export default App;
