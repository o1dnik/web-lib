var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../Button';

var AlertComponent = function (_Component) {
  _inherits(AlertComponent, _Component);

  function AlertComponent() {
    _classCallCheck(this, AlertComponent);

    return _possibleConstructorReturn(this, (AlertComponent.__proto__ || Object.getPrototypeOf(AlertComponent)).apply(this, arguments));
  }

  _createClass(AlertComponent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          content = _props.content,
          confirmContent = _props.confirmContent,
          onInputChange = _props.onInputChange,
          inputPlaceholder = _props.inputPlaceholder,
          inputValue = _props.inputValue,
          onConfirm = _props.onConfirm,
          onClose = _props.onClose,
          confirmDisabled = _props.confirmDisabled,
          confirmLoading = _props.confirmLoading;


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
              type: 'text',
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
      );
    }
  }]);

  return AlertComponent;
}(Component);

AlertComponent.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  confirmContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  onInputChange: PropTypes.func,
  inputValue: PropTypes.string,
  inputPlaceholder: PropTypes.string,

  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,

  confirmDisabled: PropTypes.bool.isRequired,

  confirmLoading: PropTypes.bool.isRequired

};
AlertComponent.defaultProps = {
  title: '',
  content: '',
  confirmContent: 'Ok',
  inputValue: '',
  inputPlaceholder: '',
  confirmDisabled: false,
  confirmLoading: false
};


export default AlertComponent;