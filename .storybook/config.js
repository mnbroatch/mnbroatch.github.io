import { addParameters, configure } from '@storybook/react';

addParameters({ options: { isFullscreen: true, isToolshown: false } })
configure(require.context('../components', true, /\.stories\.js$/), module);
