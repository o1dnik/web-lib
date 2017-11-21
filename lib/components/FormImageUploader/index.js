'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _ImageCropper = require('../ImageCropper');

var _ImageCropper2 = _interopRequireDefault(_ImageCropper);

var _browserImageSize = require('browser-image-size');

var _browserImageSize2 = _interopRequireDefault(_browserImageSize);

var _reactIntl = require('react-intl');

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var messages = (0, _reactIntl.defineMessages)({
  defaultError: { id: 'app.error.code.default_error' },
  unknownFormat: { id: 'app.alertbar.picture.unknown.format' },
  badSize: { id: 'app.alertbar.picture.bad.size' },
  badResolution: { id: 'app.alertbar.picture.bad.resolution' }
});

var FormImageUploader = function (_Component) {
  _inherits(FormImageUploader, _Component);

  function FormImageUploader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormImageUploader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormImageUploader.__proto__ || Object.getPrototypeOf(FormImageUploader)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      croppingImage: null
    }, _this.handleUpload = function (_ref2, _ref3, e) {
      var _ref5 = _slicedToArray(_ref2, 1),
          file = _ref5[0];

      var _ref4 = _slicedToArray(_ref3, 1),
          reject = _ref4[0];

      if (e) e.preventDefault();

      // show AlertBar if upload been rejected
      var showAlertBar = _this.props.showAlertBar;


      if (!showAlertBar) {
        console.warn('FormImageUploader: props.showAlertBar is not defined!');
      }

      if (reject) {
        var message = messages.defaultError.id;

        if (reject.size >= _constants.IMG_UPLOAD_LIMIT) {
          message = messages.badSize.id;
        }

        if (!reject.type.includes('image')) {
          message = messages.unknownFormat.id;
        }

        return showAlertBar({
          type: 'error',
          message: message
        });
      }

      if (!file) return;

      // warn if width-height exceeds 200x200
      (0, _browserImageSize2.default)(file).then(function (size) {
        if (size.width < 200 || size.height < 200) {
          return showAlertBar({
            type: 'error',
            message: messages.badResolution,
            dismissAfter: 3000
          });
        }

        _this.setState({ croppingImage: file });
      });
    }, _this.handleCrop = function (image) {
      var onChange = _this.props.onChange;


      if (onChange) {
        onChange(image);
      }

      if (_this.props.input.onChange) {
        _this.props.input.onChange(image);
      }

      _this.setState({ croppingImage: null });
    }, _this.handleCancelCrop = function () {
      _this.setState({ croppingImage: null });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormImageUploader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          input = _props.input,
          meta = _props.meta,
          placeholder = _props.placeholder,
          wrapperClass = _props.wrapperClass,
          type = _props.type,
          alt = _props.alt,
          width = _props.width,
          className = _props.className,
          defaultImg = _props.defaultImg,
          closeButtonCopy = _props.closeButtonCopy,
          cropButtonCopy = _props.cropButtonCopy;
      var croppingImage = this.state.croppingImage;
      var error = meta.error,
          invalid = meta.invalid,
          touched = meta.touched;


      var src = croppingImage && croppingImage.preview || input.value || defaultImg;

      var logoUploader = _react2.default.createElement(
        'div',
        { className: wrapperClass },
        _react2.default.createElement(
          'div',
          null,
          croppingImage ? _react2.default.createElement(_ImageCropper2.default, _extends({
            image: croppingImage.preview,
            onCrop: this.handleCrop,
            closeButtonCopy: closeButtonCopy,
            cropButtonCopy: cropButtonCopy
          }, input, {
            placeholder: placeholder,
            id: id,
            type: type,
            onCancel: this.handleCancelCrop })) : _react2.default.createElement(
            _reactDropzone2.default,
            { onDrop: this.handleUpload,
              className: 'dropzone',
              activeClassName: 'active',
              rejectClassName: 'reject',
              multiple: false,
              maxSize: _constants.IMG_UPLOAD_LIMIT,
              accept: _constants.IMG_ACCEPTED_TYPES },
            _react2.default.createElement(
              'div',
              { className: 'split-group' },
              _react2.default.createElement(
                'div',
                { className: 'short' },
                _react2.default.createElement('img', { alt: alt,
                  src: src,
                  width: width,
                  className: className })
              ),
              this.props.children || _react2.default.createElement(
                'div',
                { className: 'long' },
                _react2.default.createElement(
                  _Button2.default,
                  { size: 'small' },
                  'Upload'
                )
              )
            )
          )
        )
      );

      return _react2.default.createElement(
        'div',
        { className: 'input-icon-wrapper' },
        logoUploader,
        _react2.default.createElement(
          'span',
          null,
          touched && invalid && error
        )
      );
    }
  }]);

  return FormImageUploader;
}(_react.Component);

FormImageUploader.propTypes = {
  id: _propTypes2.default.string,
  defaultImg: _propTypes2.default.string,
  input: _propTypes2.default.shape({
    name: _propTypes2.default.string,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onDragStart: _propTypes2.default.func,
    onDrop: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    value: _propTypes2.default.string
  }),
  meta: _propTypes2.default.shape({
    active: _propTypes2.default.bool,
    asyncValidating: _propTypes2.default.bool,
    autofilled: _propTypes2.default.bool,
    dirty: _propTypes2.default.bool,
    dispatch: _propTypes2.default.func,
    error: _propTypes2.default.string,
    invalid: _propTypes2.default.bool,
    pristine: _propTypes2.default.bool,
    submitting: _propTypes2.default.bool,
    touched: _propTypes2.default.bool,
    valid: _propTypes2.default.bool,
    visited: _propTypes2.default.bool,
    warning: _propTypes2.default.string
  }),
  name: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  type: _propTypes2.default.string,
  showAlertBar: _propTypes2.default.func
};
FormImageUploader.defaultProps = {
  meta: {},
  input: {}
};
exports.default = FormImageUploader;
module.exports = exports['default'];