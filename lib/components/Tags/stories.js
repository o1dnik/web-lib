import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Tags from './index';

const tags1 = [
  {id: 0, label: 'neuropodium'},
  {id: 1, label: 'knowledgeably'},
  {id: 2, label: 'terminist'},
  {id: 3, label: 'prepartition'}
];
const tags2 = [
  {id: 0, label: 'Stymphalid'},
  {id: 1, label: 'derm'}
];
const tags3 = [
  {id: 0, label: 'sulfureous'},
  {id: 1, label: 'pupulo'},
  {id: 2, label: 'locule'},
  {id: 3, label: 'snappable'},
  {id: 4, label: 'hypaethron'}
];

storiesOf('Tags', module)
  .add('Default', () => (
    <Tags tags={tags1} />
  ))
  .add('styles', () => (
    <div>
      <div>
        <Tags tags={tags1} inactive
          onClick={action('clicked')}
          onClose={action('closed')}
        />
      </div>
      <div>
        <Tags tags={tags2} extended
          onClick={action('clicked')}
          onClose={action('closed')}
        />
      </div>
      <div>
        <Tags tags={tags3} inactive />
      </div>
    </div>
  ));