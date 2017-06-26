var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { Notification } from 'react-notification';
import { hideAlertBar } from '../../actions/alertbar-actions';

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
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isActive && this.props.hideOnRouteChange) {
        this.props.hideAlertBar();
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

      var activeClasses = cn(_defineProperty({
        shown: true
      }, 'alert-' + type, Boolean(type)));

      var classes = cn({
        'alert-bar': true
      });

      var iconClasses = cn({
        'ion-checkmark-round': type === 'success',
        'ion-close-circled': type === 'error',
        'ion-alert-circled': type === 'warning'
      });

      var messageBody = React.createElement(
        'div',
        null,
        React.createElement('i', { className: iconClasses }),
        React.createElement(
          'span',
          null,
          message
        )
      );

      return React.createElement(Notification, _extends({}, rest, {
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
}(Component);

AlertBar.PropTypes = {
  location: PropTypes.object.isRequired,

  type: PropTypes.string.isRequired,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  dismissAfter: PropTypes.number.isRequired,
  action: PropTypes.string.isRequired,
  hideAlertBar: PropTypes.func.isRequired,
  hideOnRouteChange: PropTypes.bool.isRequired
};
AlertBar.defaultProps = {
  type: 'success',
  message: '',
  dismissAfter: false,
  hideOnRouteChange: true,
  action: ' '
};


export default connect(function (_ref) {
  var alertbar = _ref.alertbar;
  return _extends({}, alertbar);
}, { hideAlertBar: hideAlertBar })(AlertBar);
module.exports = exports['default'];