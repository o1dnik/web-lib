import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Button from './index';

const sizes = [
  'mini',
  'tiny',
  'small',
  'medium',
  'large',
  'big',
  'huge',
  'massive'
];

const colors = [
  'default',
  'primary',
  'success',
  'danger',
  'fb',
  'tw'
];

storiesOf('Button', module)
  .add('Default', () => (
    <div>

      <div>
        <h4>Default</h4>
        <Button onClick={action('clicked')}>
          <span>Default</span>
        </Button>
      </div>


      <div>
        <h4>Sizes</h4>
        {
          sizes.map(s =>
            <Button size={s} onClick={action('clicked')}>
              <span>{s}</span>
            </Button>
          )
        }
      </div>


      <div>
        <h4>Colors</h4>
        {
          colors.map(s =>
            <Button color={s} onClick={action('clicked')}>
              <span>{s}</span>
            </Button>
          )
        }
      </div>

      <div>
        <h4>Outline Colors</h4>
        {
          colors.map(s =>
            <Button outline color={s} onClick={action('clicked')}>
              <span>{s}</span>
            </Button>
          )
        }
      </div>

      <div>
        <h4>Extended</h4>
        <Button extended onClick={action('clicked')}>
          <span>Extended</span>
        </Button>
      </div>

      <div>
        <h4>Disabled</h4>
        <Button disabled onClick={action('clicked')}>
          <span>Disabled</span>
        </Button>
      </div>

      <div>
        <h4>Loading</h4>
        {
          sizes.map(s =>
            <Button loading size={s} onClick={action('clicked')}>
              <span>Loading {s}</span>
            </Button>
          )
        }
      </div>

      <div>
        <h4>As Link</h4>
        <Button href='google.ru' onClick={action('clicked')}>
          <span>As Link</span>
        </Button>
      </div>

      <div>
        <h4>With icon</h4>
        <Button onClick={action('clicked')}>
          <i className='mb-ico-linkedin'/>
          <span>With icon left</span>
        </Button>
        <Button onClick={action('clicked')}>
          <span>With icon right</span>
          <i className='mb-ico-arrow-button-next'/>
        </Button>
      </div>

    </div>
  ));
