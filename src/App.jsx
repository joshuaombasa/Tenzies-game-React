import React from 'react'

import Box from './Box'

import './App.css'

function App() {
  

  return (
    <div className='container'>
      <div className="boxes--container">
        <h1 className="title">Tenzies</h1>
        <h4 className="game--details">
        Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
        </h4>
        <div className="buttons--cotainer">
       
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
      </div>
    </div>
  )
}

export default App
