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
  {value: 'copastor',       label: 'thermetrograph', isCategory: true},
  {value: 'cryoscopy',      label: 'uncharted'},
  {value: 'bullyrook',      label: 'urethratresia'},
  {value: 'thishow',        label: 'Sertulariidae'},
  {value: 'bite',           label: 'personalization'},
  {value: 'sharebroker',    label: 'Ganda',          isCategory: true},
  {value: 'toxihemia',      label: 'haplostemonous'},
  {value: 'brough',         label: 'amorphous'},
  {value: 'insinuant',      label: 'phosphoroscope'},
  {value: 'budget',         label: 'Mercatorial',    isCategory: true},
  {value: 'multituberculy', label: 'fossula'}
];
const tags = [
  {value: 'microanalyst', label: 'Aglossa'},
  {value: 'nine',         label: 'cretion'},
  {value: 'tailing',      label: 'Zoilean'}
];


storiesOf('Multiselect', module)
  .add('Default', () => (
    <div>
      <div>
        <Multiselect
          options={options}
          value={tags}
        />
      </div>
    </div>
  ))
  .add('states', () => {
    const selectLabel = <span
                          style={{color: 'red', textTransform: 'lowercase'}}
                        >Select label</span>;
    const tagsLabel = <span
                        style={{color: 'blue', textTransform: 'lowercase'}}
                      >Tags label</span>;
    return (
    <div>
      <div>
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
        <hr style={hrStyle}/>
        <Multiselect
          options={options}
          value={tags}
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
      <div>
        <hr style={hrStyle}/>
        <Multiselect
          options={options}
          value={tags}
          extended
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
    </div>
    );
  });