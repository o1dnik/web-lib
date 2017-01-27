import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Tag from './Tag';

const sizes = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge'
];

const colors = [
  'default',
  'primary',
  'light',
  'danger'
];

storiesOf('Tag', module)
  .add('Default', () => (
    <div>

      <div>
        <h4>Default</h4>
        <Tag>
          <span>Default</span>
        </Tag>
      </div>

      <div>
        <h4>Clickable</h4>
        <Tag onClick={action('clicked')}>
          <span>Clickable</span>
        </Tag>
      </div>

      <div>
        <h4>Sizes</h4>
        {
          sizes.map(s =>
            <Tag key={s} size={s}>
              <span>{s}</span>
            </Tag>
          )
        }
      </div>

      <div>
        <h4>Colors</h4>
        {
          colors.map(s =>
            <Tag key={s} color={s}>
              <span>{s}</span>
            </Tag>
          )
        }
      </div>

      <div>
        <h4>Bordered Colors</h4>
        {
          colors.map(s =>
            <Tag key={s} bordered color={s}>
              <span>{s}</span>
            </Tag>
          )
        }
      </div>

      <div>
        <h4>Extended</h4>
        <Tag extended>
          <span>Extended</span>
        </Tag>
      </div>

      <div>
        <h4>Disabled</h4>
        <Tag disabled onClick={action('clicked')}>
          <span>Disabled</span>
        </Tag>
      </div>

      <div>
        <h4>With icon</h4>
        <Tag>
          <i className='mb-ico-linkedin'/>
          With icon left
        </Tag>
        <Tag>
          <span>With icon right</span>
          <i className='mb-ico-arrow-button-next'/>
        </Tag>
        <Tag>
          <i className='mb-ico-burger'/>
        </Tag>
      </div>

      <div>
        <h4>With clickable children icon</h4>
        <Tag onClick={action('clicked')}>
          Clickable tag and icon
          <i className='mb-ico-plus' onClick={action('icon-clicked')}/>
        </Tag>
        <Tag>
          <span>Clickable only icon</span>
          <i className='mb-ico-cross' onClick={action('icon-clicked')}/>
        </Tag>
      </div>

    </div>
  ));
