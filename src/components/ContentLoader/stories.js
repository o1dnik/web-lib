import React from 'react'
import {storiesOf} from '@storybook/react'
import ContentLoader from './index'

storiesOf('ContentLoader', module)
  .add('Default', () => (
    <div>
      <div>
        <h3>w/o header</h3>
        <ContentLoader
          height={90}
          header={false}
        />
      </div>
      <div>
        <h3>with header</h3>
        <ContentLoader
          height={90}
          header
        />
      </div>
      <div>
        <h3>with custom height</h3>
        <ContentLoader
          height={350}
          header={false}
        />
      </div>
    </div>
  ))
