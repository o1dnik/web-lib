import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Tag from './index';

storiesOf('Tag', module)
  .add('Default', () => (
    <Tag label='Label' id={0} />
  ))
  .add('states', () => (
    <div>
      <div>
        <Tag label='default'
             id={1}
             onClick={action('clicked')}
             onClose={action('closed')}/>
      </div>
      <div>
        <Tag label='Disabled'
             id={3}
             disabled
             onClose={action('closed')}/>
      </div>
      <div>
        <Tag label='Extended via props'
             id={4}
             extended
             onClick={action('clicked')}
             onClose={action('closed')}/>
      </div>
      <div>
        <Tag label='Extended via className'
             id={4}
             className='extended'
             onClick={action('clicked')}
             onClose={action('closed')}/>
      </div>
      <div>
        <Tag label='Clickable'
             id={4}
             onClick={action('clicked')}
             onClose={action('closed')}/>
      </div>
      <div>
        <Tag label='not Clickable' id={4} />
      </div>
    </div>
  ))
  .add('style/types', () => (
    <div>
      <span>With close button & actions</span>
      <div>
        <Tag label='active'
             id={5}
             type='active'
             onClick={action('clicked')}
             onClose={action('closed')}/>
      </div>
      <div>
        <Tag label='pending'
             id={5}
             type='pending'
             onClick={action('clicked')}
             onClose={action('closed')}/>
      </div>
      <div>
        <Tag label='default'
             id={5}
             type='default'
             onClick={action('clicked')}
             onClose={action('closed')}/>
      </div>
      <span>Without close button & not clickable (no actions)</span>
      <div>
        <Tag label='active'
             id={5}
             type='active'/>
      </div>
      <div>
        <Tag label='pending'
             id={5}
             type='pending'/>
      </div>
      <div>
        <Tag label='default'
             id={5}
             type='default'/>
      </div>
    </div>
  ))
  .add('close icons', () => (
    <div>
      <div>
        <Tag label='Default'
             id={5}
             onClick={action('clicked')}
             onClose={action('closed')}/>
      </div>
      <div>
        <Tag label='No close icon'
             id={6}
             onClick={action('clicked')}
             onClose={action('closed')}
             hideClose/>
      </div>
      <div>
        <Tag label='Custom close icon'
             id={7}
             onClick={action('clicked')}
             onClose={action('closed')}
             closeIcon={'★'}/>
      </div>
    </div>
  ));