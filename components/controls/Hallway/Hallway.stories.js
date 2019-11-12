import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import SlidingDoor from '../../controls/SlidingDoor/index.js';
import Hallway from './index.js';

export default () => (
  <div style={{ height: '500px', width: '500px', backgroundColor: 'yellow' }}>

    <Hallway>
      <SlidingDoor
        key='gwieopu;lvk'
        sliders={[
          <div key={1} style={{ backgroundColor: 'red', height: '100%', width: '100%' }}>
            one
          </div>,
          <div key={2} style={{ backgroundColor: 'blue', height: '100%', width: '100%' }}>
            two
          </div>
        ]}
      />
      <SlidingDoor
        key='jfd039jfk'
        sliders={[
          <div key={1} style={{ backgroundColor: 'pink', height: '100%', width: '100%' }}>
            one
          </div>,
          <div key={2} style={{ backgroundColor: 'purple', height: '100%', width: '100%' }}>
            two
          </div>,
        ]}
      />
      <div style={{ backgroundColor: 'green', height: '100%', width: '100%' }} />
    </Hallway>
  </div>
)
