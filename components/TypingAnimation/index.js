import React, { useState, useEffect } from 'react'
import useInterval from 'react-useinterval'

export default function TypingAnimation ({ children, delay }) {
  if (typeof children !== 'string') return null

  const [ charactersSoFar, setCharactersSoFar ] = useState(children[0])
  const isFinished = charactersSoFar.length === children.length

  useInterval(() => {
    setCharactersSoFar(children.slice(0, charactersSoFar.length + 1))
  }, isFinished ? null : delay)

  useEffect(() => { setCharactersSoFar(children[0]) }, [children])

  return charactersSoFar
}
