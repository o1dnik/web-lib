import React from 'react';
import {storiesOf} from '@kadira/storybook';
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
        <Select options={options} />
      </div>
    </div>
  ))
  .add('With selected value', () => (
    <div>
      <div>
        <Select label='input #1' options={options} value='antioxygenic' />
      </div>
      <div>
        <Select label='input #2' options={options} value='exendospermic'
          noArrow />
      </div>
      <div>
        <Select options={options} value='respirability'
          arrowRenderer={() => 'CustomArrow'} />
      </div>
      <div>
        <Select options={options} value='polyspermal'
          clearIconHTML='<i class="mb-icons-checkmark"></i>' />
      </div>
    </div>
  ))
  .add('States & Props', () => (
    <div>
      <div>
        <Select label='Multi' options={options} multi />
      </div>
      <div>
        <Select label='disabled' options={options} disabled />
      </div>
      <div>
        <Select label='not clearable' options={options} value='Primates' clearable={false} />
      </div>
      <div>
        <Select label='not searchable' options={options} searchable={false} />
      </div>
      <div>
        <Select label='loading' options={options} isLoading disabled />
      </div>
    </div>
  ))
  .add('searching props', () => (
    <div>
      <div>
        <Select label='Match on beginning (type g)' options={options} matchPos='start' />
      </div>
      <div>
        <Select label='Match on any (type g)' options={options} matchPos='any' />
      </div>
      <div>
        <Select label='Match by label (type g)' options={options} matchProp='label' />
      </div>
      <div>
        <Select label='Match by value (type g)' options={options} matchProp='value' />
      </div>
      <div>
        <Select label='Match by any (type g)' options={options} matchProp='any' />
      </div>
    </div>
  ));