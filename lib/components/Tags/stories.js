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
  {id: 1, label: 'derm'},
  {id: 2, label: 'unwitty'}
];

storiesOf('Tags', module)
  .add('Default', () => (
    <Tags tags={tags1} />
  ))
  .add('styles', () => (
    <div>
      <div>
        <Tags tags={tags1} active={false}
          onClick={action('clicked')}
          onClose={action('closed')}
        />
      </div>
      <div>
        <Tags tags={tags2} long
          onClick={action('clicked')}
          onClose={action('closed')}
        />
      </div>
    </div>
  ));