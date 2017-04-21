import React from 'react'
import {storiesOf, action} from '@kadira/storybook'
import Multiselect from './index'

const hrStyle = {
  display: 'block',
  height: '3px',
  border: '0',
  borderTop: '3px solid #ccc',
  margin: '1em 0',
  padding: '0'
}

const options = [
  {id: 'copastor', name: 'thermetrograph'},
  {id: 'cryoscopy', name: 'uncharted'},
  {id: 'bullyrook', name: 'urethratresia'},
  {id: 'thishow', name: 'Sertulariidae'},
  {id: 'bite', name: 'personalization'},
  {id: 'sharebroker', name: 'Ganda'},
  {id: 'toxihemia', name: 'haplostemonous'},
  {id: 'brough', name: 'amorphous'},
  {id: 'insinuant', name: 'phosphoroscope'},
  {id: 'budget', name: 'Mercatorial'},
  {id: 'multituberculy', name: 'fossula'}
]
const selectedValues = [
  'multituberculy',
  'budget',
  'insinuant'
]

const selectLabel = <span style={{color: 'red', textTransform: 'lowercase'}}>
  Select label
</span>

storiesOf('Multiselect', module)
  .add('Default', () => (
    <div>

      <div>
        <h4>Default</h4>
        <Multiselect
          selectProps={{
            options,
            onInputChange: action('onInputChange')
          }}
          valueKey='id'
          labelKey='name'
          value={[]}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>

      <div>
        <h4>Selected values</h4>
        <Multiselect
          selectProps={{
            options,
            onInputChange: action('onInputChange')
          }}
          valueKey='id'
          labelKey='name'
          value={selectedValues}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>

      <div>
        <h4>Simple Value</h4>
        <Multiselect
          selectProps={{
            options,
            onInputChange: action('onInputChange')
          }}
          valueKey='id'
          labelKey='name'
          simpleValue
          value={selectedValues}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>

      <div>
        <h4>With custom Label</h4>
        <Multiselect
          label='General Label'
          selectProps={{
            label: selectLabel,
            options,
            onInputChange: action('onInputChange')
          }}
          valueKey='id'
          labelKey='name'
          value={selectedValues}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>

      <div>
        <h4>Success</h4>
        <hr style={hrStyle} />
        <Multiselect
          selectProps={{
            options,
            onInputChange: action('onInputChange')
          }}
          valueKey='id'
          labelKey='name'
          value={selectedValues}
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
        <hr style={hrStyle} />
        <Multiselect
          selectProps={{
            options,
            onInputChange: action('onInputChange')
          }}
          valueKey='id'
          labelKey='name'
          value={selectedValues}
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
        <h4>ReadOnly</h4>
        <hr style={hrStyle} />
        <Multiselect
          selectProps={{
            options,
            onInputChange: action('onInputChange')
          }}
          valueKey='id'
          labelKey='name'
          value={selectedValues}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
          disabled
          meta={{
            touched: true,
            invalid: true,
            error: 'My error message'
          }}
        />
      </div>

      <div>
        <h4>Redux form</h4>
        <hr style={hrStyle} />
        <Multiselect
          selectProps={{
            options,
            onInputChange: action('onInputChange')
          }}
          valueKey='id'
          labelKey='name'
          input={{
            value: selectedValues,
            onChange: action('onChange'),
            onFocus: action('onFocus'),
            onBlur: action('onBlur')
          }}
          meta={{
            touched: true,
            invalid: true,
            error: 'My error message'
          }}
        />
      </div>

    </div>
  ))
