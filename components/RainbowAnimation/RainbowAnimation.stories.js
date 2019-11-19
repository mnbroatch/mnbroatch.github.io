import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import WaveAnimation from './index.js';

export const WaveAnimationStory = () => (
  <WaveAnimation>hello</WaveAnimation>
)

export default {
  title: 'WaveAnimation',
  component: WaveAnimationStory
}
