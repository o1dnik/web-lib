var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../Button';

var ConfirmModalComponent = function (_Component) {
  _inherits(ConfirmModalComponent, _Component);

  function ConfirmModalComponent() {
    _classCallCheck(this, ConfirmModalComponent);

    return _possibleConstructorReturn(this, (ConfirmModalComponent.__proto__ || Object.getPrototypeOf(ConfirmModalComponent)).apply(this, arguments));
  }

  _createClass(ConfirmModalComponent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          content = _props.content,
          confirmContent = _props.confirmContent,
          cancelContent = _props.cancelContent,
          onInputChange = _props.onInputChange,
          inputPlaceholder = _props.inputPlaceholder,
          inputValue = _props.inputValue,
          inputType = _props.inputType,
          onConfirm = _props.onConfirm,
          onCancel = _props.onCancel,
          onClose = _props.onClose,
          confirmDisabled = _props.confirmDisabled,
          cancelDisabled = _props.cancelDisabled,
          confirmLoading = _props.confirmLoading,
          cancelLoading = _props.cancelLoading;


      return React.createElement(
        'div',
        { className: 'popup__box' },
        React.createElement('i', { className: 'ion-close', onClick: onClose }),
        React.createElement(
          'header',
          { className: 'popup__box__header' },
          React.createElement(
            'h1',
            { className: 'popup__box__header__title' },
            React.createElement(
              'span',
              null,
              title
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'popup__box__body' },
          React.createElement(
            'div',
            null,
            React.createElement(
              'div',
              null,
              content
            ),
            onInputChange && React.createElement('input', {
              type: inputType,
              className: 'mm-popup__input',
              onChange: onInputChange,
              placeholder: inputPlaceholder,
              value: inputValue
            })
          )
        ),
        React.createElement(
          'footer',
          { className: 'popup__box__footer' },
          React.createElement(
            'div',
            { className: 'popup__box__footer__left-space' },
            React.createElement(
              Button,
              {
                className: 'mm-popup__btn mm-popup__btn--cancel',
                onClick: onCancel,
                disabled: cancelDisabled,
                loading: cancelLoading
              },
              cancelContent
            )
          ),
          React.createElement(
            'div',
            { className: 'popup__box__footer__right-space' },
            React.createElement(
              Button,
              {
                className: 'mm-popup__btn mm-popup__btn--danger',
                onClick: onConfirm,
                disabled: confirmDisabled,
                loading: confirmLoading
              },
              confirmContent
            )
          )
        )
      );
    }
  }]);

  return ConfirmModalComponent;
}(Component);

ConfirmModalComponent.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  confirmContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  cancelContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  onInputChange: PropTypes.func,
  inputValue: PropTypes.string,
  inputType: PropTypes.string,
  inputPlaceholder: PropTypes.string,

  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,

  confirmDisabled: PropTypes.bool.isRequired,
  cancelDisabled: PropTypes.bool.isRequired,

  confirmLoading: PropTypes.bool.isRequired,
  cancelLoading: PropTypes.bool.isRequired

};
ConfirmModalComponent.defaultProps = {
  title: '',
  content: '',
  confirmContent: 'Confirm',
  cancelContent: 'Cancel',
  inputValue: '',
  inputType: 'text',
  inputPlaceholder: '',
  confirmDisabled: false,
  cancelDisabled: false,
  confirmLoading: false,
  cancelLoading: false
};


export default ConfirmModalComponent;
module.exports = exports['default'];