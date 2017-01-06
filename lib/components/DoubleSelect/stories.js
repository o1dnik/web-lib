import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import DoubleSelect from './index';

const langLevels = [
  {value: '0', label: 'A1'},
  {value: '1', label: 'A2'},
  {value: '2', label: 'B1'},
  {value: '3', label: 'B2'},
  {value: '4', label: 'C1'},
  {value: '5', label: 'C2'},
  {value: '6', label: 'Native'}
];
const langs = [
  {value: '40', label: 'English'},
  {value: '51', label: 'German'},
  {value: '148', label: 'Spanish'},
  {value: '47', label: 'French'},
  {value: '128', label: 'Portuguese'},
  {value: '70', label: 'Italian'},
  {value: '133', label: 'Russian'},
  {value: '7', label: 'Arabic'},
  {value: '72', label: 'Japanese'},
  {value: '59', label: 'Hindi'},
  {value: '20', label: 'Chineese'}
];

storiesOf('DoubleSelect', module)
  .add('Default', () => (
    <div>
      <DoubleSelect
        label='JOB DESTIGATION'
        subLabel='SUB LABEL YEARS OF EXPERIENCE'
        onRemove={action('remove')}
        onChange={action('change')}
        onFocus={action('focus')}
        onBlur={action('blur')}
        value={{}}
        selectOptions={langs}
        levelOptions={langLevels}
      />
    </div>
  ))
  .add('With selected values', () => (
    <div>
      <DoubleSelect
        label='JOB DESTIGATION'
        subLabel='SUB LABEL YEARS OF EXPERIENCE'
        onRemove={action('remove')}
        onChange={action('change')}
        onFocus={action('focus')}
        onBlur={action('blur')}
        value={{
          select: '148',
          level: '2'
        }}
        selectOptions={langs}
        levelOptions={langLevels}
      />
    </div>
  ))
  .add('Success', () => (
    <div>
      <DoubleSelect
        label='JOB DESTIGATION'
        subLabel='SUB LABEL YEARS OF EXPERIENCE'
        onRemove={action('remove')}
        onChange={action('change')}
        onFocus={action('focus')}
        onBlur={action('blur')}
        value={{
          select: '47',
          level: '2'
        }}
        meta={{
          touched: true,
          valid: true
        }}
        selectOptions={langs}
        levelOptions={langLevels}
      />
    </div>
  ))
  .add('Error', () => (
    <div>
      <DoubleSelect
        label='JOB DESTIGATION'
        subLabel='SUB LABEL YEARS OF EXPERIENCE'
        onRemove={action('remove')}
        onChange={action('change')}
        onFocus={action('focus')}
        onBlur={action('blur')}
        value={{
          select: '72',
          level: '2'
        }}
        meta={{
          touched: true,
          invalid: true,
          error: 'My error message'
        }}
        selectOptions={langs}
        levelOptions={langLevels}
      />
    </div>
  ));
