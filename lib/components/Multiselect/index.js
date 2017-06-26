import _union from 'lodash/union';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import cn from 'classnames';
import Select from '../Select';
import Tag from '../Tag';

var Multiselect = function (_Component) {
  _inherits(Multiselect, _Component);

  function Multiselect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Multiselect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Multiselect.__proto__ || Object.getPrototypeOf(Multiselect)).call.apply(_ref, [this].concat(args))), _this), _this.handleBlur = function (e) {
      var _this$props = _this.props,
          simpleValue = _this$props.simpleValue,
          valueKey = _this$props.valueKey,
          input = _this$props.input,
          selectProps = _this$props.selectProps;

      var val = _this.props.value || input.value;

      if (_this.props.onBlur) return _this.props.onBlur(e);

      if (val && input && input.onBlur) {
        if (simpleValue) {
          return input.onBlur(val);
        }

        input.onBlur(selectProps.options.filter(function (o) {
          return val.includes(o && o[valueKey] || o);
        }));
      }
    }, _this.handleValueAdd = function (updVal) {
      var _this$props2 = _this.props,
          simpleValue = _this$props2.simpleValue,
          valueKey = _this$props2.valueKey,
          input = _this$props2.input,
          selectProps = _this$props2.selectProps;

      var onChange = _this.props.onChange || input.onChange;
      var val = _this.props.value || input.value;

      // multi => arrays merge
      var newValues = _union(val, updVal.map(function (v) {
        return v && v[valueKey] || v;
      }));

      if (onChange && newValues) {
        if (simpleValue) {
          return onChange(newValues);
        }

        onChange(selectProps.options.filter(function (o) {
          return newValues.includes(o && o[valueKey] || o);
        }));
      }
    }, _this.handleValueRemove = function (tag) {
      return function (e) {
        if (e) e.preventDefault();

        var _this$props3 = _this.props,
            simpleValue = _this$props3.simpleValue,
            valueKey = _this$props3.valueKey,
            input = _this$props3.input,
            selectProps = _this$props3.selectProps;

        var onChange = _this.props.onChange || input.onChange;
        var val = _this.props.value || input.value;

        var newValues = val.filter(function (v) {
          return v !== tag;
        });

        if (onChange) {
          if (simpleValue) {
            return onChange(newValues);
          }

          onChange(selectProps.options.filter(function (o) {
            return newValues.includes(o && o[valueKey] || o);
          }));
        }
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Multiselect, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          meta = _props.meta,
          input = _props.input,
          label = _props.label,
          id = _props.id,
          disabled = _props.disabled,
          valueKey = _props.valueKey,
          labelKey = _props.labelKey;
      var error = meta.error,
          invalid = meta.invalid,
          touched = meta.touched,
          dirty = meta.dirty,
          valid = meta.valid;

      var value = this.props.value || input.value;
      var selectProps = Object.assign({}, Multiselect.defaultProps.selectProps, this.props.selectProps);

      var css = cn({
        'multiselect': true,
        'multiselect-error': touched && invalid,
        'multiselect-success': touched && valid
      });

      var inputMessageCss = cn({
        'input-message': true,
        'input-message-error': touched && invalid,
        'input-message-success': touched && valid
      });

      return React.createElement(
        'div',
        { className: css },
        label && React.createElement(
          'label',
          { htmlFor: id },
          label
        ),
        React.createElement(Select, _extends({}, selectProps, {
          name: this.props.name || input.name,
          disabled: selectProps.disabled || disabled,
          noArrow: selectProps.noArrow || disabled,
          value: value,
          valueKey: valueKey,
          labelKey: labelKey,
          onChange: this.handleValueAdd,
          onBlur: this.handleBlur,
          onFocus: this.props.onFocus || input.onFocus
        })),
        React.createElement(
          'div',
          { className: 'multiselect-tags-wrapper' },
          value.map(function (v) {
            var item = selectProps.options.find(function (o) {
              return o[valueKey] === v;
            });

            if (!item || !item[labelKey]) return null;

            return React.createElement(
              Tag,
              {
                key: v,
                color: touched && valid ? 'primary' : 'default',
                size: 'small',
                disabled: disabled
              },
              item[labelKey],
              React.createElement('i', {
                className: 'ion-close',
                onClick: _this2.handleValueRemove(v)
              })
            );
          })
        ),
        React.createElement(
          'span',
          { className: inputMessageCss },
          (dirty || touched) && invalid && error
        )
      );
    }
  }]);

  return Multiselect;
}(Component);

Multiselect.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectProps: PropTypes.object.isRequired,

  name: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.string),

  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
  simpleValue: PropTypes.bool,

  disabled: PropTypes.bool,

  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.arrayOf(PropTypes.string)
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
Multiselect.defaultProps = {
  input: {},
  meta: {},
  valueKey: 'value',
  labelKey: 'label',
  simpleValue: false,
  selectProps: {
    multi: true,
    renderTags: false,
    options: []
  }
};


export default Multiselect;
module.exports = exports['default'];