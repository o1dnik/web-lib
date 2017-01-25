'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageCropper = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isDataURI = require('validator/lib/isDataURI');

var _isDataURI2 = _interopRequireDefault(_isDataURI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Inspired by:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://dropsofserenity.github.io/react-avatar-cropper/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * https://github.com/DropsOfSerenity/react-avatar-cropper/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ImageCropper = exports.ImageCropper = function (_Component) {
  _inherits(ImageCropper, _Component);

  function ImageCropper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ImageCropper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImageCropper.__proto__ || Object.getPrototypeOf(ImageCropper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dragging: false,
      image: {},
      mouse: { x: null, y: null },
      preview: null,
      zoom: 1
    }, _this.listeners = [], _this.handleCrop = function () {
      _this.props.onCrop(_this.state.preview);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ImageCropper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var canvas = this.canvas;

      this.prepareImage(this.props.image);

      this.listeners = {
        mousemove: function mousemove(e) {
          return _this2.mouseMoveListener(e);
        },
        mouseup: function mouseup(e) {
          return _this2.mouseUpListener(e);
        },
        mousedown: function mousedown(e) {
          return _this2.mouseDownListener(e);
        }
      };

      window.addEventListener('mousemove', this.listeners.mousemove, false);
      window.addEventListener('mouseup', this.listeners.mouseup, false);
      canvas.addEventListener('mousedown', this.listeners.mousedown, false);
      document.onselectstart = function (e) {
        return _this2.preventSelection(e);
      };
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var context = this.canvas.getContext('2d');
      context.clearRect(0, 0, this.props.canvasWidth, this.props.canvasHeight);
      this.addImageToCanvas(context, this.state.image);
    }

    // make sure we clean up listeners when unmounted.

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var canvas = this.canvas;
      window.removeEventListener('mousemove', this.listeners.mousemove);
      window.removeEventListener('mouseup', this.listeners.mouseup);
      canvas.removeEventListener('mousedown', this.listeners.mousedown);
    }
  }, {
    key: 'fitImageToCanvas',
    value: function fitImageToCanvas(canvasWidth, canvasHeight) {
      var scaledHeight = void 0,
          scaledWidth = void 0;

      var canvasAspectRatio = this.props.canvasHeight / this.props.canvasWidth;
      var imageAspectRatio = canvasHeight / canvasWidth;

      if (canvasAspectRatio > imageAspectRatio) {
        scaledHeight = this.props.canvasHeight;
        var scaleRatio = scaledHeight / canvasHeight;
        scaledWidth = canvasWidth * scaleRatio;
      } else {
        scaledWidth = this.props.canvasWidth;
        var _scaleRatio = scaledWidth / canvasWidth;
        scaledHeight = canvasHeight * _scaleRatio;
      }

      return { width: scaledWidth, height: scaledHeight };
    }
  }, {
    key: 'prepareImage',
    value: function prepareImage(imageUri) {
      var _this3 = this;

      var img = new Image();

      if (!(0, _isDataURI2.default)(imageUri)) img.crossOrigin = 'anonymous';

      img.onload = function () {
        var scaledImage = _this3.fitImageToCanvas(img.width, img.height);
        scaledImage.resource = img;
        scaledImage.x = 0;
        scaledImage.y = 0;
        _this3.setState({
          dragging: false,
          image: scaledImage,
          preview: _this3.toDataURL()
        });
      };

      img.src = imageUri;
    }
  }, {
    key: 'mouseDownListener',
    value: function mouseDownListener() {
      this.setState({
        image: this.state.image,
        dragging: true,
        mouse: { x: null, y: null }
      });
    }
  }, {
    key: 'preventSelection',
    value: function preventSelection(e) {
      if (this.state.dragging) {
        e.preventDefault();
        return false;
      }
    }
  }, {
    key: 'mouseUpListener',
    value: function mouseUpListener() {
      this.setState({ dragging: false, preview: this.toDataURL() });
    }
  }, {
    key: 'mouseMoveListener',
    value: function mouseMoveListener(e) {
      var _state = this.state,
          image = _state.image,
          mouse = _state.mouse,
          dragging = _state.dragging;


      if (!dragging) return;

      var mouseX = e.clientX;
      var mouseY = e.clientY;
      var newImage = image;

      if (mouse.x && mouse.y) {
        var dx = mouse.x - mouseX;
        var dy = mouse.y - mouseY;

        var _boundedCoords = this.boundedCoords(image.x, image.y, dx, dy),
            x = _boundedCoords.x,
            y = _boundedCoords.y;

        newImage.x = x;
        newImage.y = y;
      }

      this.setState({
        image: this.state.image,
        mouse: { x: mouseX, y: mouseY }
      });
    }
  }, {
    key: 'boundedCoords',
    value: function boundedCoords(x, y, dx, dy) {
      var newX = x - dx;
      var newY = y - dy;

      var scaledWidth = this.state.image.width * this.state.zoom;
      var dw = (scaledWidth - this.state.image.width) / 2;
      // const imageLeftEdge = this.state.image.x - dw;
      // const imageRightEdge = (imageLeftEdge + scaledWidth);

      var rightEdge = this.props.canvasWidth;
      // const leftEdge = 0;

      if (newX - dw > 0) {
        x = dw;
      } else if (newX < -scaledWidth + rightEdge) {
        x = rightEdge - scaledWidth;
      } else {
        x = newX;
      }

      var scaledHeight = this.state.image.height * this.state.zoom;
      var dh = (scaledHeight - this.state.image.height) / 2;
      // const imageTopEdge = this.state.image.y - dh;
      // const imageBottomEdge = imageTopEdge + scaledHeight;

      var bottomEdge = this.props.canvasHeight;
      // const topEdge = 0;

      if (newY - dh > 0) {
        y = dh;
      } else if (newY < -scaledHeight + bottomEdge) {
        y = bottomEdge - scaledHeight;
      } else {
        y = newY;
      }

      return { x: x, y: y };
    }
  }, {
    key: 'addImageToCanvas',
    value: function addImageToCanvas(context, image) {

      if (!image.resource) return;

      context.save();

      context.globalCompositeOperation = 'destination-over';
      var scaledWidth = this.state.image.width * this.state.zoom;
      var scaledHeight = this.state.image.height * this.state.zoom;

      var x = image.x - (scaledWidth - this.state.image.width) / 2;
      var y = image.y - (scaledHeight - this.state.image.height) / 2;

      // need to make sure we aren't going out of bounds here...
      x = Math.min(x, 0);
      y = Math.min(y, 0);
      y = scaledHeight + y >= this.props.canvasHeight ? y : y + (this.props.canvasHeight - (scaledHeight + y));
      x = scaledWidth + x >= this.props.canvasWidth ? x : x + (this.props.canvasWidth - (scaledWidth + x));

      context.drawImage(image.resource, x, y, image.width * this.state.zoom, image.height * this.state.zoom);
      context.restore();
    }
  }, {
    key: 'toDataURL',
    value: function toDataURL() {
      var image = this.state.image;
      var _props = this.props,
          canvasWidth = _props.canvasWidth,
          canvasHeight = _props.canvasHeight;


      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      this.addImageToCanvas(context, {
        resource: image.resource,
        x: image.x,
        y: image.y,
        height: image.height,
        width: image.width
      });

      return canvas.toDataURL();
    }
  }, {
    key: 'render',


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

    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        { className: 'image-cropper' },
        _react2.default.createElement(
          'figure',
          { className: 'user-thumbnail' },
          _react2.default.createElement('canvas', {
            ref: function ref(canvas) {
              return _this4.canvas = canvas;
            },
            width: this.props.canvasWidth,
            height: this.props.canvasHeight })
        ),
        _react2.default.createElement(
          'ul',
          { className: 'thumbnail-upload-controls' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              {
                onClick: this.props.onCancel,
                className: 'button'
              },
              this.props.closeButtonCopy
            ),
            _react2.default.createElement(
              'a',
              {
                onClick: this.handleCrop,
                className: 'button'
              },
              this.props.cropButtonCopy
            )
          )
        )
      );
    }
  }]);

  return ImageCropper;
}(_react.Component);

// const numberableType = (props, propName, componentName) => {
//   if (!isNaN(parseInt(props[propName]))) {
//     console.log(
//       `Invalid ${propName} '${props.size}' sent to '${componentName}'.` +
//       'Requires an int or string capable of conversion to an int.' +
//       `Check the render method of == '${componentName}'. == `);
//   }
// };

ImageCropper.propTypes = {
  image: _react2.default.PropTypes.string.isRequired,
  onCrop: _react2.default.PropTypes.func.isRequired,
  onCancel: _react2.default.PropTypes.func,
  closeButtonCopy: _react2.default.PropTypes.string,
  cropButtonCopy: _react2.default.PropTypes.string,
  // width: numberableType,
  // height: : numberableType,
  width: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number
  // PropTypes.inctanceOf(Component),
  ]),
  height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number
  // PropTypes.inctanceOf(Component),
  ])
};
ImageCropper.defaultProps = {
  canvasWidth: 150,
  canvasHeight: 150,
  closeButtonCopy: 'Cancel',
  cropButtonCopy: 'Crop and Save'
};
exports.default = ImageCropper;