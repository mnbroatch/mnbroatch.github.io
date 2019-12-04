import React from 'react';
import { forceReRender } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import DialogueTree from 'react-dialogue-tree';
import RainbowWaveAnimation from '../components/RainbowWaveAnimation';
import welcomeDialogue from './welcomeDialogue.json';

import './styles.stories.css'

//  https://coolors.co/616163-fddd9b-929487-a1b0ab-c3dac3

const Surprise = ({ active, changeNode, then }) => {
  const rootClassName = active
  ? 'dialogue-node dialogue-node--active'
  : 'dialogue-node'

  return (
    <RainbowWaveAnimation active={active}>
      SURPRISE! SURPRISE! SURPRISE! SURPRISE! SURPRISE!
    </RainbowWaveAnimation>
  )
}

export const WelcomeDialogue = () => {
  const dialogue = object('Dialogue', welcomeDialogue)
  const scripts = { alwaysTrue: () => true }
  const customComponents = { Surprise }

  return (
    <div className={'welcome-dialogue-story'}>
      <div className={'dialogue-tree__container'}>
        <DialogueTree
          dialogue={dialogue}
          scripts={scripts}
          customComponents={customComponents}
        />
      </div>
    </div>
  )
}

export default {
  title: 'DialogueTree',
  component: DialogueTree,
  decorators: [withKnobs],
  parameters: { knobs: { escapeHTML: false }, options: { showPanel: false } }
}
