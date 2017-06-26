import React from 'react'
import {storiesOf, action} from '@storybook/react'
import Input from './index'

storiesOf('Input', module)
  .add('Default', () => (
    <div>
      <div>
        <h3>Untouched state</h3>
        <Input
          name='my-input'
          id='my-input'
          label='my-input'
          placeholder='my-input'
          type='text'
          onChange={(e) => action('change')(e, e.target.value, e.target.name)}
        />
      </div>
      <div>
        <h3>Success state</h3>
        <Input
          name='my-input'
          meta={{
            touched: true,
            valid: true
          }}
          id='my-input'
          label='my-input'
          placeholder='my-input'
          type='text'
          onChange={(e) => action('change')(e, e.target.value, e.target.name)}
        />
      </div>
      <div>
        <h3>Error state</h3>
        <Input
          name='my-input'
          meta={{
            touched: true,
            invalid: true,
            error: 'My error message'
          }}
          id='my-input'
          label='my-input'
          placeholder='my-input'
          type='text'
          onChange={(e) => action('change')(e, e.target.value, e.target.name)}
        />
      </div>
    </div>
  ))
