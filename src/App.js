import React, {useState} from 'react'
import Board from './Board'
import './App.css';

function App(props) {
  let level = Math.floor(Math.random()*3)+2
  return (
    <>
      <Board
      nrows={5}
      ncols={5}
      level={level}
      />
    </>
  )
}

export default App;
