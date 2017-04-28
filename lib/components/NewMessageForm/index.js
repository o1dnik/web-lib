'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextareaInput = require('../TextareaInput');

var _TextareaInput2 = _interopRequireDefault(_TextareaInput);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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


      return _react2.default.createElement(
        'div',
        { className: 'message-send-form message-text box-shadow' },
        _react2.default.createElement(_TextareaInput2.default, { value: value, onChange: onChange }),
        _react2.default.createElement(
          _Button2.default,
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
}(_react.Component);

NewMessageForm.propTypes = {
  onSubmit: _react.PropTypes.func.isRequired,
  onChange: _react.PropTypes.func.isRequired,
  value: _react.PropTypes.string.isRequired,
  disabled: _react.PropTypes.bool,
  loading: _react.PropTypes.bool
};
NewMessageForm.defaultProps = {
  value: ''
};
exports.default = NewMessageForm;
module.exports = exports['default'];