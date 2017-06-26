var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Button from '../Button';
import ImageCropper from '../ImageCropper';
import browserImageSize from 'browser-image-size';
import { DEFAULT_ERROR, IMG_UPLOAD_LIMIT, IMG_ACCEPTED_TYPES } from '../../constants';

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
        var message = DEFAULT_ERROR;

        if (reject.size >= IMG_UPLOAD_LIMIT) {
          message = 'Picture is too big, please upload your picture up to 1 mb';
        }

        if (!reject.type.includes('image')) {
          message = 'Unknown picture format';
        }

        return showAlertBar({
          type: 'error',
          message: message
        });
      }

      if (!file) return;

      // warn if width-height exceeds 200x200
      browserImageSize(file).then(function (size) {
        if (size.width < 200 || size.height < 200) {
          return showAlertBar({
            type: 'error',
            message: 'Image size should be at least 200x200'
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
          defaultImg = _props.defaultImg;
      var croppingImage = this.state.croppingImage;
      var error = meta.error,
          invalid = meta.invalid,
          touched = meta.touched;


      var src = croppingImage && croppingImage.preview || input.value || defaultImg;

      var logoUploader = React.createElement(
        'div',
        { className: wrapperClass },
        React.createElement(
          'div',
          null,
          croppingImage ? React.createElement(ImageCropper, _extends({
            image: croppingImage.preview,
            onCrop: this.handleCrop
          }, input, {
            placeholder: placeholder,
            id: id,
            type: type,
            onCancel: this.handleCancelCrop })) : React.createElement(
            Dropzone,
            { onDrop: this.handleUpload,
              className: 'dropzone',
              activeClassName: 'active',
              rejectClassName: 'reject',
              multiple: false,
              maxSize: IMG_UPLOAD_LIMIT,
              accept: IMG_ACCEPTED_TYPES },
            React.createElement(
              'div',
              { className: 'split-group' },
              React.createElement(
                'div',
                { className: 'short' },
                React.createElement('img', { alt: alt,
                  src: src,
                  width: width,
                  className: className })
              ),
              this.props.children || React.createElement(
                'div',
                { className: 'long' },
                React.createElement(
                  Button,
                  { size: 'small' },
                  'Upload'
                )
              )
            )
          )
        )
      );

      return React.createElement(
        'div',
        { className: 'input-icon-wrapper' },
        logoUploader,
        React.createElement(
          'span',
          null,
          touched && invalid && error
        )
      );
    }
  }]);

  return FormImageUploader;
}(Component);

FormImageUploader.propTypes = {
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
FormImageUploader.defaultProps = {
  meta: {},
  input: {}
};


export default FormImageUploader;