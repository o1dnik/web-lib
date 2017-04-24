import React from 'react'
import {storiesOf} from '@kadira/storybook'
import ThreadCard from './index'

storiesOf('ThreadCard', module)
  .add('Default', () => (
    <div>
      <ul>
        <ThreadCard isRead />
        <ThreadCard isRead />
        <ThreadCard isRead={false} />
        <ThreadCard isRead={false} />
      </ul>
    </div>
  ))
