import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import NewMessageForm from './index'

storiesOf('NewMessageForm', module)
  .add('Default', () => (
    <div>
      <div>
        <NewMessageForm
          value='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quae excepturi recusandae culpa iure aspernatur, explicabo repellat hic blanditiis provident veniam eius tempora doloribus dolorem quo, adipisci nulla, ut qui.'
          onSubmit={action('submit')}
          onChange={action('change')}
        />
      </div>
      <div>
        <NewMessageForm
          value='Lo'
          onSubmit={action('submit')}
          onChange={action('change')}
        />
      </div>
      <div>
        <NewMessageForm
          value='Lo'
          loading
          onSubmit={action('submit')}
          onChange={action('change')}
        />
      </div>
      <div>
        <NewMessageForm
          value='Lo'
          disabled
          onSubmit={action('submit')}
          onChange={action('change')}
        />
      </div>
    </div>
  ))
