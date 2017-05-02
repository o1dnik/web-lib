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
              type: inputType,
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
              _Button2.default,
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
        )
      );
    }
  }]);

  return ConfirmModalComponent;
}(_react.Component);

ConfirmModalComponent.propTypes = {
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),

  confirmContent: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  cancelContent: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),

  onInputChange: _propTypes2.default.func,
  inputValue: _propTypes2.default.string,
  inputType: _propTypes2.default.string,
  inputPlaceholder: _propTypes2.default.string,

  onConfirm: _propTypes2.default.func.isRequired,
  onCancel: _propTypes2.default.func.isRequired,

  confirmDisabled: _propTypes2.default.bool.isRequired,
  cancelDisabled: _propTypes2.default.bool.isRequired,

  confirmLoading: _propTypes2.default.bool.isRequired,
  cancelLoading: _propTypes2.default.bool.isRequired

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
exports.default = ConfirmModalComponent;
module.exports = exports['default'];