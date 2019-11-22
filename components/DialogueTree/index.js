import React, { useState, useEffect, useCallback, useRef, cloneElement } from 'react'

import DialogueNode from '../DialogueNode'

import styles from './styles.css'

export default function DialogueTree ({
  dialogue,
  customNodeComponents = {},
  scripts = {}
}) {
  const [ history, setHistory ] = useState([])
  const [ currentNode, setCurrentNode ] = useState(dialogue.root)
  const innerRef = useRef()

  const changeNode = useCallback((newNode) => {
    if (typeof newNode === 'string') newNode = findNode(dialogue, newNode)
    setHistory([ ...history, currentNode ])
    setCurrentNode(newNode)
  })

  useEffect(() => {
    innerRef.current.lastChild.scrollIntoView({ behavior: 'smooth' })
  })

  const NodeComponent = currentNode && currentNode.custom
    ? customNodeComponents[currentNode.custom]
    : DialogueNode

  return (
    <div className='dialogue-tree'>
      <div className='dialogue-tree__inner' ref={innerRef}>
        {[ ...history, currentNode ].map((node, index) => {
          const NodeComponent = node && node.custom
            ? customNodeComponents[node.custom]
            : DialogueNode

          return (
            <NodeComponent
              key={index}
              {...node}
              changeNode={changeNode}
              scripts={scripts}
              active={index === history.length}
            />
          )
        })}
      </div>
    </div>
  )
}

//  TODO: update to find nested nodes
function findNode (dialogue, newNodeAccessPath) {
  return dialogue[newNodeAccessPath]
}
