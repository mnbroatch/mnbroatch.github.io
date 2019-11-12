const root = {
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
  height: '100%'
}

const frontHorizontal = {
  zIndex: 1,
  height: '100%',
  width: '100%',
  display: 'flex',
  position: 'absolute'
}

const frontVertical = { ...frontHorizontal, flexDirection: 'column' }

const inside = {
  zIndex: 0,
  height: '100%',
  width: '100%'
}

const slider = {
  height: '100%',
  flex: '1',
  transition: '1s transform',
  width: '100%'
}

export default {
  root,
  inside,
  frontHorizontal,
  frontVertical,
  slider
}
