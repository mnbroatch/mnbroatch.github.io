import React, { useReducer, useState } from 'react'
import MainGame from './main-game.js'
import Options from './options.js'
import GameEnd from './game-end.js'

const defaultOptions = {
  boardsCount: {
    value: 1,
    range: [1, 10],
    multiplierCurve: (value) => {
      return value
    },
    unlocked: false,
    cost: 1
  },
  maxGuesses: {
    value: Infinity,
    range: [1, 6],
    multiplierCurve: (value, options) => {
      const effectiveValue = value + options.boardsCount.value - 1
      if (effectiveValue === 1) {
        return 200
      } else if (effectiveValue === 2) {
        return 50
      } else if (effectiveValue === 3) {
        return 5
      } else if (effectiveValue === 4) {
        return 3
      } else if (effectiveValue === 5) {
        return 1.5
      } else if (effectiveValue === 6) {
        return 1.1
      } else if (effectiveValue > 6) {
        return 1
      }
    },
    unlocked: false,
    cost: 1
  },
  wordLength: {
    value: 5,
    range: [1, 10],
    multiplierCurve: (value) => {
      if (value < 4) {
        return -1
      } else if (value === 4) {
        return -0.5
      } else if (value === 5) {
        return 1
      } else if (value > 5) {
        return 3
      }
    },
    unlocked: false,
    cost: 1
  }
}

function getPointsEarned (options, endState) {
  const basePoints = 1
  return Object.values(options).reduce((acc, { multiplierCurve, value }) => {
    return acc + basePoints * multiplierCurve(value, options) - 1
  }, basePoints)
}

export default function App () {
  // TODO: store in localstorage
  const [gameState, dispatch] = useReducer(
    (prev, { type, optionName, value, pointsAmount, endState }) => {
      if (type === 'SET_OPTION') {
        return {
          ...prev,
          options: {
            ...prev.options,
            [optionName]: { ...prev.options[optionName], value }
          }
        }
      } else if (type === 'UNLOCK_OPTION') {
        return {
          ...prev,
          points: prev.points - prev.options[optionName].cost,
          options: {
            ...prev.options,
            [optionName]: { ...prev.options[optionName], unlocked: true }
          }
        }
      } else if (type === 'END_GAME') {
        const pointsEarned = getPointsEarned(prev.options, endState)
        return {
          ...prev,
          points: prev.points + pointsEarned,
          lastPointsEarned: pointsEarned,
          uid: Date.now() + Math.random()
        }
      }
    },
    {
      options: defaultOptions,
      points: 0,
      uid: Date.now() + Math.random()
    }
  )

  const [uiState, setUiState] = useState('game')

  const handleGameEnd = (endState) => {
    setUiState('game_end')
    dispatch({ type: 'END_GAME', ...endState })
  }

  const handleCloseGameEnd = () => { setUiState('game') }

  return (
    <div className='root'>
      <button onClick={() => setUiState(uiState === 'options' ? 'game' : 'options')}>
        Options
      </button>
      <div className='points'>
        {gameState.points} Points
      </div>
      <div className='screens'>
        <div className='screens--inner'>
          <div className={[
            'screen',
            uiState === 'options' && 'screen--open'
          ].filter(Boolean).join(' ')}>
            <Options
              options={gameState.options}
              points={gameState.points}
              dispatch={dispatch}
            />
          </div>
          <div className={[
            'screen',
            uiState === 'game_end' && 'screen--open'
          ].filter(Boolean).join(' ')}>
            <GameEnd
              points={gameState.points}
              pointsEarned={gameState.lastPointsEarned}
              handleCloseGameEnd={handleCloseGameEnd}
            />
          </div>
          <MainGame
            key={gameState.uid}
            options={gameState.options}
            handleGameEnd={handleGameEnd}
          />
        </div>
      </div>
    </div>
  )
}
