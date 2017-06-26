import _subtract from 'lodash/subtract';
import _add from 'lodash/add';
import _inRange from 'lodash/inRange';
import _clamp from 'lodash/clamp';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getOldValue } from '../../helpers/getOldValue';

import Button from '../Button';

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
        var oldValue = getOldValue(_this.props);
        var _this$props = _this.props,
            minValue = _this$props.minValue,
            maxValue = _this$props.maxValue,
            step = _this$props.step;


        var newValue = _clamp(operator(oldValue, step), minValue, maxValue);

        if (onChange && _inRange(newValue, minValue, maxValue + 1)) {
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

        var oldValue = getOldValue(_this.props);
        var newValue = _clamp(operator(oldValue, step), minValue, maxValue);

        if (onChange && _inRange(newValue, minValue, maxValue + 1)) {
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
            var oldValue = getOldValue(_this.props);
            var newValue = _clamp(operator(oldValue, step), minValue, maxValue);

            if (newValue === minValue || newValue === maxValue) {
              _this.stopIntervals();
            }

            if (onChange && _inRange(newValue, minValue, maxValue + 1)) {
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

      var newValue = _clamp(value, minValue, maxValue);

      if (onChange && _inRange(newValue, minValue, maxValue + 1)) {
        onChange(newValue);
      }
    }, _this.handleInputBlur = function (e) {
      var oldValue = getOldValue(_this.props);

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


      return React.createElement(
        'div',
        null,
        label && React.createElement(
          'label',
          { htmlFor: id },
          label
        ),
        React.createElement(
          'div',
          { className: 'split-group' },
          React.createElement(
            'div',
            { className: 'short' },
            React.createElement(
              Button,
              {
                disabled: disabled || getOldValue(this.props) <= this.props.minValue,
                onMouseUp: this.handleButtonUp(_subtract),
                onMouseDown: this.handleButtonDown(_subtract),
                onTouchEnd: this.handleButtonUp(_subtract),
                onTouchStart: this.handleButtonDown(_subtract)
              },
              React.createElement('i', { className: 'ion-minus-round' })
            )
          ),
          React.createElement(
            'div',
            { className: 'long' },
            React.createElement('input', {
              pattern: '\\d*',
              min: this.props.minValue,
              max: this.props.maxValue,
              step: this.props.step,
              name: this.props.name || input.name,
              value: getOldValue(this.props),
              id: id,
              placeholder: placeholder,
              disabled: disabled,
              type: 'number',
              onChange: this.handleInputChange,
              onBlur: this.handleInputBlur,
              onFocus: this.handleInputFocus
            })
          ),
          React.createElement(
            'div',
            { className: 'short' },
            React.createElement(
              Button,
              {
                disabled: disabled || getOldValue(this.props) >= this.props.maxValue,
                onMouseUp: this.handleButtonUp(_add),
                onMouseDown: this.handleButtonDown(_add),
                onTouchEnd: this.handleButtonUp(_add),
                onTouchStart: this.handleButtonDown(_add)
              },
              React.createElement('i', { className: 'ion-plus-round' })
            )
          )
        )
      );
    }
  }]);

  return NumberInput;
}(Component);

NumberInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  label: PropTypes.string,
  placeholder: PropTypes.string,

  disabled: PropTypes.bool,

  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  step: PropTypes.number,

  input: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }),

  meta: PropTypes.shape({
    active: PropTypes.bool,
    asyncValidating: PropTypes.bool,
    autofilled: PropTypes.bool,
    dirty: PropTypes.bool,
    dispatch: PropTypes.func,
    error: PropTypes.string,
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    touched: PropTypes.bool,
    valid: PropTypes.bool,
    visited: PropTypes.bool,
    warning: PropTypes.string
  })
};
NumberInput.defaultProps = {
  input: {},
  meta: {}
};


export default NumberInput;
module.exports = exports['default'];