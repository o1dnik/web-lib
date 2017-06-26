'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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


      var css = (0, _classnames2.default)({
        'checkbox-group': true,
        'checkbox-group-error': touched && invalid,
        'checkbox-group-success': touched && valid
      });

      var inputMessageCss = (0, _classnames2.default)({
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

        return _react2.default.createElement(_Checkbox2.default, {
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

      return _react2.default.createElement(
        'div',
        { id: id, className: css },
        label && _react2.default.createElement(
          'label',
          null,
          label
        ),
        checkboxes,
        _react2.default.createElement(
          'span',
          { className: inputMessageCss },
          (dirty || touched) && invalid && error
        )
      );
    }
  }]);

  return CheckboxGroup;
}(_react.Component);

CheckboxGroup.propTypes = {
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  oneRequired: _propTypes2.default.bool,
  simpleValue: _propTypes2.default.bool,
  options: _propTypes2.default.array,
  value: _propTypes2.default.array,

  valueKey: _propTypes2.default.string,
  labelKey: _propTypes2.default.string,

  input: _propTypes2.default.shape({
    name: _propTypes2.default.string,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object, _propTypes2.default.array])
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
CheckboxGroup.defaultProps = {
  oneRequired: false,
  simpleValue: false,
  valueKey: 'value',
  labelKey: 'label',
  options: [],
  input: {},
  meta: {}
};
exports.default = CheckboxGroup;
module.exports = exports['default'];