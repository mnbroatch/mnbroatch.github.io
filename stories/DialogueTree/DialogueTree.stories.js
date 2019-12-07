import React from 'react';
import Markdown from 'markdown-to-jsx';
import DialogueTree, { DialogueNode } from 'react-dialogue-tree'
import './styles.css'

export { default as Basic } from './Basic.js';
export { default as DefaultCustomComponent } from './DefaultCustomComponent.js';
export { default as CustomComponent } from './CustomComponent.js';
export { default as CustomScript } from './CustomScript.js';

export default {
  title: 'DialogueTree',
  component: DialogueTree,
  parameters: { knobs: { escapeHTML: false }, options: { showPanel: false } }
}
