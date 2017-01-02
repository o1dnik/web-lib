import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import CheckboxGroup from './index';

const options1 = [
  {id: 0, label: 'Yes', checked: false},
  {id: 1, label: 'No',  checked: false}
];
const options2 = [
  {id: 0, label: 'horntip',        checked: false},
  {id: 1, label: 'lanuginousness', checked: true},
  {id: 2, label: 'outby',          checked: false},
  {id: 3, label: 'psychosarcous',  checked: false},
  {id: 4, label: 'Etheneldeli',    checked: false},
  {id: 5, label: 'fruitlet',       checked: false}
];
const options3 = [
  {id: 0, label: 'arrestor',    checked : false},
  {id: 1, label: 'roselet',     checked : true},
  {id: 2, label: 'nonthinking', checked : false},
  {id: 3, label: 'triturate',   checked : false}
];

storiesOf('CheckboxGroup', module)
  .add('Default', () => (
    <CheckboxGroup
      options={options1}
      onChange={action('changed')} />
  ))
  .add('states', () => (
    <div>
      <div>
        <CheckboxGroup
          options={options1}
          onChange={action('changed')}
        />
      </div>
      <div>
        <CheckboxGroup
          options={options3}
          onChange={action('changed')}
        />
      </div>
      <div>
        <CheckboxGroup
          options={options2}
          max={2}
          onChange={action('changed')}
        />
      </div>
    </div>
  ));