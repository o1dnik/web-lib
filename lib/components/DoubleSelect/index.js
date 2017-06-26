import _isEmpty from 'lodash/isEmpty';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Select from '../Select';
import cn from 'classnames';

var DoubleSelect = function (_Component) {
  _inherits(DoubleSelect, _Component);

  function DoubleSelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DoubleSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DoubleSelect.__proto__ || Object.getPrototypeOf(DoubleSelect)).call.apply(_ref, [this].concat(args))), _this), _this.handleSelectChange = function (selectValue) {
      var onChange = _this.props.onChange || _this.props.input.onChange;

      var oldVal = _this.getOldValue();

      var newVal = _extends({}, oldVal, {
        select: selectValue && selectValue.value || selectValue
      });

      onChange(newVal, oldVal);
    }, _this.handleSelectBlur = function (e) {
      if (_this.props.onBlur) {
        return _this.props.onBlur(e);
      }

      if (_this.props.input.onBlur) {
        _this.props.input.onBlur(_this.getOldValue());
      }
    }, _this.handleSelectFocus = function (e) {
      var onFocus = _this.props.onFocus || _this.props.input.onFocus;
      onFocus && onFocus(e);
    }, _this.handleLevelChange = function (level) {
      var onChange = _this.props.onChange || _this.props.input.onChange;

      var oldVal = _this.getOldValue();

      var newVal = _extends({}, oldVal, {
        level: level && level.value || level
      });

      onChange(newVal, oldVal);
    }, _this.handleLevelBlur = function (e) {
      if (_this.props.onBlur) {
        return _this.props.onBlur(e);
      }

      if (_this.props.input.onBlur) {
        _this.props.input.onBlur(_this.getOldValue());
      }
    }, _this.handleLevelFocus = function (e) {
      var onFocus = _this.props.onFocus || _this.props.input.onFocus;
      onFocus && onFocus(e);
    }, _this.getOldValue = function () {
      var oldValue = {};

      if (!_isEmpty(_this.props.input.value)) {
        oldValue = _this.props.input.value;
        return oldValue;
      }

      if (!_isEmpty(_this.props.value)) {
        oldValue = _this.props.value;
        return oldValue;
      }

      return oldValue;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DoubleSelect, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          selectOptions = _props.selectOptions,
          levelOptions = _props.levelOptions,
          input = _props.input,
          meta = _props.meta;
      var _props2 = this.props,
          subLabel = _props2.subLabel,
          label = _props2.label,
          onRemove = _props2.onRemove,
          iconClassName = _props2.iconClassName,
          disabled = _props2.disabled;
      var _props3 = this.props,
          searchableSelect = _props3.searchableSelect,
          isLoading = _props3.isLoading,
          disabledIfValid = _props3.disabledIfValid;
      var error = meta.error,
          invalid = meta.invalid,
          valid = meta.valid,
          touched = meta.touched,
          dirty = meta.dirty;


      var css = cn({
        'select-double': true,
        'options-box': true,
        'select-double-error': touched && invalid,
        'select-double-success': touched && valid,
        done: valid
      });

      var inputMessageCss = cn({
        'input-message': true,
        'input-message-error': touched && invalid,
        'input-message-success': touched && valid
      });

      var selectValid = Boolean(value && value.select || input.value && input.value.select);
      var selectInValid = !selectValid;

      var levelValid = Boolean(value && value.level || input.value && input.value.level);
      var levelInValid = !levelValid;

      return React.createElement(
        'div',
        { className: css },
        onRemove && React.createElement(
          'span',
          { className: 'close', onClick: !disabled && onRemove },
          React.createElement('i', { className: iconClassName })
        ),
        React.createElement(Select, {
          label: label,
          value: value && value.select || input.value && input.value.select,
          onInputChange: this.props.onInputChange,
          onChange: this.handleSelectChange,
          onBlur: this.handleSelectBlur,
          onFocus: this.handleSelectFocus,
          noArrow: disabled || disabledIfValid && valid,
          options: selectOptions,
          clearable: false,
          meta: {
            touched: touched,
            valid: selectValid,
            invalid: selectInValid
          },
          searchable: searchableSelect,
          isLoading: isLoading,
          disabled: disabled || disabledIfValid && valid
        }),
        selectValid && React.createElement(Select, {
          label: subLabel,
          value: value && value.level || input.value && input.value.level,
          onChange: this.handleLevelChange,
          onBlur: this.handleLevelBlur,
          onFocus: this.handleLevelFocus,
          options: levelOptions,
          clearable: false,
          searchable: false,
          meta: {
            touched: touched,
            valid: levelValid,
            invalid: levelInValid
          },
          noArrow: disabled,
          disabled: disabled
        }),
        React.createElement(
          'span',
          { className: inputMessageCss },
          (dirty || touched) && invalid && error
        )
      );
    }
  }]);

  return DoubleSelect;
}(Component);

DoubleSelect.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  disabledIfValid: PropTypes.bool,
  selectOptions: PropTypes.array,
  levelOptions: PropTypes.array,
  iconClassName: PropTypes.string,
  onInputChange: PropTypes.func,

  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.any
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
DoubleSelect.defaultProps = {
  iconClassName: 'ion-close',
  input: {},
  meta: {}
};


export default DoubleSelect;