'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Loader = require('../Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _cn;

      var _props = this.props,
          className = _props.className,
          type = _props.type,
          loading = _props.loading,
          disabled = _props.disabled,
          children = _props.children,
          onClick = _props.onClick,
          href = _props.href,
          target = _props.target;


      var isDisabled = disabled || loading;

      var classes = (0, _classnames2.default)((_cn = {
        'base': this.props.base
      }, _defineProperty(_cn, 'button-' + this.props.color, this.props.color), _defineProperty(_cn, this.props.size, this.props.size), _defineProperty(_cn, 'extended', this.props.extended), _defineProperty(_cn, 'button-disabled', isDisabled), _cn), className);

      if (typeof href === 'string' && href.length > 0) {
        return _react2.default.createElement(
          'a',
          { href: href, className: 'button', target: target },
          children
        );
      } else {

        return _react2.default.createElement(
          'button',
          {
            type: type,
            className: classes,
            onClick: onClick,
            disabled: isDisabled
          },
          loading && _react2.default.createElement(_Loader2.default, { size: 'tiny' }),
          children
        );
      }
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  href: _react.PropTypes.string,
  target: _react.PropTypes.string,
  type: _react.PropTypes.string,
  className: _react.PropTypes.string,
  onClick: _react.PropTypes.func,
  loading: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  extended: _react.PropTypes.bool,
  size: _react.PropTypes.oneOf(['small', 'large', 'xlarge']),
  color: _react.PropTypes.oneOf(['green', 'red', 'ln', 'fb', 'tw', 'white', 'danger']),
  base: _react.PropTypes.bool
};
Button.defaultProps = {
  type: 'button',
  className: '',
  loading: false,
  disabled: false,
  extended: false,
  base: false
};
exports.default = Button;