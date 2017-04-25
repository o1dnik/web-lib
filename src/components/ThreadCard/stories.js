import React from 'react'
import {storiesOf} from '@kadira/storybook'
import ThreadCard from './index'
import {addYears, addMinutes} from 'date-fns'

storiesOf('ThreadCard', module)
  .add('Default', () => (
    <div>
      <ul>
        <ThreadCard
          isRead
          image='https://media.giphy.com/media/Nm8ZPAGOwZUQM/giphy.gif'
          title='PP Inc.'
          subtitle='Paramaribaladam Pirindirimobola'
          date={addYears(new Date(), -5)}
        />
        <ThreadCard
          isRead
          image='https://media.giphy.com/media/14aUO0Mf7dWDXW/giphy.gif'
          title='PP Inc.'
          subtitle='Paramaribaladam Pirindirimobola'
          date={addMinutes(new Date(), -100)}
        />
        <ThreadCard
          isRead={false}
          title='PP Inc.'
          subtitle='Paramaribaladam Pirindirimobola'
          date={addMinutes(new Date(), -11)}
        />
        <ThreadCard
          isRead={false}
          title='PP Inc.'
          subtitle='Paramaribaladam Pirindirimobola'
          date={new Date()}
        />
        <ThreadCard
          isRead={false}
          title='Without date'
          subtitle='Paramaribaladam Pirindirimobola'
        />
      </ul>
    </div>
  ))
