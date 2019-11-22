import React, { useState, useCallback, cloneElement } from 'react'

import styles from './styles.css'

export default function DialogueTree ({
  active,
  changeNode,
  choices,
  chosenChoice,
  hiddenWhen,
  script,
  scripts,
  text,
  then
}) {
  // TODO: multiple scripts
  if (active && script) scripts[script]()

  const rootClassName = active
    ? 'dialogue-node dialogue-node--active'
    : 'dialogue-node'

  // TODO: make '(Continue)' text configurable
  if (!choices || !choices.length) {
    choices = [{ text: '(Continue)', then }]
  }

  if (chosenChoice) choices = [chosenChoice]

  return (
    <div className={rootClassName}>
      {text}
      <ul className='choices'>
        {choices.map((choice, index) => {
          if (hiddenWhen && hiddenWhen()) return null

          return (
            <li
              key={index}
              onClick={active ? () => changeNode(choice.then) : undefined}
            >
              {choice.text}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
