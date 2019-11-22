import React from 'react';
import { forceReRender } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import DialogueTree from './index.js';
import RainbowWaveAnimation from '../RainbowWaveAnimation';
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

const Surprise = ({ active, changeNode, then }) => {
  const rootClassName = active
  ? 'dialogue-node dialogue-node--active'
  : 'dialogue-node'

  return (
    <div className={rootClassName}>
      <RainbowWaveAnimation active={active}>
        SURPRISE! SURPRISE! SURPRISE! SURPRISE! SURPRISE!
      </RainbowWaveAnimation>
      <ul className='choices'>
        <li onClick={active ? () => changeNode(then) : undefined}>
          Yay!
        </li>
      </ul>
    </div>
  )
}

export const WelcomeDialogue = () => {
  const dialogue = object('Dialogue', welcomeDialogue)
  const scripts = { alwaysTrue: () => true }
  const customNodeComponents = { Surprise }

  return (
    <div style={styles.root}>
      <DialogueTree
        dialogue={dialogue}
        scripts={scripts}
        customNodeComponents={customNodeComponents}
      />
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
