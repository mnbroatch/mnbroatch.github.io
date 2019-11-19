import React, { useState, useCallback, cloneElement } from 'react'

import styles from './styles.css'

export default function DialogueTree ({
  text,
  choices,
  then,
  changeNode,
  active
}) {
  const rootClassName = active
    ? 'dialogue-node dialogue-node--active'
    : 'dialogue-node'

  if (!choices || !choices.length) {
    choices = [{ text: '(Continue)', then }]
  }

  return (
    <div className={rootClassName}>
      {text}


      <ul className='choices'>
        {choices.map((choice) => {
          if (!choice.then) return null

          return (
            <li onClick={() => changeNode(choice.then)}>
              {choice.text}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
