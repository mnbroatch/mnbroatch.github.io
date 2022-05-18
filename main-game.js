import React, { useState, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import allWords from './all-words.json'
import gameWords from './game-words.json'
import curseWords from './curse-words.json'
import Board from './board.js'
import KeyboardLetter from './keyboard-letter.js'

const WORD_LENGTH = 5

// TODO: qwerty
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

function getAnswers (setSize, wordLength) {
  const possibleWords = gameWords.filter(word => word.length === wordLength && !curseWords.includes(word))
  return [...possibleWords].sort(() => Math.random() - 0.5).slice(0, setSize)
}

export default function MainGame ({ options, handleGameEnd }) {
  const [answers, setAnswers] = useState(getAnswers(options.boardsCount.value, options.wordLength.value))
  const [state, dispatch] = useReducer((prevState, action) => {
    if (action.type === 'rub') {
      return { ...prevState, currentGuess: prevState.currentGuess.slice(0, -1) }
    } else if (action.type === 'add_letter') {
      return alphabet.includes(action.letter.toLowerCase())
      && prevState.currentGuess.length < WORD_LENGTH
        ? { ...prevState, currentGuess: prevState.currentGuess + action.letter.toLowerCase() }
        : prevState
    } else if (action.type === 'submit') {
      const guesses = [...prevState.guesses, prevState.currentGuess]
      return !prevState.guesses.includes(prevState.currentGuess)
          && prevState.currentGuess.length === options.wordLength.value
          && allWords.includes(prevState.currentGuess)
        ? { ...prevState, guesses, currentGuess: '' }
        : prevState
    }
  }, { currentGuess: '', guesses: [] })

  useEffect(() => {
    const addKey = (e) => {
      // mouseless users don't need onscreen keyboard
      if (
        (e.keyCode === 13 || e.keyCode === 32)
        && [...document.activeElement.classList].includes('keyboard-letter')
      ) {
        e.preventDefault()
      }

      if (e.keyCode === 8) {
        dispatch({ type: 'rub' })
      } else if (e.keyCode === 13) {
        dispatch({ type: 'submit' })
      } else {
        dispatch({ type: 'add_letter', letter: String.fromCharCode(e.keyCode) })
      }
    }
    document.addEventListener('keydown', addKey)
    return () => { document.removeEventListener('keydown', addKey) }
  }, [])

  useEffect(() => {
    if (
      answers.every(answer => state.guesses.includes(answer))
      || state.guesses.length >= options.maxGuesses.value
    ) {
      handleGameEnd({ answers, guesses: state.guesses })
    }
  }, [state.guesses])

  useEffect(() => {
    setAnswers(getAnswers(options.boardsCount.value, options.wordLength.value))
  }, [options.boardsCount, options.wordLength])

  return (
    <div>
      {answers.map(answer => (
        <Board
          answer={answer}
          guesses={state.guesses}
          currentGuess={state.currentGuess}
          key={answer}
        />
      ))}
      <div className='keyboard'>
        {alphabet.map(letter => (
          <KeyboardLetter
            letter={letter}
            answers={answers}
            handleLetterInput={() => { dispatch({ type: 'add_letter', letter }) }}
            key={letter}
          />
        ))}
      </div>
      <button onClick={() => dispatch({ type: 'rub' })}>
        RUB
      </button>
      <button onClick={() => { dispatch({ type: 'submit' }) }}>
        GUESS
      </button>
    </div>
  )
}

MainGame.propTypes = {
  options: PropTypes.object,
  handleGameEnd: PropTypes.func
}
