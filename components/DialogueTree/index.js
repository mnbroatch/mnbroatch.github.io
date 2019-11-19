import React, { useState, useEffect, useCallback, useRef, cloneElement } from 'react'

import DialogueNode from '../DialogueNode'

import styles from './styles.css'

export default function DialogueTree ({
  dialogue
}) {
  const [ history, setHistory ] = useState([])
  const [ currentNode, setCurrentNode ] = useState(dialogue.root)
  const innerRef = useRef()

  const changeNode = useCallback((newNode) => {
    if (typeof newNode === 'string') newNode = dialogue[newNode]

    setHistory([ ...history, currentNode ])
    setCurrentNode(newNode)
  })

  useEffect(() => {
    innerRef.current.lastChild.scrollIntoView({ behavior: 'smooth' })
  })


  return (
    <div className='dialogue-tree'>
      <div className='dialogue-tree__inner' ref={innerRef}>
        {history.map(node => <DialogueNode {...node} />)}
        <DialogueNode {...currentNode} changeNode={changeNode} active />
        <div />
      </div>
    </div>
  )
}
