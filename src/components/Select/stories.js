import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Select from './index'

const options = [
  {value: 'saraad', label: 'anorthosite', isCategory: true},
  {value: 'galant', label: 'aglobulia'},
  {value: 'biseriately', label: 'chargeman'},
  {value: 'antioxygenic', label: 'gaggle'},
  {value: 'exendospermic', label: 'renter'},
  {value: 'chordacentrum', label: 'untrashed', isCategory: true},
  {value: 'polyspermal', label: 'beclart'},
  {value: 'paiwari', label: 'bibitory'},
  {value: 'respirability', label: 'photodynamics'},
  {value: 'unmeetly', label: 'overobese', isCategory: true},
  {value: 'Primates', label: 'anthropodeoxycholic'}
]

storiesOf('Select', module)
  .add('Default', () => (
    <div>

      <div>
        <h4>Default</h4>
        <Select
          options={options}
          onInputChange={action('onInputChange')}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>

      <div>
        <h4>Success</h4>
        <Select
          options={options}
          onInputChange={action('onInputChange')}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
          meta={{
            touched: true,
            valid: true
          }}
        />
      </div>

      <div>
        <h4>Error</h4>
        <Select
          options={options}
          onInputChange={action('onInputChange')}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
          meta={{
            touched: true,
            invalid: true,
            error: 'My error message'
          }}
        />
      </div>

      <div>
        <h4>With Value</h4>
        <Select
          label='input #1'
          value='antioxygenic'
          options={options}
          onInputChange={action('onInputChange')}
          onChange={action('onChange')}
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
          onInputChange={action('onInputChange')}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
      <div>
        <Select
          value='respirability'
          arrowRenderer={() => 'CustomArrow'}
          options={options}
          onInputChange={action('onInputChange')}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
      <div>
        <Select
          value='polyspermal'
          clearIconHTML='<i class="mb-icons-checkmark"></i>'
          options={options}
          onInputChange={action('onInputChange')}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>

      <div>
        <h4>Multi</h4>
        <Select
          label='Multi'
          multi
          options={options}
          onInputChange={action('onInputChange')}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
      <div>
        <h4>Disabled</h4>
        <Select
          label='disabled'
          disabled
          options={options}
          onInputChange={action('onInputChange')}
          onChange={action('onChange')}
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
          onInputChange={action('onInputChange')}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
      <div>
        <Select
          label='not searchable'
          searchable={false}
          options={options}
          onInputChange={action('onInputChange')}
          onChange={action('onChange')}
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
          onInputChange={action('onInputChange')}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>

      <div>
        <Select
          label='Match on beginning (type g)'
          matchPos='start'
          options={options}
          onInputChange={action('onInputChange')}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
      <div>
        <Select
          label='Match on any (type g)'
          matchPos='any'
          options={options}
          onInputChange={action('onInputChange')}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
      <div>
        <Select
          label='Match by label (type g)'
          matchProp='label'
          options={options}
          onInputChange={action('onInputChange')}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
      <div>
        <Select
          label='Match by value (type g)'
          matchProp='value'
          options={options}
          onInputChange={action('onInputChange')}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
      <div>
        <Select
          label='Match by label AND value (type g)'
          matchProp='any'
          options={options}
          onInputChange={action('onInputChange')}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>

    </div>
  ))
