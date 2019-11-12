import React, { useState, useCallback, cloneElement } from 'react'

import baseStyles from './baseStyles.js'
import SlidingDoor from '../SlidingDoor'

export default function Hallway ({
  doors = [],
  final = []
}) {
  const [ currentDoorIndex, setCurrentDoorIndex ] = useState(0)
  const currentDoor = doors[currentDoor]

  return (
    <div style={baseStyles.root}>
      <SlidingDoor />
    </div>
  )
}
