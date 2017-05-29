'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
          confirmDisabled = _props.confirmDisabled,
          confirmLoading = _props.confirmLoading;


      return _react2.default.createElement(
        'div',
        { className: 'popup__box' },
        _react2.default.createElement(
          'header',
          { className: 'popup__box__header' },
          _react2.default.createElement(
            'h1',
            { className: 'popup__box__header__title' },
            _react2.default.createElement(
              'span',
              null,
              title
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'popup__box__body' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              null,
              content
            ),
            onInputChange && _react2.default.createElement('input', {
              type: 'text',
              className: 'mm-popup__input',
              onChange: onInputChange,
              placeholder: inputPlaceholder,
              value: inputValue
            })
          )
        ),
        _react2.default.createElement(
          'footer',
          { className: 'popup__box__footer' },
          _react2.default.createElement(
            _Button2.default,
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
}(_react.Component);

AlertComponent.propTypes = {
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),

  confirmContent: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),

  onInputChange: _propTypes2.default.func,
  inputValue: _propTypes2.default.string,
  inputPlaceholder: _propTypes2.default.string,

  onConfirm: _propTypes2.default.func.isRequired,

  confirmDisabled: _propTypes2.default.bool.isRequired,

  confirmLoading: _propTypes2.default.bool.isRequired

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
exports.default = AlertComponent;
module.exports = exports['default'];