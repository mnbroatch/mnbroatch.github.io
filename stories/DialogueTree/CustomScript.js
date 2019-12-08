import React, { useState, useCallback } from 'react';
import DialogueTree from 'react-dialogue-tree'
import SourceCode from './SourceCode.js'
import sourceCode from '!!raw-loader!./CustomScript.js';

const dialogue = {
  root: {
    text: 'What color background do you prefer?',
    choices: [
      {
        text: 'Red',
        script: 'setBackgroundColor',
        color: '#D1462F',
        then: 'root'
      },
      {
        text: 'Yellow',
        script: 'setBackgroundColor',
        color: '#FCFDAF',
        then: 'root'
      },
      {
        text: 'Blue',
        script: 'setBackgroundColor',
        color: '#BFD7EA',
        then: 'root'
      }
    ]
  }
}

export default () => {
  const [backgroundColor, setBackgroundColor] = useState('yellow')

  return (
    <div styles={{ backgroundColor, height: '100%' }}>
      <SourceCode>{sourceCode}</SourceCode>
      <div className={'dialogue-tree-container'}>

        <DialogueTree
          dialogue={dialogue}
          customScripts={{ setBackgroundColor }}
        />

      </div>
    </div>
  )
}
