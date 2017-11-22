'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isEmpty2 = require('lodash/isEmpty');

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Select = require('../Select');

var _Select2 = _interopRequireDefault(_Select);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = require('../../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

      if (!(0, _isEmpty3.default)(_this.props.input.value)) {
        oldValue = _this.props.input.value;
        return oldValue;
      }

      if (!(0, _isEmpty3.default)(_this.props.value)) {
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


      var css = (0, _classnames2.default)({
        'select-double': true,
        'options-box': true,
        'select-double-error': touched && invalid,
        'select-double-success': touched && valid,
        done: valid
      });

      var inputMessageCss = (0, _classnames2.default)({
        'input-message': true,
        'input-message-error': touched && invalid,
        'input-message-success': touched && valid
      });

      var selectValid = Boolean(value && value.select || input.value && input.value.select);
      var selectInValid = !selectValid;

      var levelValid = Boolean(value && value.level || input.value && input.value.level);
      var levelInValid = !levelValid;

      return _react2.default.createElement(
        'div',
        { className: css },
        onRemove && _react2.default.createElement(
          'span',
          { className: 'close', onClick: !disabled && onRemove },
          _react2.default.createElement('i', { className: iconClassName })
        ),
        _react2.default.createElement(_Select2.default, {
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
        selectValid && _react2.default.createElement(_Select2.default, {
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
        _react2.default.createElement(
          'span',
          { className: inputMessageCss },
          (dirty || touched) && invalid && (0, _helpers.extractErrorMessage)(error)
        )
      );
    }
  }]);

  return DoubleSelect;
}(_react.Component);

DoubleSelect.propTypes = {
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  value: _propTypes2.default.any,
  disabled: _propTypes2.default.bool,
  disabledIfValid: _propTypes2.default.bool,
  selectOptions: _propTypes2.default.array,
  levelOptions: _propTypes2.default.array,
  iconClassName: _propTypes2.default.string,
  onInputChange: _propTypes2.default.func,

  input: _propTypes2.default.shape({
    name: _propTypes2.default.string,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onDragStart: _propTypes2.default.func,
    onDrop: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    value: _propTypes2.default.any
  }),

  meta: _propTypes2.default.shape({
    active: _propTypes2.default.bool,
    asyncValidating: _propTypes2.default.bool,
    autofilled: _propTypes2.default.bool,
    dirty: _propTypes2.default.bool,
    dispatch: _propTypes2.default.func,
    error: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
    invalid: _propTypes2.default.bool,
    pristine: _propTypes2.default.bool,
    submitting: _propTypes2.default.bool,
    touched: _propTypes2.default.bool,
    valid: _propTypes2.default.bool,
    visited: _propTypes2.default.bool,
    warning: _propTypes2.default.string
  })
};
DoubleSelect.defaultProps = {
  iconClassName: 'ion-close',
  input: {},
  meta: {}
};
exports.default = DoubleSelect;
module.exports = exports['default'];