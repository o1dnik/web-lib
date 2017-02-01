'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.handleBlur = function (e) {
      var _this$props = _this.props,
          onBlur = _this$props.onBlur,
          value = _this$props.value,
          input = _this$props.input,
          simpleValue = _this$props.simpleValue,
          valueKey = _this$props.valueKey;


      if (onBlur && typeof onBlur === 'function') {
        return onBlur(e);
      }

      if (input && input.onBlur && typeof input.onBlur === 'function') {
        var _ret2 = function () {

          var val = value || input.value;

          if (typeof val === 'string') {
            var obj = _this.props.options.find(function (l) {
              return l[valueKey] === val;
            });

            if (simpleValue && obj && obj[valueKey]) {
              return {
                v: input.onBlur(obj[valueKey])
              };
            } else {
              return {
                v: input.onBlur(obj)
              };
            }
          }

          return {
            v: input.onBlur(val)
          };
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
      }
    }, _this.mapOptions = function (options) {
      var _this$props2 = _this.props,
          labelKey = _this$props2.labelKey,
          valueKey = _this$props2.valueKey;


      return options.map(function (o) {
        if (o.isCategory) {
          var _ref2;

          return _ref2 = {}, _defineProperty(_ref2, labelKey, o[labelKey]), _defineProperty(_ref2, valueKey, o[valueKey]), _defineProperty(_ref2, 'disabled', true), _defineProperty(_ref2, 'isCategory', true), _ref2;
        }
        return o;
      });
    }, _this.arrowRenderer = function (_ref3) {
      var onMouseDown = _ref3.onMouseDown;
      var _this$props3 = _this.props,
          arrowRenderer = _this$props3.arrowRenderer,
          noArrow = _this$props3.noArrow;


      if (noArrow) return _react2.default.createElement('span', null);
      if (!noArrow && !!arrowRenderer) return arrowRenderer();
      if (!noArrow && !arrowRenderer) {
        return _react2.default.createElement('span', { className: 'Select-arrow', onMouseDown: onMouseDown });
      }
    }, _this.optionRenderer = function (option, key) {
      var labelKey = _this.props.labelKey;


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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // this represents only our props, for full list react-select props
  // see https://github.com/JedWatson/react-select#further-options


  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          input = _props.input,
          value = _props.value,
          name = _props.name,
          meta = _props.meta,
          label = _props.label,
          options = _props.options,
          renderTags = _props.renderTags,
          onChange = _props.onChange,
          onFocus = _props.onFocus,
          clearIconHTML = _props.clearIconHTML,
          rest = _objectWithoutProperties(_props, ['id', 'input', 'value', 'name', 'meta', 'label', 'options', 'renderTags', 'onChange', 'onFocus', 'clearIconHTML']);

      var error = meta.error,
          invalid = meta.invalid,
          valid = meta.valid,
          touched = meta.touched,
          dirty = meta.dirty;

      // option ~= {label, value, [disabled, isCategory]}

      var updOptions = this.mapOptions(options);

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
      if (!renderTags) valueComponent.valueComponent = function () {
        return null;
      };

      return _react2.default.createElement(
        'div',
        { className: css },
        label && _react2.default.createElement(
          'label',
          { htmlFor: id },
          label
        ),
        _react2.default.createElement(_reactSelect2.default, _extends({}, rest, valueComponent, {
          name: name || input.name,
          value: value || input.value,
          onChange: onChange || input.onChange,
          onFocus: onFocus || input.onFocus,
          onBlur: this.handleBlur,
          optionRenderer: this.optionRenderer,
          arrowRenderer: this.arrowRenderer,
          options: updOptions,
          dangerouslySetInnerHTML: { __html: clearIconHTML }
        })),
        _react2.default.createElement(
          'span',
          { className: inputMessageCss },
          (dirty || touched) && invalid && error
        )
      );
    }

    // to make it work with redux-form:
    // https://github.com/erikras/redux-form/issues/82
    // https://github.com/JedWatson/react-select/issues/1129


    // WARNING !
    // The box with items which has any number of categories in the beginning
    // of the list will render scrolled to 1st disabled=false item.

  }]);

  return Select;
}(_react.Component);

Select.propTypes = {

  name: _react.PropTypes.string,
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
  options: _react.PropTypes.array,
  optionRenderer: _react.PropTypes.bool,
  onChange: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  matchPos: _react.PropTypes.oneOf(['start', 'any']),
  matchProp: _react.PropTypes.oneOf(['label', 'value', 'any']),
  arrowRenderer: _react.PropTypes.func,
  simpleValue: _react.PropTypes.bool,
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
  options: [],
  simpleValue: false,
  renderTags: true,
  clearIconHTML: '<i class=\'mb-icons-cross\'/>' // DANGER !
};
exports.default = Select;
module.exports = exports['default'];