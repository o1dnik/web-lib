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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (Component) {
  var _class, _temp2;

  return _temp2 = _class = function (_React$Component) {
    _inherits(OpenCloseDecorator, _React$Component);

    function OpenCloseDecorator() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, OpenCloseDecorator);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OpenCloseDecorator.__proto__ || Object.getPrototypeOf(OpenCloseDecorator)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        isOpen: _this.props.defaultIsOpen
      }, _this.toggle = function (e) {
        if (e) e.preventDefault();
        _this.setState(function (prevState) {
          return _extends({}, prevState, { isOpen: !prevState.isOpen });
        });
      }, _this.close = function (e) {
        if (e) e.preventDefault();
        _this.setState(function (prevState) {
          return _extends({}, prevState, { isOpen: false });
        });
      }, _this.open = function (e) {
        if (e) e.preventDefault();
        _this.setState(function (prevState) {
          return _extends({}, prevState, { isOpen: true });
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(OpenCloseDecorator, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.state, {
          toggle: this.toggle,
          open: this.open,
          close: this.close
        }, this.props));
      }
    }]);

    return OpenCloseDecorator;
  }(_react2.default.Component), _class.propTypes = {
    isOpen: _propTypes2.default.bool,
    defaultIsOpen: _propTypes2.default.bool,
    toggle: _propTypes2.default.func,
    close: _propTypes2.default.func,
    open: _propTypes2.default.func
  }, _class.defaultProps = {
    defaultIsOpen: false
  }, _temp2;
};

module.exports = exports['default'];