import React from 'react'
import {storiesOf} from '@kadira/storybook'
import ProgressBar from './index'

const labelIntros =
  <div className='progressbar-label'>
    <span>Intros Left</span>
    <span>
      <span className='text-light'>50</span>
      <span>/80</span>
    </span>
  </div>

storiesOf('ProgressBar', module)
  .add('Default', () => (
    <div>
      <ProgressBar
        label={labelIntros}
        percent={50 * 100 / (80)}
        strokeWidth='2'
        trailWidth='2'
        strokeColor='#43b064'
        trailColor='#F1F1F1'
      />
      <ProgressBar
        percent={50 * 100 / (80)}
        strokeWidth='2'
        trailWidth='2'
        strokeColor='#43b064'
        trailColor='#F1F1F1'
      />
      <ProgressBar
        strokeWidth='2'
        trailWidth='2'
        strokeColor='#43b064'
        trailColor='#F1F1F1'
      />
    </div>
  ))
