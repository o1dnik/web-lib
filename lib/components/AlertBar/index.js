'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactNotification = require('react-notification');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Main component: https://github.com/pburtchaell/react-notification/
 * For props: blob/master/docs/guides/props.md
 */
var AlertBar = function AlertBar(props) {
  var _cn;

  var type = props.type,
      isActive = props.isActive,
      rest = _objectWithoutProperties(props, ['type', 'isActive']);

  var css = (0, _classnames2.default)((_cn = {
    'alert': true,
    'alert-bar': true
  }, _defineProperty(_cn, 'alert-' + type, true), _defineProperty(_cn, 'shown', isActive), _cn));

  return _react2.default.createElement(_reactNotification.Notification, _extends({}, rest, {
    className: css,
    style: false // disable default inline styles
  }));
};

AlertBar.defaultProps = {
  type: 'success',
  message: '',
  dismissAfter: false, // in react-notification default = 2000
  action: 'X'
};
AlertBar.PropTypes = {
  type: _react.PropTypes.string // => Notification.props.action
};

exports.default = AlertBar;
module.exports = exports['default'];