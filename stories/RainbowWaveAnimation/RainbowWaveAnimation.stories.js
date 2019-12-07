import React from 'react'
import { number, boolean, withKnobs } from '@storybook/addon-knobs'

import RainbowWaveAnimation from '../../components/RainbowWaveAnimation'

export const RainbowWaveAnimationStory = () => {
  const active = boolean('active', true)
  const frequency = number('frequency', 1,
    {
         range: true,
         min: 0,
         max: 10,
         step: .5,
    }
  )
  const wavelength = number('wavelength', 100,
    {
         range: true,
         min: 0,
         max: 500,
         step: 10,
    }
  )
  const heightRange = number('heightRange', 10,
    {
      range: true,
        min: 0,
        max: 100,
        step: 5,
    }
  )
  const animateHeight = boolean('animateHeight', true)
  const animateColor = boolean('animateColor', true)

  return (
    <RainbowWaveAnimation
      active={active}
      frequency={frequency}
      wavelength={wavelength}
      heightRange={heightRange}
      animateHeight={animateHeight}
      animateColor={animateColor}
    >
      hello
    </RainbowWaveAnimation>
  )
}

export default {
  title: 'RainbowWaveAnimation',
  component: RainbowWaveAnimationStory,
  decorators: [withKnobs],
  parameters: { knobs: { escapeHTML: false }, options: { showPanel: true } }
}
