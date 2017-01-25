import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import AlertBar from './index';

storiesOf('AlertBar', module)
  .add('Default', () => (
    <AlertBar isActive onClick={action('clicked')} />
  ))
  .add('states', () => (
    <div>
      <div>
        <AlertBar
          isActive
          onClick={action('clicked')}
        />
      </div>
      <div>
        <AlertBar
          isActive
          type='success'
          onClick={action('clicked')}
        />
      </div>
    </div>
  ));