import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import TextareaInput from './index';

storiesOf('TextareaInput', module)
  .add('Default', () => (
    <div>
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
  ))
  .add('Success', () => (
    <div>
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
  ))
  .add('Error', () => (
    <div>
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
  ))
  .add('Ten rows long', () => (
    <div>
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
  ));
