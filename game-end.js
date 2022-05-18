import React from 'react'
import PropTypes from 'prop-types'

export default function GameEnd ({ points, pointsEarned, handleCloseGameEnd }) {
  return (
    <div className='game-end'>
      <button onClick={handleCloseGameEnd}>
        Close
      </button>
      <div>
        { points } Points
      </div>
      <div>
        { pointsEarned } gained this round
      </div>
    </div>
  )
}

GameEnd.propTypes = {
  points: PropTypes.number,
  pointsEarned: PropTypes.number,
  handleCloseGameEnd: PropTypes.func
}
