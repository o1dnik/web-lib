'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../../helpers');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
          href = _props.href,
          target = _props.target,
          type = _props.type,
          className = _props.className,
          onClick = _props.onClick,
          loading = _props.loading,
          disabled = _props.disabled,
          extended = _props.extended,
          outline = _props.outline,
          size = _props.size,
          color = _props.color,
          link = _props.link,
          rounded = _props.rounded,
          children = _props.children,
          as = _props.as,
          rest = _objectWithoutProperties(_props, ['href', 'target', 'type', 'className', 'onClick', 'loading', 'disabled', 'extended', 'outline', 'size', 'color', 'link', 'rounded', 'children', 'as']);

      var withPrefix = (0, _helpers.appendClassPrefix)('button');

      var isDisabled = disabled || loading;

      var newCildren = _react.Children.map(children, function (c) {
        if (typeof c === 'string') {
          return _react2.default.createElement(
            'span',
            null,
            c
          );
        }
        return _react2.default.cloneElement(c, c.props);
      });

      var hasIcon = _react.Children.toArray(newCildren).some(function (c) {
        return c.type === 'i';
      });

      var css = (0, _classnames2.default)((_cn = {
        button: true
      }, _defineProperty(_cn, withPrefix(color), Boolean(color)), _defineProperty(_cn, withPrefix(size), Boolean(size)), _defineProperty(_cn, withPrefix('rounded'), Boolean(rounded)), _defineProperty(_cn, withPrefix('outline'), Boolean(outline)), _defineProperty(_cn, withPrefix('extended'), Boolean(extended)), _defineProperty(_cn, withPrefix('disabled'), Boolean(disabled)), _defineProperty(_cn, withPrefix('loading'), Boolean(loading)), _defineProperty(_cn, withPrefix('link'), Boolean(href || link)), _defineProperty(_cn, withPrefix('icon'), Boolean(hasIcon)), _cn), className);

      if (href && typeof href === 'string' && href.length > 0 || link) {

        return _react2.default.createElement(
          'a',
          {
            href: href || '#',
            className: css,
            target: target,
            disabled: isDisabled,
            onClick: onClick
          },
          newCildren
        );
      }

      var Element = as;

      return _react2.default.createElement(
        Element,
        _extends({}, rest, {
          type: type,
          className: css,
          onClick: onClick,
          disabled: isDisabled
        }),
        loading && _react2.default.createElement('i', { className: 'ion-load-c animate-spin' }),
        newCildren
      );
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  href: _react.PropTypes.string,
  as: _helpers.as,
  link: _react.PropTypes.bool,
  target: _react.PropTypes.string,
  type: _react.PropTypes.string,
  className: _react.PropTypes.string,
  onClick: _react.PropTypes.func,
  loading: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  extended: _react.PropTypes.bool,
  outline: _react.PropTypes.bool,
  rounded: _react.PropTypes.bool,
  size: _react.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  color: _react.PropTypes.oneOf(['default', 'primary', 'light', 'danger', 'fb', 'tw', 'ln'])
};
Button.defaultProps = {
  as: 'button',
  type: 'button',
  size: 'medium',
  color: 'default',
  className: '',
  loading: false,
  disabled: false,
  extended: false,
  outline: false
};
exports.default = Button;
module.exports = exports['default'];