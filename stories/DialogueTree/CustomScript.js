import React, { useState, useCallback } from 'react';
import DialogueTree from 'react-dialogue-tree'
import SourceCode from './SourceCode.js'
import sourceCode from '!!raw-loader!./CustomScript.js'

const dialogue = {
  root: {
    text: 'What color background do you prefer?',
    choices: [
      {
        text: 'Yellow',
        script: 'changeBackgroundColor',
        color: '#FCFDAF',
        then: 'root'
      },
      {
        text: 'Blue',
        script: 'changeBackgroundColor',
        color: '#BFD7EA',
        then: 'root'
      },
      {
        text: 'Red',
        script: 'changeBackgroundColor',
        color: '#D1462F',
        then: {
          text: 'Hmm, red doesn\'t work so well, does it?',
          then: 'root'
        }
      },
      {
        text: 'White',
        script: 'changeBackgroundColor',
        color: '#FFF',
        then: {
          text: 'Back to the basics!',
          then: 'root'
        }
      }
    ]
  }
}

export default () => {
  const [backgroundColor, setBackgroundColor] = useState('#FFF')
  const changeBackgroundColor = useCallback((node) => {
    setBackgroundColor(node.color)
  }, [])

  return (
    <div style={{ backgroundColor, height: '100%' }}>
      <SourceCode>{sourceCode}</SourceCode>
      <div className={'dialogue-tree-container'}>
Hello
        <DialogueTree
          dialogue={dialogue}
          customScripts={{ changeBackgroundColor }}
        />

      </div>
    </div>
  )
}
