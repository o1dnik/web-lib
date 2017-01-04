import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import InputRange from './index';

storiesOf('InputRange', module)
  .add('Default', () => (
    <div>

      <div className='input-range-wraper'>
        <InputRange
          name='my-input-range'
          minValue={5}
          maxValue={15}
          step={1}
          value={9}
          onChange={(_, val) => action('change')(val)}
        />
      </div>

      <div className='input-range-wraper'>
        <InputRange
          name='my-input-range'
          minValue={5}
          maxValue={15}
          step={1}
          value={5}
          onChange={(_, val) => action('change')(val)}
        />
      </div>

      <div className='input-range-wraper'>
        <InputRange
          name='my-input-range'
          minValue={5}
          maxValue={15}
          step={1}
          value={15}
          onChange={(_, val) => action('change')(val)}
        />
      </div>

      <div className='input-range-wraper'>
        <InputRange
          name='my-input-range'
          minValue={5}
          maxValue={15}
          step={1}
          value={{min: 8, max: 10}}
          onChange={(_, val) => action('change')(val)}
        />
      </div>

    </div>
  ))
  .add('With Label', () => (
    <div>

      <div className='input-range-wraper'>
        <InputRange
          name='my-input-range'
          label='My range'
          additionalLabel='FROM-TO'
          minValue={5}
          maxValue={15}
          step={1}
          value={{min: 8, max: 10}}
          onChange={(_, val) => action('change')(val)}
        />
      </div>

    </div>
  ));