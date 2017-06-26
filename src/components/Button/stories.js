import React from 'react'
import {storiesOf, action} from '@storybook/react'
import Button from './index'

const sizes = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge'
]

const colors = [
  'default',
  'primary',
  'light',
  'danger',
  'fb',
  'tw',
  'ln'
]

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
            <Button key={s} size={s} onClick={action('clicked')}>
              <span>{s}</span>
            </Button>
          )
        }
      </div>

      <div>
        <h4>Colors</h4>
        {
          colors.map(s =>
            <Button key={s} color={s} onClick={action('clicked')}>
              <span>{s}</span>
            </Button>
          )
        }
      </div>

      <div>
        <h4>Outline Colors</h4>
        {
          colors.map(s =>
            <Button key={s} outline color={s} onClick={action('clicked')}>
              <span>{s}</span>
            </Button>
          )
        }
      </div>

      <div>
        <h4>Outline ColorsOutline ColorsOutline ColorsOutline ColorsOutline Colors</h4>
        {
          colors.map(s =>
            <Button key={s} outline disabled color={s} onClick={action('clicked')}>
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
        <h4>Extended with icon spread out</h4>
        <Button extended apart onClick={action('clicked')}>
          <span>Spread out</span>
          <i className='ion-close-round' />
        </Button>
      </div>

      <div>
        <h4>Disabled</h4>
        {
          colors.map(s =>
            <Button key={s} disabled color={s} onClick={action('clicked')}>
              <span>{s}</span>
            </Button>
          )
        }
      </div>

      <div>
        <h4>Loading</h4>
        {
          sizes.map(s =>
            <Button key={s} loading size={s} onClick={action('clicked')}>
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
        <h4>As Custom Element</h4>
        <Button as='div' onClick={action('clicked')}>
          <span>As Link</span>
        </Button>
      </div>

      <div>
        <h4>Rounded</h4>
        <Button rounded onClick={action('clicked')}>
          <span>Rounded</span>
        </Button>
        <Button rounded onClick={action('clicked')}>
          <i className='ion-heart' />
        </Button>
      </div>

      <div>
        <h4>With icon</h4>
        <Button onClick={action('clicked')}>
          <i className='ion-social-linkedin' />
          With icon left
        </Button>
        <Button onClick={action('clicked')}>
          <span>With icon right</span>
          <i className='ion-arrow-right-c' />
        </Button>
        <Button onClick={action('clicked')}>
          <i className='ion-navicon' />
        </Button>
      </div>

    </div>
  ))
