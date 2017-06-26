var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import Button from '../Button';

var style = { minHeight: '87px', marginBottom: '10px' };

var NewMessageForm = function (_Component) {
  _inherits(NewMessageForm, _Component);

  function NewMessageForm() {
    _classCallCheck(this, NewMessageForm);

    return _possibleConstructorReturn(this, (NewMessageForm.__proto__ || Object.getPrototypeOf(NewMessageForm)).apply(this, arguments));
  }

  _createClass(NewMessageForm, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onSubmit = _props.onSubmit,
          onChange = _props.onChange,
          value = _props.value,
          disabled = _props.disabled,
          loading = _props.loading;


      return React.createElement(
        'div',
        { className: 'message-send-form box-shadow' },
        React.createElement(Textarea, {
          style: style,
          value: value,
          onChange: onChange,
          minRows: 3,
          maxRows: 15
        }),
        React.createElement(
          Button,
          {
            className: 'send-btn',
            onClick: onSubmit,
            loading: loading,
            disabled: disabled
          },
          'Send'
        )
      );
    }
  }]);

  return NewMessageForm;
}(Component);

NewMessageForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool
};
NewMessageForm.defaultProps = {
  value: ''
};


export default NewMessageForm;