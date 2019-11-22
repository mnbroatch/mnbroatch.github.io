import React, { useCallback } from 'react'
import getYInShiftingSineWave from '../../utilities/getYInShiftingSineWave.js'
import percentToHexColor from '../../utilities/percentToHexColor.js'
import JavaScriptAnimation from '../JavaScriptAnimation'

export default function RainbowWaveAnimation ({
  children,
  active = true,
  frequency = 1,
  wavelength = 100,
  heightRange = 10,
  animateHeight = true,
  animateColor = true,
  containerStyles = {}
}) {
  const members = typeof children === 'string'
    ? children.split('')
    : children

  const wrappedMembers = React.Children.map(
    members,
    (member, index) => (
      <span
        key={index}
        style={{
          transition: 'color .1s',
          display: 'inline-block'
        }}
      >
        {member}
      </span>
    )
  )

  const modifyElement = useCallback((element, elapsedTime) => {
    const childNodes = element.childNodes
    for (let element of childNodes) {
      const percentY = getYInShiftingSineWave(
        element.offsetLeft,
        elapsedTime,
        frequency,
        wavelength
      )
      if (animateHeight) element.style.transform = `translateY(${percentY * heightRange}px)`
      if (animateColor) element.style.color = percentToHexColor(percentY)
    }
  }, [frequency, wavelength, heightRange, animateHeight, animateColor])

  return (
    <JavaScriptAnimation
      active={active}
      containerStyles={containerStyles}
      modifyElement={modifyElement}
    >
      {wrappedMembers}
    </JavaScriptAnimation>
  )
}
