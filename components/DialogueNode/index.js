import React, { useState, useCallback, cloneElement } from 'react'
import ReactMarkdown from 'react-markdown'

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

  // TODO: "Choice Has Been Clicked Before" indicator

  if (chosenChoice) choices = [chosenChoice]

  return (
    <div className={rootClassName}>
      <ReactMarkdown source={text} />
      <ul className='choices'>
        {choices.map((choice, index) => {
          if (choice.hiddenWhen && scripts[choice.hiddenWhen]()) return null

          return (
            <li
              key={index}
              onClick={active ? () => changeNode(choice) : undefined}
            >
              <ReactMarkdown source={choice.text} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
