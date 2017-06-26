import React from 'react'
import {storiesOf} from '@storybook/react'
import FontLoader from './index'

const sizes = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge'
]

storiesOf('FontLoader', module)
  .add('Default', () => (
    <div>

      {sizes.map(s =>
        <div key={s}>
          <FontLoader size={s} />
        </div>
      )}

    </div>
  ))
