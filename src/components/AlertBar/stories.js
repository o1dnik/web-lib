import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import AlertBar from './index';

storiesOf('AlertBar', module)
  .add('Default', () => (
    <AlertBar isActive onClick={action('clicked')}/>
  ))
  .add('success', () => (
    <div>
      <div>
        <AlertBar
          isActive
          type='success'
          onClick={action('clicked')}
        />
      </div>
    </div>
  ))
  .add('error', () => (
    <div>
      <div>
        <AlertBar
          isActive
          type='error'
          onClick={action('clicked')}
        />
      </div>
    </div>
  ))
  .add('warning', () => (
    <div>
      <div>
        <AlertBar
          isActive
          type='warning'
          onClick={action('clicked')}
        />
      </div>
    </div>
  ));
