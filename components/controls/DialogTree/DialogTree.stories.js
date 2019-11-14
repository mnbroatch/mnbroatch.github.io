import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import DialogTree from './index.js';

const styles = {
  root: {
    height: '500px',
    width: '100%',
    backgroundColor: 'grey'
  }
}

const nodes = {
  root: {
    text: 'Welcome to the personal site of Matthew Broatch! Would you like to see my latest project?',
    choices: [
      {
        text: 'YES',
        then: {
          text: 'That\'s good, because you\'re looking at it!',
          then: {
            text: 'This react-built dialogue tree was designed with flexibility in mind. A custom JSON structure is used to build complex conversations.',
            then: 'latestProjectInfo'
          }
        }
      },
      {
        text: 'NO',
        then: {
          text: 'That\'s too bad, because you\'re looking at it!',
          // TODO: "No, I REALLY don't." "OK, let's do something else."
          then: {
            text: 'This react-built dialogue tree was designed with flexibility in mind. A custom JSON structure is used to build complex conversations.',
            then: 'latestProjectInfo'
          }
        }
      }
    ]
  },
  latestProjectInfo: {
    text: 'Want to know anything else about it?',
    choices: [
      {
        text: 'What is this framework?',
        then: {
          text: 'Well',
          then: {
            text: '',
            then: 'latestProjectInfo'
          }
        }
      }
    ]
  }
}

export const DialogTreeStory = () => (
  <div style={ styles.root }>
    hello
  </div>
)

export default {
  title: 'DialogTree',
  component: DialogTreeStory
}

// export default () => (
//   <div style={ styles.root }>
//     <DialogTree tree={ tree } />
//   </div>
// )
//
//
//
//
//
// if: [
//   {
//     condition: ,
//     then: 'seeLatestProject'
//   }
// ]
