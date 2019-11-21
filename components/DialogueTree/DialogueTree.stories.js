import React from 'react';
import { forceReRender } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import DialogueTree from './index.js';
import welcomeDialogue from './welcomeDialogue.json';
import siteDialogue from './siteDialogue.json';

const styles = {
  root: {
    bottom: 10,
    height: '300px',
    left: 10,
    position: 'fixed',
    right: 10
  }
}

export const WelcomeDialogue = () => {
  const dialogue = object('Dialogue', welcomeDialogue)

  return (
    <div style={styles.root}>
      <DialogueTree dialogue={dialogue} />
    </div>
  )
}

export const SiteDialogue = () => (
  <div style={styles.root}>
    <DialogueTree dialogue={siteDialogue} />
  </div>
)

export default {
  title: 'DialogueTree',
  component: DialogueTree,
  decorators: [withKnobs],
  parameters: { knobs: { escapeHTML: false } }
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
