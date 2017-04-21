/**
 * Inspired by:
 * http://dropsofserenity.github.io/react-avatar-cropper/
 * https://github.com/DropsOfSerenity/react-avatar-cropper/
 */
import React, {Component, PropTypes} from 'react'
import isDataURI from 'validator/lib/isDataURI'

export class ImageCropper extends Component {
  static propTypes = {
    image: React.PropTypes.string.isRequired,
    onCrop: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func,
    closeButtonCopy: React.PropTypes.string,
    cropButtonCopy: React.PropTypes.string,
    // width: numberableType,
    // height: : numberableType,
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
      // PropTypes.inctanceOf(Component),
    ]),
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
      // PropTypes.inctanceOf(Component),
    ])
  };

  static defaultProps = {
    canvasWidth: 150,
    canvasHeight: 150,
    closeButtonCopy: 'Cancel',
    cropButtonCopy: 'Crop and Save'
  };

  state = {
    dragging: false,
    image: {},
    mouse: {x: null, y: null},
    preview: null,
    zoom: 1
  }

  listeners = []

  componentDidMount () {
    const canvas = this.canvas

    this.prepareImage(this.props.image)

    this.listeners = {
      mousemove: e => this.mouseMoveListener(e),
      mouseup: e => this.mouseUpListener(e),
      mousedown: e => this.mouseDownListener(e)
    }

    window.addEventListener('mousemove', this.listeners.mousemove, false)
    window.addEventListener('mouseup', this.listeners.mouseup, false)
    canvas.addEventListener('mousedown', this.listeners.mousedown, false)
    document.onselectstart = e => this.preventSelection(e)
  }

  componentDidUpdate () {
    const context = this.canvas.getContext('2d')
    context.clearRect(0, 0, this.props.canvasWidth, this.props.canvasHeight)
    this.addImageToCanvas(context, this.state.image)
  }

  // make sure we clean up listeners when unmounted.
  componentWillUnmount () {
    const canvas = this.canvas
    window.removeEventListener('mousemove', this.listeners.mousemove)
    window.removeEventListener('mouseup', this.listeners.mouseup)
    canvas.removeEventListener('mousedown', this.listeners.mousedown)
  }

  fitImageToCanvas (canvasWidth, canvasHeight) {
    let scaledHeight, scaledWidth

    const canvasAspectRatio = this.props.canvasHeight / this.props.canvasWidth
    const imageAspectRatio = canvasHeight / canvasWidth

    if (canvasAspectRatio > imageAspectRatio) {
      scaledHeight = this.props.canvasHeight
      const scaleRatio = scaledHeight / canvasHeight
      scaledWidth = canvasWidth * scaleRatio
    } else {
      scaledWidth = this.props.canvasWidth
      const scaleRatio = scaledWidth / canvasWidth
      scaledHeight = canvasHeight * scaleRatio
    }

    return {width: scaledWidth, height: scaledHeight}
  }

  prepareImage (imageUri) {
    const img = new window.Image()

    if (!isDataURI(imageUri)) img.crossOrigin = 'anonymous'

    img.onload = () => {
      const scaledImage = this.fitImageToCanvas(img.width, img.height)
      scaledImage.resource = img
      scaledImage.x = 0
      scaledImage.y = 0
      this.setState({
        dragging: false,
        image: scaledImage,
        preview: this.toDataURL()
      })
    }

    img.src = imageUri
  }

  mouseDownListener () {
    this.setState({
      image: this.state.image,
      dragging: true,
      mouse: {x: null, y: null}
    })
  }

  preventSelection (e) {
    if (this.state.dragging) {
      e.preventDefault()
      return false
    }
  }

  mouseUpListener () {
    this.setState({dragging: false, preview: this.toDataURL()})
  }

  mouseMoveListener (e) {
    const {image, mouse, dragging} = this.state

    if (!dragging) return

    const mouseX = e.clientX
    const mouseY = e.clientY
    const newImage = image

    if (mouse.x && mouse.y) {
      const dx = mouse.x - mouseX
      const dy = mouse.y - mouseY

      const {x, y} = this.boundedCoords(image.x, image.y, dx, dy)

      newImage.x = x
      newImage.y = y
    }

    this.setState({
      image: this.state.image,
      mouse: {x: mouseX, y: mouseY}
    })
  }

  boundedCoords (x, y, dx, dy) {
    const newX = x - dx
    const newY = y - dy

    const scaledWidth = this.state.image.width * this.state.zoom
    const dw = (scaledWidth - this.state.image.width) / 2
    // const imageLeftEdge = this.state.image.x - dw;
    // const imageRightEdge = (imageLeftEdge + scaledWidth);

    const rightEdge = this.props.canvasWidth
    // const leftEdge = 0;

    if (newX - dw > 0) {
      x = dw
    } else if (newX < (-scaledWidth + rightEdge)) {
      x = rightEdge - scaledWidth
    } else {
      x = newX
    }

    const scaledHeight = this.state.image.height * this.state.zoom
    const dh = (scaledHeight - this.state.image.height) / 2
    // const imageTopEdge = this.state.image.y - dh;
    // const imageBottomEdge = imageTopEdge + scaledHeight;

    const bottomEdge = this.props.canvasHeight
    // const topEdge = 0;

    if (newY - dh > 0) {
      y = dh
    } else if (newY < (-scaledHeight + bottomEdge)) {
      y = bottomEdge - scaledHeight
    } else {
      y = newY
    }

    return {x, y}
  }

  addImageToCanvas (context, image) {
    if (!image.resource) return

    context.save()

    context.globalCompositeOperation = 'destination-over'
    const scaledWidth = this.state.image.width * this.state.zoom
    const scaledHeight = this.state.image.height * this.state.zoom

    let x = image.x - (scaledWidth - this.state.image.width) / 2
    let y = image.y - (scaledHeight - this.state.image.height) / 2

    // need to make sure we aren't going out of bounds here...
    x = Math.min(x, 0)
    y = Math.min(y, 0)
    y = scaledHeight + y >= this.props.canvasHeight
      ? y
      : (y + (this.props.canvasHeight - (scaledHeight + y)))
    x = scaledWidth + x >= this.props.canvasWidth
      ? x
      : (x + (this.props.canvasWidth - (scaledWidth + x)))

    context.drawImage(image.resource,
      x,
      y,
      image.width * this.state.zoom,
      image.height * this.state.zoom)
    context.restore()
  }

  toDataURL () {
    const {image} = this.state
    const {canvasWidth, canvasHeight} = this.props

    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    canvas.width = canvasWidth
    canvas.height = canvasHeight

    this.addImageToCanvas(context, {
      resource: image.resource,
      x: image.x,
      y: image.y,
      height: image.height,
      width: image.width
    })

    return canvas.toDataURL()
  }

  handleCrop = () => {
    this.props.onCrop(this.state.preview)
  }

  /*
   handleZoomUpdate () {
   let newstate = this.state
   newstate.zoom = ReactDom.findDOMNode(this.refs.zoom).value
   this.setState({ newstate })
   }

   >for wrapper component<
   handleZoomUpdate () {
   var zoom = ReactDom.findDOMNode(this.refs.zoom).value
   this.setState({ zoom: zoom })
   }
   */

  render () {
    return (
      <div className='image-cropper'>
        <figure className='user-thumbnail'>
          <canvas
            ref={(canvas) => { this.canvas = canvas }}
            width={this.props.canvasWidth}
            height={this.props.canvasHeight} />
        </figure>
        {/*
         -zoom range input-
         if some day when a zoom will become needed...

         <div className="row">
         <input
         type="range"
         name="zoom"
         ref="zoom"
         onChange={this.handleZoomUpdate.bind(this)}
         style={{width: width}}
         min="1"
         max="3"
         step="0.01"
         defaultValue="1"
         />
         </div>
         */}
        <ul className='thumbnail-upload-controls'>
          <li>
            <a
              onClick={this.props.onCancel}
              className='button'
            >{this.props.closeButtonCopy}</a>
            <a
              onClick={this.handleCrop}
              className='button'
            >{this.props.cropButtonCopy}</a>
          </li>
        </ul>

      </div>
    )
  }
}

// const numberableType = (props, propName, componentName) => {
//   if (!isNaN(parseInt(props[propName]))) {
//     console.log(
//       `Invalid ${propName} '${props.size}' sent to '${componentName}'.` +
//       'Requires an int or string capable of conversion to an int.' +
//       `Check the render method of == '${componentName}'. == `);
//   }
// };

export default ImageCropper
