import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Checkbox from './index';

storiesOf('Checkbox', module)
  .add('Default', () => (
    <div>
      <Checkbox
        name='my-checkbox1'
        id='my-checkbox1'
        onChange={(e) => action('change')(e, e.target.checked, e.target.name)}
      />
      <Checkbox
        name='my-checkbox2'
        id='my-checkbox2'
        onChange={(e) => action('change')(e, e.target.checked, e.target.name)}
      />
    </div>
  ))
  .add('With Label', () => (
    <div>
      <Checkbox
        name='my-checkbox3'
        id='my-checkbox3'
        label='my-checkbox'
        onChange={(e) => action('change')(e, e.target.checked, e.target.name)}
      />
      <Checkbox
        name='my-checkbox4'
        id='my-checkbox4'
        label='my-checkbox'
        onChange={(e) => action('change')(e, e.target.checked, e.target.name)}
      />
    </div>
  ));