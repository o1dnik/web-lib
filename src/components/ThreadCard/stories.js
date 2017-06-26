import React from 'react'
import { storiesOf } from '@storybook/react'
import ThreadCard from './index'
import { addYears, addMinutes } from 'date-fns'

storiesOf('ThreadCard', module)
  .add('Default', () => (
    <div>
      <ul>
        <ThreadCard
          isUnread
          image='https://media.giphy.com/media/Nm8ZPAGOwZUQM/giphy.gif'
          title='PP Inc.'
          subtitle='Paramaribaladam Pirindirimobola'
          date={addYears(new Date(), -5)}
        />
        <ThreadCard
          isUnread
          image='https://media.giphy.com/media/14aUO0Mf7dWDXW/giphy.gif'
          title='PP Inc.'
          subtitle='Paramaribaladam Pirindirimobola'
          date={addMinutes(new Date(), -100)}
        />
        <ThreadCard
          title='PP Inc.'
          subtitle='Paramaribaladam Pirindirimobola'
          date={addMinutes(new Date(), -11)}
        />
        <ThreadCard
          title='PP Inc.'
          subtitle='Paramaribaladam Pirindirimobola'
          date={new Date()}
        />
        <ThreadCard
          title='Without date'
          subtitle='Paramaribaladam Pirindirimobola'
        />
      </ul>
    </div>
  ))
