import React from 'react'
import {storiesOf} from '@kadira/storybook'
import ThreadCard from './index'

storiesOf('ThreadCard', module)
  .add('Default', () => (
    <div>
      <ul>
        <ThreadCard
          isRead
          image='https://media.giphy.com/media/Nm8ZPAGOwZUQM/giphy.gif'
          title='PP Inc.'
          subtitle='Paramaribaladam Pirindirimobola'
          date={new Date()}
        />
        <ThreadCard
          isRead
          image='https://media.giphy.com/media/14aUO0Mf7dWDXW/giphy.gif'
          title='PP Inc.'
          subtitle='Paramaribaladam Pirindirimobola'
          date={new Date()}
        />
        <ThreadCard
          isRead={false}
          title='PP Inc.'
          subtitle='Paramaribaladam Pirindirimobola'
          date={new Date()}
        />
        <ThreadCard
          isRead={false}
          title='PP Inc.'
          subtitle='Paramaribaladam Pirindirimobola'
          date={new Date()}
        />
      </ul>
    </div>
  ))
