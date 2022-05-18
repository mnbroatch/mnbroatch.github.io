import React from 'react'
import PropTypes from 'prop-types'

export default function KeyboardLetter ({ letter, answers, handleLetterInput }) {
  return (
    <button
      className='keyboard-letter'
      tabIndex='-1'
      onClick={handleLetterInput}
    >
      { letter }
    </button>
  )
}

KeyboardLetter.propTypes = {
  letter: PropTypes.string,
  answers: PropTypes.arrayOf(PropTypes.string),
  handleLetterInput: PropTypes.func
}
