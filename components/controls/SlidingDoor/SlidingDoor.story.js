import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import SlidingDoor from './index.js';

export default () => (
  <div style={{ height: '500px', width: '500px', backgroundColor: 'yellow' }}>
    <SlidingDoor
      id='gwieopu;lvk'
      transitionEndCallback={(id) => { console.log(id) } }
      isOpen={boolean('isOpen', false)}
      isVertical={boolean('isVertical', false)}
      sliders={[
        <div key={1} style={{ backgroundColor: 'red', height: '100%', width: '100%' }}>
          one
        </div>,
        <div key={2} style={{ backgroundColor: 'blue', height: '100%', width: '100%' }}>
          two
        </div>,
        <div key={3} style={{ backgroundColor: 'pink', height: '100%', width: '100%' }}>
          three
        </div>,
        <div key={4} style={{ backgroundColor: 'orange', height: '100%', width: '100%' }}>
          four
        </div>
      ]}
      inside={
        <div style={{ backgroundColor: 'green', height: '100%', width: '100%' }}>
          stuff
        </div>
      }
    />
  </div>
)
