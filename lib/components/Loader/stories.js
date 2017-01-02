import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Loader from './index';

storiesOf('Loader', module)
  .add('Default', () => (
    <div>
      <div>
        <Loader size='tiny'>Tiny</Loader>
      </div>
      <div>
        <Loader size='small'>Small</Loader>
      </div>
      <div>
        <Loader size='medium'>Medium</Loader>
      </div>
      <div>
        <Loader size='large'>Large</Loader>
      </div>
    </div>
  ));