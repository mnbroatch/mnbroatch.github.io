import React from 'react'
import PropTypes from 'prop-types'

export default function Options ({ options, dispatch, points }) {
  const optionEntries = Object.entries(options)
  const unlockedOptionEntries = optionEntries.filter(([, { unlocked }]) => unlocked)
  const unlockableOptionEntries = optionEntries.filter(([, { unlocked, cost }]) => !unlocked && points >= cost)
  const lockedOptionEntries = optionEntries.filter(([, { unlocked, cost }]) => !unlocked && points < cost)
  return (
    <div className='options'>
      {unlockedOptionEntries.map(([key, option]) => (
        <div
          className='option'
          key={key}
        >
          {key}
          <input
            type="number"
            onChange={(e) => dispatch({
              type: 'SET_OPTION',
              optionName: key,
              value: e.target.value
            })}
          />
        </div>
      ))}
      {unlockableOptionEntries.map(([key, option]) => (
        <a
          className="option option--unlockable"
          onClick={() => dispatch({
            type: 'UNLOCK_OPTION',
            optionName: key
          })}
          key={key}
        >
          {key}
          Unlock for { option.cost } points
        </a>
      ))}
      {lockedOptionEntries.map(([key, option]) => (
        <a
          className="option option--locked"
          key={key}
        >
          {key}
        </a>
      ))}
    </div>
  )
}

Options.propTypes = {
  options: PropTypes.object,
  dispatch: PropTypes.func,
  points: PropTypes.number
}
