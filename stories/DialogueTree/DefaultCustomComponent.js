import React from 'react';
import TypingAnimation from '../../components/TypingAnimation';
import DialogueTree, { DialogueNode } from 'react-dialogue-tree'
import SourceCode from './SourceCode.js';
import sourceCode from '!!raw-loader!./DefaultCustomComponent.js'

const dialogue = {
  root: {
    text: 'This dialogue uses the "default custom component" feature to add a typing animation to every prompt!',
    then: {
      text: 'It works whether a node has choices or not!',
      choices: [
        {
          text: 'Hooray! Again!',
          then: 'root'
        },
        {
          text: 'That\'s nice.',
          then: {
            text: 'It certainly is.'
          }
        }
      ]
    }
  }
}

// Our custom component. This is passed as the default to DialogueTree below.
const DialogueNodeWithTypingAnimation = (props) => (
  <DialogueNode
    {...props}
    text={<TypingAnimation delay={20}>{props.text}</TypingAnimation>}
  />
)

export default () => (
  <div>
    <SourceCode>{sourceCode}</SourceCode>
    <div className={'dialogue-tree-container'}>

      <DialogueTree
        dialogue={dialogue}
        customComponents={{ default: DialogueNodeWithTypingAnimation }}
      />

    </div>
  </div>
)
