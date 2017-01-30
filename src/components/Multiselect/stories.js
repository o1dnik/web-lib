import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Multiselect from './index';

const hrStyle = {
  display: 'block',
  height: '3px',
  border: '0',
  borderTop: '3px solid #ccc',
  margin: '1em 0',
  padding: '0'
};

const options = [
  {value: 'copastor', label: 'thermetrograph', isCategory: true},
  {value: 'cryoscopy', label: 'uncharted'},
  {value: 'bullyrook', label: 'urethratresia'},
  {value: 'thishow', label: 'Sertulariidae'},
  {value: 'bite', label: 'personalization'},
  {value: 'sharebroker', label: 'Ganda', isCategory: true},
  {value: 'toxihemia', label: 'haplostemonous'},
  {value: 'brough', label: 'amorphous'},
  {value: 'insinuant', label: 'phosphoroscope'},
  {value: 'budget', label: 'Mercatorial', isCategory: true},
  {value: 'multituberculy', label: 'fossula'}
];
const tags = [
  {value: 'microanalyst', label: 'Aglossa'},
  {value: 'nine', label: 'cretion'},
  {value: 'tailing', label: 'Zoilean'}
];

const selectLabel = <span style={{color: 'red', textTransform: 'lowercase'}}>
  Select label
</span>;
const tagsLabel = <span style={{color: 'blue', textTransform: 'lowercase'}}>
  Tags label
</span>;

storiesOf('Multiselect', module)
  .add('Default', () => (
    <div>

      <div>
        <h4>Default</h4>
        <Multiselect
          options={options}
          value={[]}
        />
      </div>

      <div>
        <h4>Selected values</h4>
        <Multiselect
          options={options}
          value={tags}
        />
      </div>

      <div>
        <h4>With custom Label</h4>
        <Multiselect
          label='General Label'
          selectLabel={selectLabel}
          tagsLabel={tagsLabel}
          options={options}
          value={tags}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>

      <div>
        <h4>Success</h4>
        <hr style={hrStyle}/>
        <Multiselect
          options={options}
          value={tags}
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
        <hr style={hrStyle}/>
        <Multiselect
          options={options}
          value={tags}
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

    </div>
  ));
