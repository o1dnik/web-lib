import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Select from './index';

const options = [
  {value: 'saraad',        label: 'anorthosite', isCategory: true},
  {value: 'galant',        label: 'aglobulia'},
  {value: 'biseriately',   label: 'chargeman'},
  {value: 'antioxygenic',  label: 'gaggle'},
  {value: 'exendospermic', label: 'renter'},
  {value: 'chordacentrum', label: 'untrashed',   isCategory: true},
  {value: 'polyspermal',   label: 'beclart'},
  {value: 'paiwari',       label: 'bibitory'},
  {value: 'respirability', label: 'photodynamics'},
  {value: 'unmeetly',      label: 'overobese',   isCategory: true},
  {value: 'Primates',      label: 'anthropodeoxycholic'}
];

storiesOf('Select', module)
  .add('Default', () => (
    <div>
      <div>
        <Select
          options={options}
          onChange={action('onChange')}
          onSelect={action('onSelect')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
    </div>
  ))
  .add('With selected value', () => (
    <div>
      <div>
        <Select
          label='input #1'
          value='antioxygenic'
          options={options}
          onChange={action('onChange')}
          onSelect={action('onSelect')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
      <div>
        <Select
          label='input #2'
          value='exendospermic'
          noArrow
          options={options}
          onChange={action('onChange')}
          onSelect={action('onSelect')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
      <div>
        <Select
          value='respirability'
          arrowRenderer={() => 'CustomArrow'}
          options={options}
          onChange={action('onChange')}
          onSelect={action('onSelect')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
      <div>
        <Select
          value='polyspermal'
          clearIconHTML='<i class="mb-icons-checkmark"></i>'
          options={options}
          onChange={action('onChange')}
          onSelect={action('onSelect')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
    </div>
  ))
  .add('States & Props', () => (
    <div>
      <div>
        <Select
          label='Multi'
          multi
          options={options}
          onChange={action('onChange')}
          onSelect={action('onSelect')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
      <div>
        <Select
          label='disabled'
          disabled
          options={options}
          onChange={action('onChange')}
          onSelect={action('onSelect')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
      <div>
        <Select
          label='not clearable'
          value='Primates'
          clearable={false}
          options={options}
          onChange={action('onChange')}
          onSelect={action('onSelect')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
      <div>
        <Select
          label='not searchable'
          searchable={false}
          options={options}
          onChange={action('onChange')}
          onSelect={action('onSelect')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
      <div>
        <Select
          label='loading'
          isLoading
          disabled
          options={options}
          onChange={action('onChange')}
          onSelect={action('onSelect')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
    </div>
  ))
  .add('searching props', () => (
    <div>
      <div>
        <Select
          label='Match on beginning (type g)'
          matchPos='start'
          options={options}
          onChange={action('onChange')}
          onSelect={action('onSelect')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
      <div>
        <Select
          label='Match on any (type g)'
          matchPos='any'
          options={options}
          onChange={action('onChange')}
          onSelect={action('onSelect')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
      <div>
        <Select
          label='Match by label (type g)'
          matchProp='label'
          options={options}
          onChange={action('onChange')}
          onSelect={action('onSelect')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
      <div>
        <Select
          label='Match by value (type g)'
          matchProp='value'
          options={options}
          onChange={action('onChange')}
          onSelect={action('onSelect')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
      <div>
        <Select
          label='Match by label AND value (type g)'
          matchProp='any'
          options={options}
          onChange={action('onChange')}
          onSelect={action('onSelect')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
    </div>
  ));