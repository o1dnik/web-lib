var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Checkbox from '../Checkbox';
import cn from 'classnames';

var CheckboxGroup = function (_Component) {
  _inherits(CheckboxGroup, _Component);

  function CheckboxGroup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CheckboxGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call.apply(_ref, [this].concat(args))), _this), _this.handleBlur = function () {
      var onBlur = _this.props.onBlur || _this.props.input.onBlur;
      var val = _this.props.value || _this.props.input.value;
      var _this$props = _this.props,
          simpleValue = _this$props.simpleValue,
          valueKey = _this$props.valueKey;


      if (val && onBlur) {
        if (simpleValue) {
          return onBlur(val.map(function (v) {
            return v && v[valueKey] || v;
          }));
        }

        onBlur(val);
      }
    }, _this.handleFocus = function (e) {
      var onFocus = _this.props.onFocus || _this.props.input.onFocus;
      onFocus && onFocus(e);
    }, _this.handleChange = function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          checked = _e$target.checked;
      var _this$props2 = _this.props,
          options = _this$props2.options,
          oneRequired = _this$props2.oneRequired,
          simpleValue = _this$props2.simpleValue,
          valueKey = _this$props2.valueKey,
          labelKey = _this$props2.labelKey;

      var onChange = _this.props.onChange || _this.props.input.onChange;
      var oldValue = _this.props.value || _this.props.input.value;

      var newValue = void 0;

      if (checked) {
        var _oldValue$concat;

        newValue = oldValue.concat((_oldValue$concat = {}, _defineProperty(_oldValue$concat, valueKey, name), _defineProperty(_oldValue$concat, labelKey, options.find(function (i) {
          return i[valueKey] === name;
        })[labelKey] || ''), _oldValue$concat));
      } else {
        newValue = oldValue.filter(function (i) {
          return (i && i[valueKey] || i) !== name;
        });
        if (oneRequired && newValue.length < 1) {
          newValue = [].concat(_toConsumableArray(oldValue));
        }
      }

      if (newValue && onChange) {
        if (simpleValue) {
          return onChange(newValue.map(function (v) {
            return v && v[valueKey] || v;
          }), oldValue.map(function (v) {
            return v && v[valueKey] || v;
          }));
        }

        onChange(newValue, oldValue);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CheckboxGroup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          input = _props.input,
          meta = _props.meta,
          label = _props.label,
          options = _props.options,
          value = _props.value,
          disabled = _props.disabled,
          valueKey = _props.valueKey,
          labelKey = _props.labelKey;
      var error = meta.error,
          invalid = meta.invalid,
          valid = meta.valid,
          touched = meta.touched,
          dirty = meta.dirty;


      var css = cn({
        'checkbox-group': true,
        'checkbox-group-error': touched && invalid,
        'checkbox-group-success': touched && valid
      });

      var inputMessageCss = cn({
        'input-message': true,
        'input-message-error': touched && invalid,
        'input-message-success': touched && valid
      });

      var checkboxes = options.map(function (o) {
        var checked = false;

        if (input.value) {
          checked = input.value.map(function (i) {
            return i && i[valueKey] || i;
          }).includes(o[valueKey]);
        }

        if (value) {
          checked = value.map(function (i) {
            return i && i[valueKey] || i;
          }).includes(o[valueKey]);
        }

        return React.createElement(Checkbox, {
          name: o[valueKey],
          id: o[valueKey] + o[labelKey],
          key: o[valueKey] || o[labelKey],
          label: o[labelKey] || o[valueKey],
          onBlur: _this2.handleBlur,
          onFocus: _this2.handleFocus,
          onChange: _this2.handleChange,
          checked: checked,
          disabled: disabled
        });
      });

      return React.createElement(
        'div',
        { id: id, className: css },
        label && React.createElement(
          'label',
          null,
          label
        ),
        checkboxes,
        React.createElement(
          'span',
          { className: inputMessageCss },
          (dirty || touched) && invalid && error
        )
      );
    }
  }]);

  return CheckboxGroup;
}(Component);

CheckboxGroup.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  oneRequired: PropTypes.bool,
  simpleValue: PropTypes.bool,
  options: PropTypes.array,
  value: PropTypes.array,

  valueKey: PropTypes.string,
  labelKey: PropTypes.string,

  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array])
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
CheckboxGroup.defaultProps = {
  oneRequired: false,
  simpleValue: false,
  valueKey: 'value',
  labelKey: 'label',
  options: [],
  input: {},
  meta: {}
};


export default CheckboxGroup;
module.exports = exports['default'];