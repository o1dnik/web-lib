import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Tooltip from './index'
import Tag from '../Tag'

storiesOf('Tooltip', module)
  .add('Default', () => (
    <div style={{padding: '50px'}}>
      <Tag color='primary' data-tip='hello world'>Tooltip</Tag>
      <Tooltip effect='solid' />

      <Tag data-tip='hello world2'>Tooltip</Tag>
      <Tooltip effect='solid' />
    </div>
  ))
