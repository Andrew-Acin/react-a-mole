import './App.css';
import { useState } from 'react';
import MoleContainer from './MoleContainer.js'


function App() {
  let [score, setScore] = useState(0)
  let [gameStarted, setGameStarted] = useState(false)
  let [paused, setPaused] = useState(false)

  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer
          key={i}
          setScore={setScore}
          score={score}
          paused={paused} />
      )
    }

    return (
      <div className='mole-grid'>
        {hills}
      </div>
    )
  }

  const startGame = () => {
    setScore(0)
    setGameStarted(true)
    setPaused(false)
  }

  const togglePause = () => {
    setPaused(!paused)
  }

  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      {score}
      {gameStarted ? (
        <>
          {createMoleHill()}
          <button onClick={togglePause}>{paused ? 'Resume' : 'Pause'}</button>
        </>
      ) : (
        <button onClick={startGame}>Start Game</button>
      )}
    </div>
  )
}

export default App


