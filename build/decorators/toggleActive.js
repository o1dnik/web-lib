'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (Component) {
  return function (_React$Component) {
    _inherits(ActiveItemDecorator, _React$Component);

    function ActiveItemDecorator() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, ActiveItemDecorator);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActiveItemDecorator.__proto__ || Object.getPrototypeOf(ActiveItemDecorator)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        activeItem: _this.props.activeItem || null
      }, _this.toggleActive = function (id) {
        return function (e) {
          if (e) e.preventDefault();
          var activeItem = id === _this.state.activeItem ? null : id;
          _this.setState({ activeItem: activeItem });
        };
      }, _this.isActive = function (id) {
        return _this.state.activeItem === id;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ActiveItemDecorator, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.props, this.state, {
          isActive: this.isActive,
          toggleActive: this.toggleActive
        }));
      }
    }]);

    return ActiveItemDecorator;
  }(_react2.default.Component);
};