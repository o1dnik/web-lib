import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Loader from './index';

const sizes = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge'
];

storiesOf('Loader', module)
  .add('Default', () => (
    <div>

      {sizes.map(s =>
        <div key={s}>
          <Loader size={s}/>
        </div>
      )}

    </div>
  ));
