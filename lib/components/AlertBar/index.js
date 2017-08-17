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

var _reactRedux = require('react-redux');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactNotification = require('react-notification');

var _alertbarActions = require('../../actions/alertbar-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlertBar = function (_Component) {
  _inherits(AlertBar, _Component);

  function AlertBar() {
    _classCallCheck(this, AlertBar);

    return _possibleConstructorReturn(this, (AlertBar.__proto__ || Object.getPrototypeOf(AlertBar)).apply(this, arguments));
  }

  _createClass(AlertBar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.location.pathname !== this.props.location.pathname) {
        if (nextProps.isActive && nextProps.hideOnRouteChange) {
          nextProps.hideAlertBar();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          hideAlertBar = _props.hideAlertBar,
          message = _props.message,
          dismissAfter = _props.dismissAfter,
          rest = _objectWithoutProperties(_props, ['type', 'hideAlertBar', 'message', 'dismissAfter']);

      var activeClasses = (0, _classnames2.default)(_defineProperty({
        shown: true
      }, 'alert-' + type, Boolean(type)));

      var classes = (0, _classnames2.default)({
        'alert-bar': true
      });

      var iconClasses = (0, _classnames2.default)({
        'ion-checkmark-round': type === 'success',
        'ion-close-circled': type === 'error',
        'ion-alert-circled': type === 'warning'
      });

      var messageBody = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('i', { className: iconClasses }),
        _react2.default.createElement(
          'span',
          null,
          message
        )
      );

      return _react2.default.createElement(_reactNotification.Notification, _extends({}, rest, {
        message: messageBody,
        style: false,
        isLast: false // https://github.com/pburtchaell/react-notification/pull/108
        // someone did pull request and added check that clear
        // timeout on willReceiveProps
        , dismissAfter: dismissAfter,
        activeClassName: activeClasses,
        className: classes,
        onDismiss: dismissAfter ? hideAlertBar : null,
        onClick: hideAlertBar
      }));
    }
  }]);

  return AlertBar;
}(_react.Component);

AlertBar.PropTypes = {
  location: _propTypes2.default.object.isRequired,

  type: _propTypes2.default.string.isRequired,
  message: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  dismissAfter: _propTypes2.default.number.isRequired,
  action: _propTypes2.default.string.isRequired,
  hideAlertBar: _propTypes2.default.func.isRequired,
  hideOnRouteChange: _propTypes2.default.bool.isRequired
};
AlertBar.defaultProps = {
  type: 'success',
  message: '',
  dismissAfter: false,
  hideOnRouteChange: true,
  action: ' '
};
exports.default = (0, _reactRedux.connect)(function (_ref) {
  var alertbar = _ref.alertbar;
  return _extends({}, alertbar);
}, { hideAlertBar: _alertbarActions.hideAlertBar })(AlertBar);
module.exports = exports['default'];