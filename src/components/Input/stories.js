import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Input from './index';

storiesOf('Input', module)
  .add('Default', () => (
    <div>
      <Input
        name='my-input'
        id='my-input'
        label='my-input'
        placeholder='my-input'
        type='text'
        onChange={(e) => action('change')(e, e.target.value, e.target.name)}
      />
    </div>
  ))
  .add('Success', () => (
    <div>
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
  ))
  .add('Error', () => (
    <div>
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
  ));