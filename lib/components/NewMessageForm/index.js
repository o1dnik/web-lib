'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTextareaAutosize = require('react-textarea-autosize');

var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
          loading = _props.loading,
          buttonText = _props.buttonText;


      return _react2.default.createElement(
        'div',
        { className: 'message-send-form box-shadow' },
        _react2.default.createElement(_reactTextareaAutosize2.default, {
          style: style,
          value: value,
          onChange: onChange,
          minRows: 3,
          maxRows: 15
        }),
        _react2.default.createElement(
          _Button2.default,
          {
            className: 'send-btn',
            onClick: onSubmit,
            loading: loading,
            disabled: disabled
          },
          buttonText
        )
      );
    }
  }]);

  return NewMessageForm;
}(_react.Component);

NewMessageForm.propTypes = {
  onSubmit: _propTypes2.default.func.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.string.isRequired,
  disabled: _propTypes2.default.bool,
  loading: _propTypes2.default.bool
};
NewMessageForm.defaultProps = {
  value: '',
  buttonText: 'Send'
};
exports.default = NewMessageForm;
module.exports = exports['default'];