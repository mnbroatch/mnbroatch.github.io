import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import JavaScriptAnimation from './index.js';

function getYInSineWave (element, elapsedTime, frequency = 1, wavelength = 100) {
  const percentX = element.offsetLeft / wavelength
  const phaseShift = (elapsedTime / 1000) * frequency
  const theta = (percentX + phaseShift) * (2 * Math.PI)
  return Math.sin(theta)
}

function assignHeight (element, y, amplitude = 10) {
  element.style.transform = `translateY(${y * amplitude}px)`
}

function assignColor (element, y) {
  const hexNumber = Math.floor(((y + 1) * 16777215) / 2).toString(16)
  const colorCode =  `#${('000000' + hexNumber).slice(-6)}`
  element.style.color = colorCode
}

function modifyElement (element, elapsedTime) {
  const childNodes = element.childNodes
  for (let element of childNodes) {
    const y = getYInSineWave(element, elapsedTime)
    assignHeight(element, y)
    assignColor(element, y)
  }
}

export const JavaScriptAnimationStory = () => (
  <JavaScriptAnimation
    memberStyles={{ transition: 'color .1s', display: 'inline-block' }}
    modifyElement={modifyElement}
  >
    hello
  </JavaScriptAnimation>
)

export default {
  title: 'JavaScriptAnimation',
  component: JavaScriptAnimationStory
}
