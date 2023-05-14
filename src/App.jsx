import React from 'react'
import uuid from 'react-uuid';
import Confetti from 'react-confetti'
import Box from './Box'

import './App.css'

function App() {

  // const [randomArrayState, setrandomArrayState] = React.useState(getRandomArray())

  const [gameWon, setGameWon] = React.useState(false)

  function getRandomArray() {
    const randomArray = []
    for (let i = 0; i < 10; i++) {
      randomArray.push({ value: createRandomNumber(), isHeld: false, id: uuid() })
    }

    return randomArray
  }

  function createRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
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
    setrandomArrayState((prevrandomArrayState) => {
      return prevrandomArrayState.map(item => {
        return item.id === id ? {...item, isHeld: !item.isHeld} : item
      })
    })
  }

 

  React.useEffect(() => {
    const allBoxesHeld = randomArrayState.every((item) => item.isHeld === true)
    const allBoxValuesMatch = randomArrayState.every((item) => item.value === randomArrayState[0].value)
    setGameWon(allBoxValuesMatch && allBoxesHeld)
  }, [randomArrayState])

console.log(gameWon)

  function rollDice() {
    gameWon === true ? 
    setrandomArrayState(getRandomArray())
    :
    setrandomArrayState((prevrandomArrayState) => {
      return prevrandomArrayState.map(item => {
        return item.isHeld === true ? item : { value: createRandomNumber(), isHeld: false, id: uuid() }
      })
    })
  }

  return (
    <div className='container'>
      {gameWon === true && <Confetti />}
      <div className="boxes--container">
        <h1 className="title">Tenzies</h1>
        <h4 className="game--details">
          Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
        </h4>
        <div className="buttons--cotainer">
          {boxesJsx}
        </div>
        <button onClick={rollDice}>Roll</button>
      </div>
    </div>
  )
}

export default App
