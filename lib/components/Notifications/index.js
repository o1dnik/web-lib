"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _reactNotification = require("react-notification");

var _notificationsActions = require("../../actions/notifications-actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notifications = function (_Component) {
  _inherits(Notifications, _Component);

  function Notifications() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Notifications);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Notifications.__proto__ || Object.getPrototypeOf(Notifications)).call.apply(_ref, [this].concat(args))), _this), _this.handleDismiss = function (notification) {
      _this.props.hideNotification(notification);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Notifications, [{
    key: "render",
    value: function render() {
      var notifications = this.props.notifications;

      if (!notifications.length) return null;

      return _react2.default.createElement(_reactNotification.NotificationStack, {
        notifications: notifications.map(function (n) {
          return _extends({}, n, {
            className: "notification-bar-custom"
          });
        }),
        onDismiss: this.handleDismiss
      });
    }
  }]);

  return Notifications;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (_ref2) {
  var notifications = _ref2.notifications;
  return {
    notifications: notifications.entities
  };
}, { hideNotification: _notificationsActions.hideNotification })(Notifications);
module.exports = exports["default"];