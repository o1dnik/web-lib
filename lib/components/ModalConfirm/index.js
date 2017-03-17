'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
          onConfirm = _props.onConfirm,
          onCancel = _props.onCancel,
          confirmDisabled = _props.confirmDisabled,
          cancelDisabled = _props.cancelDisabled,
          confirmLoading = _props.confirmLoading,
          cancelLoading = _props.cancelLoading;


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
              'p',
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
            'div',
            { className: 'popup__box__footer__left-space' },
            _react2.default.createElement(
              _Button.Button,
              {
                className: 'mm-popup__btn mm-popup__btn--cancel',
                onClick: onCancel,
                disabled: cancelDisabled,
                loading: cancelLoading
              },
              cancelContent
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'popup__box__footer__right-space' },
            _react2.default.createElement(
              _Button.Button,
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
}(_react.Component);

ConfirmModalComponent.propTypes = {
  title: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
  content: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),

  confirmContent: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
  cancelContent: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),

  onInputChange: _react.PropTypes.func,
  inputValue: _react.PropTypes.string,
  inputPlaceholder: _react.PropTypes.string,

  onConfirm: _react.PropTypes.func.isRequired,
  onCancel: _react.PropTypes.func.isRequired,

  confirmDisabled: _react.PropTypes.bool.isRequired,
  cancelDisabled: _react.PropTypes.bool.isRequired,

  confirmLoading: _react.PropTypes.bool.isRequired,
  cancelLoading: _react.PropTypes.bool.isRequired

};
ConfirmModalComponent.defaultProps = {
  title: '',
  content: '',
  confirmContent: 'Confirm',
  cancelContent: 'Cancel',
  inputValue: '',
  inputPlaceholder: '',
  confirmDisabled: false,
  cancelDisabled: false,
  confirmLoading: false,
  cancelLoading: false
};
exports.default = ConfirmModalComponent;
module.exports = exports['default'];