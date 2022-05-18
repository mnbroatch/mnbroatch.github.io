import React from 'react'
import PropTypes from 'prop-types'
import Guess from './guess.js'

export default function Board ({ guesses, answer, currentGuess }) {
  return (
    <div
      className={[
        'board',
        guesses.includes(answer) && 'board--solved'
      ].filter(Boolean).join(' ')}
    >
      <div>
        {answer}
      </div>
      <div>
        {guesses.map((guess, i) => (
          <Guess
            key={i}
            answer={answer}
            guess={guess}
          />
        ))}
        <div className={[
          'current-guess',
          !currentGuess && 'current-guess--placeholder'
        ].filter(Boolean).join(' ')}>
          {currentGuess || 'x'}
        </div>
      </div>
    </div>
  )
}

Board.propTypes = {
  answer: PropTypes.string,
  guesses: PropTypes.arrayOf(PropTypes.string),
  currentGuess: PropTypes.string
}
