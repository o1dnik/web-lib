'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subtract2 = require('lodash/subtract');

var _subtract3 = _interopRequireDefault(_subtract2);

var _add2 = require('lodash/add');

var _add3 = _interopRequireDefault(_add2);

var _inRange2 = require('lodash/inRange');

var _inRange3 = _interopRequireDefault(_inRange2);

var _clamp2 = require('lodash/clamp');

var _clamp3 = _interopRequireDefault(_clamp2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getOldValue = require('../../helpers/getOldValue');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberInput = function (_Component) {
  _inherits(NumberInput, _Component);

  function NumberInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NumberInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).call.apply(_ref, [this].concat(args))), _this), _this.handleButtonClick = function (operator) {
      return function (e) {
        if (e) e.preventDefault();
        var onChange = _this.props.onChange || _this.props.input.onChange;
        var oldValue = (0, _getOldValue.getOldValue)(_this.props);
        var _this$props = _this.props,
            minValue = _this$props.minValue,
            maxValue = _this$props.maxValue,
            step = _this$props.step;


        var newValue = (0, _clamp3.default)(operator(oldValue, step), minValue, maxValue);

        if (onChange && (0, _inRange3.default)(newValue, minValue, maxValue + 1)) {
          onChange(newValue);
        }
      };
    }, _this.handleButtonUp = function (operator) {
      return function (e) {
        if (e) e.preventDefault();
        var onChange = _this.props.onChange || _this.props.input.onChange;
        var _this$props2 = _this.props,
            minValue = _this$props2.minValue,
            maxValue = _this$props2.maxValue,
            step = _this$props2.step;


        if (!_this.pressed) {
          return;
        }

        if (_this.interval) {
          _this.stopIntervals();
          return;
        }

        if (_this.timeout) {
          _this.stopIntervals();
        }

        var oldValue = (0, _getOldValue.getOldValue)(_this.props);
        var newValue = (0, _clamp3.default)(operator(oldValue, step), minValue, maxValue);

        if (onChange && (0, _inRange3.default)(newValue, minValue, maxValue + 1)) {
          onChange(newValue);
        }
      };
    }, _this.handleButtonDown = function (operator) {
      return function (e) {
        if (e) e.preventDefault();
        var onChange = _this.props.onChange || _this.props.input.onChange;
        var _this$props3 = _this.props,
            minValue = _this$props3.minValue,
            maxValue = _this$props3.maxValue,
            step = _this$props3.step;


        if (_this.pressed) {
          return;
        }

        _this.pressed = true;

        _this.timeout = setTimeout(function () {
          _this.interval = setInterval(function () {
            var oldValue = (0, _getOldValue.getOldValue)(_this.props);
            var newValue = (0, _clamp3.default)(operator(oldValue, step), minValue, maxValue);

            if (newValue === minValue || newValue === maxValue) {
              _this.stopIntervals();
            }

            if (onChange && (0, _inRange3.default)(newValue, minValue, maxValue + 1)) {
              onChange(newValue);
            }
          }, 100);
        }, 500);
      };
    }, _this.stopIntervals = function () {
      _this.pressed = false;

      if (_this.timeout) {
        clearTimeout(_this.timeout);
        _this.timeout = null;
      }

      if (_this.interval) {
        clearInterval(_this.interval);
        _this.interval = null;
      }
    }, _this.handleInputChange = function (e) {
      var onChange = _this.props.onChange || _this.props.input.onChange;
      var value = e.target.value;
      var _this$props4 = _this.props,
          minValue = _this$props4.minValue,
          maxValue = _this$props4.maxValue;


      if (value === '') {
        return onChange(value);
      }

      var newValue = (0, _clamp3.default)(value, minValue, maxValue);

      if (onChange && (0, _inRange3.default)(newValue, minValue, maxValue + 1)) {
        onChange(newValue);
      }
    }, _this.handleInputBlur = function (e) {
      var oldValue = (0, _getOldValue.getOldValue)(_this.props);

      if (_this.props.onBlur) {
        _this.props.onBlur(e);
      }

      if (_this.props.input.onBlur) {
        _this.props.input.onBlur(oldValue);
      }
    }, _this.handleInputFocus = function (e) {
      var onFocus = _this.props.onFocus || _this.props.input.onFocus;
      if (onFocus) onFocus(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NumberInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          input = _props.input,
          placeholder = _props.placeholder,
          label = _props.label,
          disabled = _props.disabled;


      return _react2.default.createElement(
        'div',
        null,
        label && _react2.default.createElement(
          'label',
          { htmlFor: id },
          label
        ),
        _react2.default.createElement(
          'div',
          { className: 'split-group' },
          _react2.default.createElement(
            'div',
            { className: 'short' },
            _react2.default.createElement(
              _Button2.default,
              {
                disabled: disabled || (0, _getOldValue.getOldValue)(this.props) <= this.props.minValue,
                onMouseUp: this.handleButtonUp(_subtract3.default),
                onMouseDown: this.handleButtonDown(_subtract3.default),
                onTouchEnd: this.handleButtonUp(_subtract3.default),
                onTouchStart: this.handleButtonDown(_subtract3.default)
              },
              _react2.default.createElement('i', { className: 'ion-minus-round' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'long' },
          _react2.default.createElement('input', {
            pattern: '\\d*',
            min: this.props.minValue,
            max: this.props.maxValue,
            step: this.props.step,
            name: this.props.name || input.name,
            value: (0, _getOldValue.getOldValue)(this.props),
            id: id,
            placeholder: placeholder,
            disabled: disabled,
            type: 'number',
            onChange: this.handleInputChange,
            onBlur: this.handleInputBlur,
            onFocus: this.handleInputFocus
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'short' },
          _react2.default.createElement(
            _Button2.default,
            {
              disabled: disabled || (0, _getOldValue.getOldValue)(this.props) >= this.props.maxValue,
              onMouseUp: this.handleButtonUp(_add3.default),
              onMouseDown: this.handleButtonDown(_add3.default),
              onTouchEnd: this.handleButtonUp(_add3.default),
              onTouchStart: this.handleButtonDown(_add3.default)
            },
            _react2.default.createElement('i', { className: 'ion-plus-round' })
          )
        )
      );
    }
  }]);

  return NumberInput;
}(_react.Component);

NumberInput.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  label: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,

  disabled: _propTypes2.default.bool,

  minValue: _propTypes2.default.number,
  maxValue: _propTypes2.default.number,
  step: _propTypes2.default.number,

  input: _propTypes2.default.shape({
    name: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
  }),

  meta: _propTypes2.default.shape({
    active: _propTypes2.default.bool,
    asyncValidating: _propTypes2.default.bool,
    autofilled: _propTypes2.default.bool,
    dirty: _propTypes2.default.bool,
    dispatch: _propTypes2.default.func,
    error: _propTypes2.default.string,
    invalid: _propTypes2.default.bool,
    pristine: _propTypes2.default.bool,
    submitting: _propTypes2.default.bool,
    touched: _propTypes2.default.bool,
    valid: _propTypes2.default.bool,
    visited: _propTypes2.default.bool,
    warning: _propTypes2.default.string
  })
};
NumberInput.defaultProps = {
  input: {},
  meta: {}
};
exports.default = NumberInput;
module.exports = exports['default'];