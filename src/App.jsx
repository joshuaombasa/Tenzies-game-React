import React from 'react'
import uuid from 'react-uuid';
import Box from './Box'

import './App.css'

function App() {

  const [randomArrayState, setrandomArrayState] = React.useState(getRandomArray())

  function getRandomArray() {
    const randomArray = []
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 6) + 1
      randomArray.push({ value: randomNumber, isHeld: false, id: uuid() })
    }

    return randomArray
  }

  const boxesJsx = randomArrayState.map((item) => {
    return <Box
      value={item.value}
      isHeld={item.isHeld}
      id={item.id}
      toggleIsHeld={toggleIsHeld}
      key={item.id} />
  })

  

  function toggleIsHeld(id) {
    console.log('clicked')
  }

  return (
    <div className='container'>
      <div className="boxes--container">
        <h1 className="title">Tenzies</h1>
        <h4 className="game--details">
          Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
        </h4>
        <div className="buttons--cotainer">
          {boxesJsx}
        </div>
      </div>
    </div>
  )
}

export default App
