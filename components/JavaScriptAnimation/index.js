import React, { useRef, useEffect } from 'react'

export default function JavaScriptAnimation ({
  children,
  active = true,
  modifyElement,
  memberStyles = {},
  containerStyles = {}
}) {
  const containerRef = useRef()
  const characters = typeof children === 'string'
    ? children.split('')
    : children

  useEffect(() => {
    const initialTime = Date.now()

    function animate () {
      if (!containerRef.current) return
      const elapsedTime = Date.now() - initialTime
      const element = containerRef.current
      modifyElement(element, elapsedTime)
      if (active) requestAnimationFrame(animate)
    }

    animate()
  }, [ active, children ])

  return (
    <span ref={containerRef} style={containerStyles}>
      {characters.map((character, index) => (
        <span key={index} style={memberStyles}>
          {character}
        </span>
      ))}
    </span>
  )
}
