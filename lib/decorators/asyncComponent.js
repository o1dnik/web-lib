'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (loaderFunc) {
  var _class, _temp2;

  return _temp2 = _class = function (_React$Component) {
    _inherits(AsyncComponentDecorator, _React$Component);

    function AsyncComponentDecorator() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, AsyncComponentDecorator);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AsyncComponentDecorator.__proto__ || Object.getPrototypeOf(AsyncComponentDecorator)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        component: null,
        loadingError: null
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AsyncComponentDecorator, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;

        if (this.props.onLoadStart) {
          this.props.onLoadStart();
        }

        loaderFunc().then(function (component) {
          _this2.setState(function (prevState) {
            if (_this2.props.onLoadSuccess) {
              _this2.props.onLoadSuccess();
            }

            return _extends({}, prevState, {
              component: component && component.default || component
            });
          });
        }).catch(function (err) {
          _this2.setState(function (prevState) {
            if (_this2.props.onLoadFail) {
              _this2.props.onLoadFail(err);
            }

            return _extends({}, prevState, {
              loadingError: err
            });
          });
        });
      }
    }, {
      key: 'renderLoader',
      value: function renderLoader() {
        return _react2.default.createElement(_Loader2.default, { size: 'large' });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            renderLoader = _props.renderLoader,
            rest = _objectWithoutProperties(_props, ['renderLoader']);

        if (this.state.component) {
          return _react2.default.createElement(this.state.component, rest);
        }
        return (renderLoader || this.renderLoader)();
      }
    }]);

    return AsyncComponentDecorator;
  }(_react2.default.Component), _class.propTypes = {
    onLoadStart: _react2.default.PropTypes.func,
    onLoadSuccess: _react2.default.PropTypes.func,
    onLoadFail: _react2.default.PropTypes.func,
    renderLoader: _react2.default.PropTypes.func
  }, _temp2;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Loader = require('../components/Loader');

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = exports['default'];