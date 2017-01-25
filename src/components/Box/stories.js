import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Box from './index';

storiesOf('Box', module)
  .add('Default', () => (
    <div>
      <Box>Default</Box>
    </div>
  ))
  .add('Half width', () => (
    <Box width='50%'>Half width</Box>
  ))
  .add('As another element', () => (
    <ul>
      <Box as='li'>Li</Box>
      <Box as='li'>Li</Box>
      <Box as='li'>Li</Box>
    </ul>
  ));