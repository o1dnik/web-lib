'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*********
 * loadOptions - returns a promise or calls a callback with
 *               the options: function(input, [callback])
 * onChange - callback on every change of input value
 * onSelect - callback on selecting a value in the list
 * onBlur, onFocus - for the cursor placed inside/outside input
 * optionRenderer - function that gets used to render the content of an option
 * isLoading - whether the Select is loading externally or not
 * noResultsText - displayed when there are no matching search results
 *                 or a falsy value to hide it
 * simpleValue - comma-separated string of values if true or
 *               an array of selected options if false
 * clearable - should it be possible to reset value
 * searchable - whether to enable searching feature or not
 *********/
var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.arrowRenderer = _this.arrowRenderer.bind(_this);
    _this.optionRenderer = _this.optionRenderer.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    return _this;
  }

  // find all default values here:
  // https://github.com/JedWatson/react-select


  _createClass(Select, [{
    key: 'arrowRenderer',
    value: function arrowRenderer(_ref) {
      var onMouseDown = _ref.onMouseDown;
      var _props = this.props,
          arrowRenderer = _props.arrowRenderer,
          noArrow = _props.noArrow;


      if (noArrow) return _react2.default.createElement('span', null);
      if (!noArrow && !!arrowRenderer) return arrowRenderer();
      if (!noArrow && !arrowRenderer) {
        return _react2.default.createElement('span', { className: 'Select-arrow', onMouseDown: onMouseDown });
      }
    }

    // WARNING !
    // The box with items which has any number of categories in the beginning
    // of the list will render scrolled to 1st disabled=false item.

  }, {
    key: 'optionRenderer',
    value: function optionRenderer(option, key) {
      var labelKey = this.props.labelKey;


      if (option.isCategory) {
        return _react2.default.createElement(
          'div',
          { className: 'category', key: key },
          _react2.default.createElement(
            'span',
            null,
            option[labelKey]
          )
        );
      }
      return _react2.default.createElement(
        'div',
        { className: 'option', key: key },
        _react2.default.createElement(
          'span',
          null,
          option[labelKey]
        )
      );
    }

    // to make it work with redux-form:
    // https://github.com/erikras/redux-form/issues/82
    // https://github.com/JedWatson/react-select/issues/1129

  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      var _this2 = this;

      var _props2 = this.props,
          onBlur = _props2.onBlur,
          value = _props2.value,
          input = _props2.input,
          simpleValue = _props2.simpleValue,
          valueKey = _props2.valueKey;

      // the redux-form expects a value on blur

      if (typeof onBlur === 'function') return onBlur(e);

      if (!onBlur && typeof input.onBlur === 'function') {
        var _ret = function () {

          var val = value || input.value;

          if (typeof val === 'string') {
            var loc = _this2.props.options.find(function (l) {
              return l[valueKey] === val;
            });
            return {
              v: input.onBlur(simpleValue && loc && loc[valueKey] ? loc[valueKey] : loc)
            };
          }

          return {
            v: input.onBlur(val)
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          meta = _props3.meta,
          input = _props3.input,
          placeholder = _props3.placeholder,
          loadOptions = _props3.loadOptions,
          options = _props3.options,
          onInputChange = _props3.onInputChange,
          onSelect = _props3.onSelect,
          value = _props3.value,
          name = _props3.name,
          isLoading = _props3.isLoading,
          label = _props3.label,
          id = _props3.id,
          onFocus = _props3.onFocus,
          clearable = _props3.clearable,
          searchable = _props3.searchable,
          matchPos = _props3.matchPos,
          matchProp = _props3.matchProp,
          clearIconHTML = _props3.clearIconHTML,
          disabled = _props3.disabled,
          simpleValue = _props3.simpleValue,
          multi = _props3.multi,
          noResultsText = _props3.noResultsText,
          inputProps = _props3.inputProps,
          valueKey = _props3.valueKey,
          labelKey = _props3.labelKey;
      var error = meta.error,
          invalid = meta.invalid,
          valid = meta.valid,
          touched = meta.touched,
          dirty = meta.dirty;

      // option ~= {label, value, [disabled, isCategory]}

      var updOptions = options.map(function (option) {
        if (option.isCategory) {
          var _ref2;

          return _ref2 = {}, _defineProperty(_ref2, labelKey, option[labelKey]), _defineProperty(_ref2, valueKey, option[valueKey]), _defineProperty(_ref2, 'disabled', true), _defineProperty(_ref2, 'isCategory', true), _ref2;
        }
        return option;
      });

      var css = (0, _classnames2.default)({
        'select-wrapper': true,
        'select-input': true,
        'select-input-error': touched && invalid,
        'select-input-success': touched && valid
      });

      var inputMessageCss = (0, _classnames2.default)({
        'input-message': true,
        'input-message-error': touched && invalid,
        'input-message-success': touched && valid
      });

      // 'react-select' expects a function in props.valueComponent
      // If not multi - then should not pass this prop at all
      var valueComponent = {};
      if (!this.props.renderTags) valueComponent.valueComponent = function () {
        return null;
      };

      // ? use focusedOptionIndex for dropdown box item focus

      return _react2.default.createElement(
        'div',
        { className: css },
        label && _react2.default.createElement(
          'label',
          { htmlFor: id },
          label
        ),
        _react2.default.createElement(_reactSelect2.default, _extends({}, valueComponent, {
          inputProps: inputProps,
          valueKey: valueKey,
          labelKey: labelKey,
          name: name || input.name,
          placeholder: placeholder,
          value: value || input.value,
          options: updOptions,
          onInputChange: onInputChange,
          onChange: onSelect || input.onChange,
          onBlur: this.onBlur.bind(this),
          onFocus: onFocus || input.onFocus,
          loadOptions: loadOptions,
          optionRenderer: this.optionRenderer,
          isLoading: isLoading,
          noResultsText: noResultsText,
          matchPos: matchPos,
          matchProp: matchProp,
          arrowRenderer: this.arrowRenderer.bind(this),
          multi: multi,
          simpleValue: simpleValue,
          disabled: disabled,
          clearable: clearable,
          searchable: searchable,
          dangerouslySetInnerHTML: { __html: clearIconHTML } // DANGER !
        })),
        _react2.default.createElement(
          'span',
          { className: inputMessageCss },
          (dirty || touched) && invalid && error
        )
      );
    }
  }]);

  return Select;
}(_react.Component);

Select.propTypes = {
  name: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
  inputProps: _react.PropTypes.object,
  loadOptions: _react.PropTypes.bool,
  options: _react.PropTypes.array,
  optionRenderer: _react.PropTypes.bool,
  onInputChange: _react.PropTypes.func, // does NOT mutate redux-form Field data
  onSelect: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  isLoading: _react.PropTypes.bool,
  noResultsText: _react.PropTypes.bool,
  matchPos: _react.PropTypes.oneOf(['start', 'any']),
  matchProp: _react.PropTypes.oneOf(['label', 'value', 'any']),
  arrowRenderer: _react.PropTypes.func,
  multi: _react.PropTypes.bool,
  simpleValue: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  clearable: _react.PropTypes.bool,
  searchable: _react.PropTypes.bool,
  clearIcon: _react.PropTypes.string,
  valueKey: _react.PropTypes.string,
  labelKey: _react.PropTypes.string,
  label: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
  clearIconHTML: _react.PropTypes.string, // DANGER !
  noArrow: _react.PropTypes.bool,
  renderTags: _react.PropTypes.bool,

  input: _react.PropTypes.shape({
    name: _react.PropTypes.string,
    onBlur: _react.PropTypes.func,
    onChange: _react.PropTypes.func, // mutates the redux-form Field data
    onDragStart: _react.PropTypes.func,
    onDrop: _react.PropTypes.func,
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
Select.defaultProps = {
  input: {},
  meta: {},
  value: '', // react-select expects a defined value
  valueKey: 'value',
  labelKey: 'label',
  matchPos: 'start',
  matchProp: 'label',
  options: undefined,
  isLoading: false,
  simpleValue: false,
  disabled: false,
  clearable: true,
  searchable: true,
  arrowRenderer: undefined,
  renderTags: true,
  clearIconHTML: '<i class="mb-icons-cross"/>' // DANGER !
};
exports.default = Select;