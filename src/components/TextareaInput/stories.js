import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import TextareaInput from './index'

storiesOf('TextareaInput', module)
  .add('Default', () => (
    <div>

      <div>
        <h3>Untouched state</h3>
        <TextareaInput
          name='my-textarea'
          id='my-textarea'
          label='my-textarea'
          placeholder='my-textarea'
          onChange={e => action('change')(e, e.target.value, e.target.name)}
          onBlur={e => action('blur')(e, e.target.value, e.target.name)}
          onFocus={e => action('focus')(e, e.target.value, e.target.name)}
        />
      </div>

      <div>
        <h3>Success state</h3>
        <TextareaInput
          name='my-textarea'
          meta={{
            touched: true,
            valid: true
          }}
          id='my-textarea'
          label='my-textarea'
          placeholder='my-textarea'
          onChange={e => action('change')(e, e.target.value, e.target.name)}
          onBlur={e => action('blur')(e, e.target.value, e.target.name)}
          onFocus={e => action('focus')(e, e.target.value, e.target.name)}
        />
      </div>

      <div>
        <h3>Error state</h3>
        <TextareaInput
          name='my-textarea'
          meta={{
            touched: true,
            invalid: true,
            error: 'Error message'
          }}
          id='my-textarea'
          label='my-textarea'
          placeholder='my-textarea'
          onChange={e => action('change')(e, e.target.value, e.target.name)}
          onBlur={e => action('blur')(e, e.target.value, e.target.name)}
          onFocus={e => action('focus')(e, e.target.value, e.target.name)}
        />
      </div>

      <div>
        <h3>Ten rows long</h3>
        <TextareaInput
          name='my-textarea'
          id='my-textarea'
          label='my-textarea'
          placeholder='my-textarea'
          rows={10}
          onChange={e => action('change')(e, e.target.value, e.target.name)}
          onBlur={e => action('blur')(e, e.target.value, e.target.name)}
          onFocus={e => action('focus')(e, e.target.value, e.target.name)}
        />
      </div>

    </div>
  ))
