import React, { useEffect, useRef } from 'react'
import deepMerge from 'deepmerge'

import baseStyles from './baseStyles.js'


export default function SlidingDoor ({
  id,
  sliders,
  isOpen,
  isVertical,
  styles = {},
  transitionEndCallback,
  inside
}) {
  styles = deepMerge(baseStyles, styles)
  const firstSliderRef = useRef(null)
  const firstSliderElement = firstSliderRef.current

  // Todo: check for issues with changing callback on the fly
  useEffect(() => {
    if (!firstSliderElement) return
    const cb = () => { transitionEndCallback(id) }
    firstSliderElement.addEventListener('transitionend', cb)
    return () => { firstSliderElement.removeEventListener('transitionend', cb) }
  }, [isOpen, firstSliderElement, id, transitionEndCallback])

  const evenSlideDistanceModifier = sliders.length % 2
    ? sliders.length
    : sliders.length - 1

  const frontStyles = isVertical
    ? styles.frontVertical
    : styles.frontHorizontal

  const evenSliderOpenStyles = isVertical
    ? getAfterSlidePosition(evenSlideDistanceModifier, 'up')
    : getAfterSlidePosition(evenSlideDistanceModifier, 'left')

  const oddSliderOpenStyles = isVertical
    ? getAfterSlidePosition(evenSlideDistanceModifier, 'down')
    : getAfterSlidePosition(evenSlideDistanceModifier, 'right')

  const oddSliderStyles = isOpen
    ? { ...styles.slider, ...oddSliderOpenStyles }
    : styles.slider

  const evenSliderStyles = isOpen
    ? { ...styles.slider, ...evenSliderOpenStyles }
    : styles.slider

  return (
    <div style={styles.root}>
      <div style={frontStyles}>
        {sliders.map((slider, ind) => (
          <div
            key={slider.key}
            ref={(ref) => { if (ind === 0) firstSliderRef.current = ref }}
            style={ind % 2 ? oddSliderStyles : evenSliderStyles}
          >
            {slider}
          </div>
        ))}
      </div>
      <div style={styles.inside}>{inside}</div>
    </div>
  )
}


function getAfterSlidePosition (evenSlideDistanceModifier, direction) {
  const slidePositions = {
    up: 
    {
      transform: `translateY(-${100 * evenSlideDistanceModifier}%)`
    },
    down: 
    {
      transform: `translateY(${100 * evenSlideDistanceModifier}%)`
    },
    left: {
      transform: `translateX(-${100 * evenSlideDistanceModifier}%)`
    },
    right: {
      transform: `translateX(${100 * evenSlideDistanceModifier}%)`
    }
  }

  return slidePositions[direction] || Object.values(slidePositions)[0]
}
