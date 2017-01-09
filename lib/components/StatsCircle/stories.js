import React from 'react';
import {storiesOf} from '@kadira/storybook';
import StatsCircle from './index';

storiesOf('StatsCircle', module)
  .add('Default', () => (
    <div>
      <div>
        <StatsCircle
          percent={60}
          value={5}
          color={'#dd1843'}
          r='40'
        />
      </div>
      <div>
        <span>
          <StatsCircle
            percent={90}
            value={9}
            color={'#dd1843'}
            r='35'
          />
        </span>
        <span>
          <StatsCircle
            percent={3}
            value={30}
            color={'#dd1843'}
            r='35'
          />
        </span>
      </div>
    </div>
  ));