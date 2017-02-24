'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _unionBy = require('lodash/unionBy');

var _unionBy2 = _interopRequireDefault(_unionBy);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Select = require('../Select');

var _Select2 = _interopRequireDefault(_Select);

var _Tag = require('../Tag');

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
          input = _this$props.input;

      var val = _this.props.value || input.value;

      if (_this.props.onBlur) return _this.props.onBlur(e);

      if (val && input && input.onBlur) {

        var _val = _this.getOldValue();

        if (simpleValue) {

          return input.onBlur(_val.map(function (v) {
            return v && v[valueKey] || v;
          }));
        }

        input.onBlur(_val);
      }
    }, _this.handleValueAdd = function (updVal) {
      var _this$props2 = _this.props,
          simpleValue = _this$props2.simpleValue,
          valueKey = _this$props2.valueKey;

      var onChange = _this.props.onChange || _this.props.input.onChange;

      var oldVal = _this.getOldValue();
      // multi => arrays merge
      var newValues = (0, _unionBy2.default)(oldVal, updVal, valueKey);

      if (onChange) {

        if (simpleValue) {
          return onChange(newValues.map(function (v) {
            return v && v[valueKey] || v;
          }));
        }

        onChange(newValues);
      }
    }, _this.handleValueRemove = function (tag) {
      return function (e) {
        if (e) e.preventDefault();

        var _this$props3 = _this.props,
            simpleValue = _this$props3.simpleValue,
            valueKey = _this$props3.valueKey;

        var onChange = _this.props.onChange || _this.props.input.onChange;

        var val = _this.getOldValue();

        var newValues = val.filter(function (t) {
          return (t && t[valueKey] || t) !== (tag && tag[valueKey] || tag);
        });

        if (onChange) {

          if (simpleValue) {
            return onChange(newValues.map(function (v) {
              return v && v[valueKey] || v;
            }));
          }

          onChange(newValues);
        }
      };
    }, _this.getOldValue = function () {
      var oldValue = []; // Array because multi

      if (!(0, _isEmpty2.default)(_this.props.input.value)) {
        return oldValue = _this.props.input.value;
      }

      if (!(0, _isEmpty2.default)(_this.props.value)) {
        return oldValue = _this.props.value;
      }

      return oldValue;
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

      var css = (0, _classnames2.default)({
        'multiselect': true,
        'multiselect-error': touched && invalid,
        'multiselect-success': touched && valid
      });

      var inputMessageCss = (0, _classnames2.default)({
        'input-message': true,
        'input-message-error': touched && invalid,
        'input-message-success': touched && valid
      });

      return _react2.default.createElement(
        'div',
        { className: css },
        label && _react2.default.createElement(
          'label',
          { htmlFor: id },
          label
        ),
        _react2.default.createElement(_Select2.default, _extends({}, selectProps, {
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
        _react2.default.createElement(
          'div',
          { className: 'multiselect-tags-wrapper' },
          value.map(function (v) {
            return _react2.default.createElement(
              _Tag2.default,
              {
                key: v[valueKey],
                color: touched && valid ? 'primary' : 'default',
                size: 'small',
                disabled: disabled
              },
              v[labelKey],
              _react2.default.createElement('i', {
                className: 'ion-close',
                onClick: _this2.handleValueRemove(v)
              })
            );
          })
        ),
        _react2.default.createElement(
          'span',
          { className: inputMessageCss },
          (dirty || touched) && invalid && error
        )
      );
    }
  }]);

  return Multiselect;
}(_react.Component);

Multiselect.propTypes = {
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  selectProps: _react.PropTypes.object.isRequired,

  name: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),

  label: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),

  valueKey: _react.PropTypes.string,
  labelKey: _react.PropTypes.string,
  simpleValue: _react.PropTypes.bool,

  disabled: _react.PropTypes.bool,

  input: _react.PropTypes.shape({
    name: _react.PropTypes.string,
    onBlur: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    onFocus: _react.PropTypes.func,
    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array])
  }),

  meta: _react.PropTypes.shape({
    active: _react.PropTypes.bool,
    asyncValidating: _react.PropTypes.bool,
    autofilled: _react.PropTypes.bool,
    dirty: _react.PropTypes.bool,
    dispatch: _react.PropTypes.func,
    error: _react.PropTypes.string,
    invalid: _react.PropTypes.bool,
    pristine: _react.PropTypes.bool,
    submitting: _react.PropTypes.bool,
    touched: _react.PropTypes.bool,
    valid: _react.PropTypes.bool,
    visited: _react.PropTypes.bool,
    warning: _react.PropTypes.string
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
    renderTags: false
  }
};
exports.default = Multiselect;
module.exports = exports['default'];