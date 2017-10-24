'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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

var Tag = function (_Component) {
  _inherits(Tag, _Component);

  function Tag() {
    _classCallCheck(this, Tag);

    return _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).apply(this, arguments));
  }

  _createClass(Tag, [{
    key: 'render',
    value: function render() {
      var _cn;

      var _props = this.props,
          children = _props.children,
          onClick = _props.onClick,
          color = _props.color,
          size = _props.size,
          bordered = _props.bordered,
          extended = _props.extended,
          apart = _props.apart,
          disabled = _props.disabled,
          value = _props.value,
          className = _props.className,
          rest = _objectWithoutProperties(_props, ['children', 'onClick', 'color', 'size', 'bordered', 'extended', 'apart', 'disabled', 'value', 'className']);

      var withPrefix = (0, _helpers.appendClassPrefix)('tag');

      var newCildren = _react.Children.map(children, function (c) {
        if (typeof c === 'string' || typeof c === 'number') {
          return _react2.default.createElement(
            'span',
            null,
            c
          );
        }

        if (c === null || c === undefined) {
          return null;
        }

        var childClick = void 0;
        var className = c.props.className;

        if (c.props.onClick) {
          childClick = c.props.onClick;
        }

        if (c.type === 'i' && c.props.onClick) {
          childClick = (0, _helpers.wrapToStopPropagation)(c.props.onClick);
          className = (0, _classnames2.default)({
            close: Boolean(childClick),
            'cursor-disabled': Boolean(disabled)
          }, className);
        }

        return _react2.default.cloneElement(c, _extends({}, c.props, {
          onClick: !disabled && childClick,
          className: className
        }));
      });

      var hasIcon = _react.Children.toArray(newCildren).some(function (c) {
        return c.type === 'i';
      });

      var css = (0, _classnames2.default)((_cn = {
        tag: true
      }, _defineProperty(_cn, withPrefix(color), Boolean(color)), _defineProperty(_cn, withPrefix(size), Boolean(size)), _defineProperty(_cn, withPrefix('bordered'), Boolean(bordered)), _defineProperty(_cn, 'clickable', Boolean(onClick && !disabled)), _defineProperty(_cn, withPrefix('extended'), Boolean(extended)), _defineProperty(_cn, withPrefix('apart'), Boolean(apart)), _defineProperty(_cn, withPrefix('disabled'), Boolean(disabled)), _defineProperty(_cn, withPrefix('value'), Boolean(value)), _defineProperty(_cn, withPrefix('icon'), Boolean(hasIcon)), _cn), className);

      return _react2.default.createElement(
        'span',
        _extends({}, rest, {
          onClick: !disabled && onClick,
          className: css
        }),
        newCildren
      );
    }
  }]);

  return Tag;
}(_react.Component);

Tag.propTypes = {
  onClick: _propTypes2.default.func,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  bordered: _propTypes2.default.bool,
  extended: _propTypes2.default.bool,
  apart: _propTypes2.default.bool,
  value: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  color: _propTypes2.default.oneOf(['default', 'primary', 'light', 'danger', 'warm', 'hot', 'exclusive'])
};
Tag.defaultProps = {
  size: 'medium',
  color: 'default',
  className: '',
  disabled: false,
  extended: false,
  apart: false,
  bordered: false,
  value: false
};
exports.default = Tag;
module.exports = exports['default'];