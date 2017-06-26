import React from 'react'
import {storiesOf} from '@storybook/react'
import ImageUploader from './index'

storiesOf('FormImageUploader', module)
  .add('Default', () => (
    <div>

      <h1>Image Uploader</h1>

      <ImageUploader />

    </div>
  ))
