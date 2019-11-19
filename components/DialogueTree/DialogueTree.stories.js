import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import DialogueTree from './index.js';

const styles = {
  root: {
    bottom: 10,
    height: '300px',
    left: 10,
    position: 'fixed',
    right: 10
  }
}

const dialogue = {
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
    text: 'Want to know anything else about DialogueTree?',
    choices: [
      {
        text: 'What framework is this?',
        then: {
          text: 'React!',
          then: {
            text: 'There are points throughout where passed-in callbacks can inform the parent component of state changes, check state values, etc. For example, pressing continue now will trigger a state change in the parent. Try it!',
            then: {
              callback: 'exampleCallback',
              then: 'latestProjectInfo'
            }
          }
        }
      },
      {
        text: 'What was that flash I saw when I loaded the page for the first time?',
        then: {
          text: 'This app is actually running through Storybook; it\'s my portfolio! Press the "s" key (or hit "Sidebar" on mobile) to see more! The flash is a byproduct of storybook.',
          then: 'latestProjectInfo'
        }
      },
      {
        text: 'What was that flash I saw when I loaded the page for the first time?',
        then: {
          text: 'This app is actually running through Storybook; it\'s my portfolio! Press the "s" key (or hit "Sidebar" on mobile) to see more! You can view individual components, and even change their parameters! The flash is a byproduct of Storybook.',
          then: 'latestProjectInfo'
        }
      },
      {
        text: 'What was that flash I saw when I loaded the page for the first time?',
        then: {
          text: 'This app is actually running through Storybook; it\'s my portfolio! Press the "s" key (or hit "Sidebar" on mobile) to see more! You can view individual components, and even change their parameters! The flash is a byproduct of Storybook.',
          then: 'latestProjectInfo'
        }
      }
    ]
  }
}

// export const DialogueTreeStory = () => (
//   <div style={ styles.root }>
//     hello
//   </div>
// )
//
export const DialogueTreeStory = () => (
  <div style={ styles.root }>
    <DialogueTree dialogue={ dialogue } />
  </div>
)

export default {
  title: 'DialogueTree',
  component: DialogueTreeStory
}

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
