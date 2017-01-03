import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import CheckboxGroup from './index';

const options1 = [
  {value: '0', label: 'Yes'},
  {value: '1', label: 'No'}
];

const value1 = [
  {value: '0', label: 'Yes'}
];

const options2 = [
  {value: '0', label: 'horntip'},
  {value: '1', label: 'lanuginousness'},
  {value: '2', label: 'outby'},
  {value: '3', label: 'psychosarcous'},
  {value: '4', label: 'Etheneldeli'},
  {value: '5', label: 'fruitlet'}
];

const value2 = [
  {value: '0', label: 'horntip'},
  {value: '1', label: 'lanuginousness'}
];

const options3 = [
  {value: '0', label: 'arrestor'},
  {value: '1', label: 'roselet'},
  {value: '2', label: 'nonthinking'},
  {value: '3', label: 'triturate'}
];

const value3 = [
  {value: '0', label: 'arrestor'},
  {value: '1', label: 'roselet'}
];

storiesOf('CheckboxGroup', module)
  .add('Default', () => (
    <CheckboxGroup
      options={options1}
      value={value1}
      onChange={action('changed')}/>
  ))
  .add('With Label', () => (
    <div>
      <div>
        <CheckboxGroup
          label='My group'
          options={options1}
          value={value1}
          onChange={action('changed')}
        />
      </div>
      <div>
        <CheckboxGroup
          label='My second group'
          options={options3}
          value={value3}
          onChange={action('changed')}
        />
      </div>
      <div>
        <CheckboxGroup
          label='My another group'
          options={options2}
          value={value2}
          onChange={action('changed')}
        />
      </div>
    </div>
  ))
  .add('Validation States', () => (
    <div>
      <div>
        <CheckboxGroup
          label='My group'
          options={options1}
          value={value1}
          onChange={action('changed')}
        />
      </div>
      <div>
        <CheckboxGroup
          label='My error group'
          options={options3}
          value={value3}
          meta={{
            touched: true,
            invalid: true,
            error: 'My error message'
          }}
          onChange={action('changed')}
        />
      </div>
      <div>
        <CheckboxGroup
          label='My success group'
          options={options2}
          value={value2}
          meta={{
            touched: true,
            valid: true
          }}
          onChange={action('changed')}
        />
      </div>
    </div>
  ));