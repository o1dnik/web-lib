import _isEmpty from 'lodash/isEmpty';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Select from '../Select';
import Tag from '../Tag/index';
import cn from 'classnames';

var SelectWithLevels = function (_Component) {
  _inherits(SelectWithLevels, _Component);

  function SelectWithLevels() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectWithLevels);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectWithLevels.__proto__ || Object.getPrototypeOf(SelectWithLevels)).call.apply(_ref, [this].concat(args))), _this), _this.getCurrentTagProps = function (currentTag) {
      var disabled = _this.props.disabled;

      // use gel old values, case its object with empty strings propetrys by
      // default

      var currentValue = _this.getOldValue();

      var props = {
        key: currentTag.value,
        size: 'medium',
        disabled: disabled,
        onClick: _this.handleLevelChange(currentTag.value)

        // currentTag.value - from options
        // currentValue.level - from selected value
      };if (currentTag.value === currentValue.level) {
        props.color = 'primary';
        props.bordered = true;
      } else {
        props.color = 'default';
        props.value = true;
      }

      return props;
    }, _this.handleSelectChange = function (selectValue) {
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
      return function (e) {
        if (e) e.preventDefault();
        var onChange = _this.props.onChange || _this.props.input.onChange;

        var oldVal = _this.getOldValue();

        var newVal = _extends({}, oldVal, { level: level });

        onChange(newVal, oldVal);
        setTimeout(function () {
          return _this.handleSelectBlur();
        }, 1000);
      };
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

  _createClass(SelectWithLevels, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

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
      var disabledIfValid = this.props.disabledIfValid;
      var error = meta.error,
          invalid = meta.invalid,
          valid = meta.valid,
          touched = meta.touched,
          dirty = meta.dirty;


      var css = cn({
        'select-with-levels': true,
        'options-box': true,
        'select-with-levels-error': touched && invalid,
        'select-with-levels-success': touched && valid,
        done: valid
      });

      var inputMessageCss = cn({
        'input-message': true,
        'input-message-error': touched && invalid,
        'input-message-success': touched && valid
      });

      var selectValid = Boolean(value && value.select || input.value && input.value.select);
      var selectInValid = !selectValid;

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
          options: selectOptions,
          clearable: false,
          searchable: false,
          meta: {
            touched: touched,
            valid: selectValid,
            invalid: selectInValid
          },
          noArrow: disabled || disabledIfValid && valid,
          disabled: disabled || disabledIfValid && valid
        }),
        selectValid && React.createElement(
          'div',
          null,
          React.createElement(
            'label',
            null,
            subLabel
          ),
          React.createElement(
            'div',
            { className: 'select-with-levels-tags-wrapper' },
            levelOptions.map(function (o) {
              return React.createElement(
                Tag,
                _this2.getCurrentTagProps(o),
                o.label
              );
            })
          )
        ),
        React.createElement(
          'span',
          { className: inputMessageCss },
          (dirty || touched) && invalid && error
        )
      );
    }
  }]);

  return SelectWithLevels;
}(Component);

SelectWithLevels.propTypes = {
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
SelectWithLevels.defaultProps = {
  iconClassName: 'ion-close',
  input: {},
  meta: {}
};


export default SelectWithLevels;
module.exports = exports['default'];