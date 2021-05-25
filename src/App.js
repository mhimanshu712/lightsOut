import React, {useState} from 'react'
import Board from './Board'
import './App.css';

function App(props) {

  return (
    <>
      <Board
      nrows={5}
      ncols={5}
      />
    </>
  )
}

export default App;
