import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import DialogueNode from './index.js';

const styles = {
  root: {
    height: '500px',
    width: '100%',
    backgroundColor: 'grey'
  }
}

export const DialogueNodeStory = () => (
  <div style={ styles.root }>
    <DialogueNode text='hello' />
  </div>
)

export default {
  title: 'DialogueNode',
  component: DialogueNodeStory
}
