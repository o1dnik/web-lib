import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import Button from '../Button'
import ImageCropper from '../ImageCropper'
import browserImageSize from 'browser-image-size'
import {defineMessages} from 'react-intl'
import {
  IMG_UPLOAD_LIMIT,
  IMG_ACCEPTED_TYPES
} from '../../constants'

const messages = defineMessages({
  defaultError: {id: 'app.error.code.default_error'},
  unknownFormat: {id: 'app.alertbar.picture.unknown.format'},
  badSize: {id: 'app.alertbar.picture.bad.size'},
  badResolution: {id: 'app.alertbar.picture.bad.resolution'}
})

class FormImageUploader extends Component {
  static propTypes = {
    id: PropTypes.string,
    defaultImg: PropTypes.string,
    input: PropTypes.shape({
      name: PropTypes.string,
      onBlur: PropTypes.func,
      onChange: PropTypes.func,
      onDragStart: PropTypes.func,
      onDrop: PropTypes.func,
      onFocus: PropTypes.func,
      value: PropTypes.string
    }),
    meta: PropTypes.shape({
      active: PropTypes.bool,
      asyncValidating: PropTypes.bool,
      autofilled: PropTypes.bool,
      dirty: PropTypes.bool,
      dispatch: PropTypes.func,
      error: PropTypes.string,
      invalid: PropTypes.bool,
      pristine: PropTypes.bool,
      submitting: PropTypes.bool,
      touched: PropTypes.bool,
      valid: PropTypes.bool,
      visited: PropTypes.bool,
      warning: PropTypes.string
    }),
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    showAlertBar: PropTypes.func
  };

  static defaultProps = {
    meta: {},
    input: {}
  }

  state = {
    croppingImage: null
  }

  render () {
    const {
      id, input, meta, placeholder, wrapperClass,
      type, alt, width, className, defaultImg, closeButtonCopy, cropButtonCopy
    } = this.props

    const {croppingImage} = this.state
    const {error, invalid, touched} = meta

    const src = (croppingImage && croppingImage.preview) ||
      input.value || defaultImg

    const logoUploader =
      <div className={wrapperClass}>
        <div>
          {
            croppingImage
              ? (
                <ImageCropper
                  image={croppingImage.preview}
                  onCrop={this.handleCrop}
                  closeButtonCopy={closeButtonCopy}
                  cropButtonCopy={cropButtonCopy}
                  {...input}
                  placeholder={placeholder}
                  id={id}
                  type={type}
                  onCancel={this.handleCancelCrop} />
              )
              : (
                <Dropzone onDrop={this.handleUpload}
                  className='dropzone'
                  activeClassName='active'
                  rejectClassName='reject'
                  multiple={false}
                  maxSize={IMG_UPLOAD_LIMIT}
                  accept={IMG_ACCEPTED_TYPES}>
                  <div className='split-group'>
                    <div className='short'>
                      <img alt={alt}
                        src={src}
                        width={width}
                        className={className} />
                    </div>
                    {this.props.children ||
                    <div className='long'>
                      <Button size='small'>
                        Upload
                      </Button>
                    </div>}
                  </div>
                </Dropzone>
              )
          }
        </div>
      </div>

    return (
      <div className='input-icon-wrapper'>

        {logoUploader}

        <span>{touched && invalid && error}</span>
      </div>
    )
  }

  handleUpload = ([file], [reject], e) => {
    if (e) e.preventDefault()

    // show AlertBar if upload been rejected
    const {showAlertBar} = this.props

    if (!showAlertBar) {
      console.warn('FormImageUploader: props.showAlertBar is not defined!')
    }

    if (reject) {
      let message = messages.defaultError.id

      if (reject.size >= IMG_UPLOAD_LIMIT) {
        message = messages.badSize.id
      }

      if (!reject.type.includes('image')) {
        message = messages.unknownFormat.id
      }

      return showAlertBar({
        type: 'error',
        message
      })
    }

    if (!file) return

    // warn if width-height exceeds 200x200
    browserImageSize(file)
      .then((size) => {
        if (size.width < 200 || size.height < 200) {
          return showAlertBar({
            type: 'error',
            message: messages.badResolution,
            dismissAfter: 3000
          })
        }

        this.setState({croppingImage: file})
      })
  }

  handleCrop = (image) => {
    const {onChange} = this.props

    if (onChange) {
      onChange(image)
    }

    if (this.props.input.onChange) {
      this.props.input.onChange(image)
    }

    this.setState({croppingImage: null})
  }

  handleCancelCrop = () => {
    this.setState({croppingImage: null})
  }
}

export default FormImageUploader
