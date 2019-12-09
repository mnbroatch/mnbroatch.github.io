import React from 'react';
import Markdown from 'markdown-to-jsx';
import DialogueTree, { DialogueNode } from 'react-dialogue-tree'
import SourceCode from './SourceCode.js';
import sourceCode from '!!raw-loader!./DefaultCustomComponent.js'

const dialogue = {
  root: {
    text: 'This dialogue uses the **default custom component** feature and [markdown-to-jsx](http://daringfireball.net/projects/markdown/) to interpret markdown in all nodes by default!',
    then: {
      text: `

# Ain't that cool?

Here is

  - some
  - **random**
  - ~~formatting~~

Too much *fun*!

      `,
      then: {
        text: 'OK, enough of that.'
      }
    }
  }
}

// Our custom component. This is passed as the default to DialogueTree below.
const DialogueNodeWithMarkdown = (props) => (
  <DialogueNode
    {...props}
    text={<Markdown>{props.text}</Markdown>}
  />
)

export default () => (
  <div>
    <SourceCode>{sourceCode}</SourceCode>
    <div className={'dialogue-tree-container'}>

      <DialogueTree
        dialogue={dialogue}
        customComponents={{ default: DialogueNodeWithMarkdown }}
      />

    </div>
  </div>
)
