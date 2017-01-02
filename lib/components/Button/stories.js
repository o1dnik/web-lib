import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Button from './index';

storiesOf('Button', module)
  .add('Default', () => (
    <Button onClick={action('clicked')}>Default</Button>
  ))
  .add('states', () => (
    <div>
      <div>
        <Button disabled onClick={action('clicked')}>Disabled</Button>
      </div>
      <div>
        <Button loading onClick={action('clicked')}>Loading</Button>
      </div>
    </div>
  ))
  .add('sizes', () => (
    <div>
      <div>
        <Button size='small' onClick={action('clicked')}>small</Button>
      </div>
      <div>
        <Button size='large' onClick={action('clicked')}>large</Button>
      </div>
      <div>
        <Button size='xlarge' onClick={action('clicked')}>xlarge</Button>
      </div>
      <div>
        <Button extended onClick={action('clicked')}>extended</Button>
      </div>
    </div>
  ))
  .add('colors', () => (
    <div>
      <div>
        <Button color='green' onClick={action('clicked')}>green</Button>
      </div>
      <div>
        <Button color='red' onClick={action('clicked')}>red</Button>
      </div>
      <div>
        <Button color='ln' onClick={action('clicked')}>ln</Button>
      </div>
      <div>
        <Button color='fb' onClick={action('clicked')}>fb</Button>
      </div>
      <div>
        <Button color='tw' onClick={action('clicked')}>tw</Button>
      </div>
      <div>
        <Button color='white' onClick={action('clicked')}>white</Button>
      </div>
      <div>
        <Button color='danger' onClick={action('clicked')}>danger</Button>
      </div>
    </div>
  ));