import React, { useRef, useEffect } from 'react'

import styles from './styles.css'

function assignHeight (element, y, amplitude = 10) {
  element.style.transform = `translateY(${y * amplitude}px)`
}

function assignColor (element, y) {
  const colorCode = Math.floor(((y + 1) * 16777215) / 2).toString(16)
  console.log('colorCode', colorCode)
  element.style.color = `#${colorCode}`
  element.style.backgroundColor = `#${colorCode}`
}

function defaultModifyElement (element, y) {
  assignHeight(element, y)
  // assignColor(element, y)
}

export default function RainbowAnimation ({
  children,
  active = true,
  frequency = 1,
  wavelength = 100,
  modifyElement = defaultModifyElement
}) {
  const firstCharacterElementRef = useRef()
  const characters = typeof children === 'string'
    ? children.split('')
    : children

  useEffect(() => {
    const initialTime = Date.now()

    function animate () {
      if (!firstCharacterElementRef.current) return
      const characterElements = firstCharacterElementRef.current.parentNode.childNodes
      const characterElementOffsets = Array.from(characterElements).map(el => el.offsetLeft)
      characterElements.forEach((characterElement, index) => {
        const secondsFromStart = (Date.now() - initialTime) / 1000
        const phaseShift = secondsFromStart * frequency * 2 * Math.PI
        const x = characterElementOffsets[index]
        const theta = (2 * Math.PI) * (x / wavelength)
        const y = Math.sin(theta + phaseShift)
        modifyElement(characterElement, y)
      })

      if (active) requestAnimationFrame(animate)
    }

    animate()
  }, [ active, frequency, wavelength ])

  return characters.map((character, index) => (
    <span
      key={index}
      ref={index === 0 ? firstCharacterElementRef : undefined}
      style={{ display: 'inline-block' }}
    >
      {character}
    </span>
  ))
}
