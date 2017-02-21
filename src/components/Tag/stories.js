import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Tag from './index';

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
        <h4>Value Tag</h4>
        {
          sizes.map(s =>
            <Tag value key={s} size={s}>
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
        <h4>Extended with text and icon</h4>
        <Tag extended>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis consequatur excepturi exercitationem illum
            necessitatibus quis quisquam sint velit! Eaque nihil porro ratione.
            Impedit quaerat quidem sequi veniam veritatis! Culpa error numquam
            perferendis. A asperiores ducimus est nostrum sint temporibus
            voluptatibus. A animi, deserunt eius fugit ipsa minima pariatur
            quas ut.
          </span>
          <i className='ion-plus' onClick={action('icon-clicked')}/>
        </Tag>
      </div>

      <div>
        <div>
          <h4>Disabled</h4>
          <Tag disabled onClick={action('clicked')}>
            <span>Disabled</span>
          </Tag>
          <Tag disabled onClick={action('clicked')}>
            <span>Disabled With Icon</span>
            <i className='ion-close' onClick={action('icon-clicked')}/>
          </Tag>
        </div>
      </div>

      <div>
        <h4>With icon</h4>
        <Tag>
          <i className='ion-checkmark'/>
          With icon left
        </Tag>
        <Tag>
          <span>With icon right</span>
          <i className='ion-arrow-right-c'/>
        </Tag>
        <Tag>
          <i className='ion-navicon'/>
        </Tag>
      </div>

      <div>
        <h4>With clickable children icon</h4>
        <Tag onClick={action('clicked')}>
          Clickable tag and icon
          {Number(5)}
          {null}
          {undefined}
          <i className='ion-plus' onClick={action('icon-clicked')}/>
        </Tag>
        <Tag>
          <span>Clickable only icon</span>
          <i className='ion-close' onClick={action('icon-clicked')}/>
        </Tag>
      </div>

    </div>
  ));
