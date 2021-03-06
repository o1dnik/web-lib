"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require("react-select");

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = require("../../helpers");

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


      if (onBlur && typeof onBlur === "function") {
        return onBlur(e);
      }

      if (input && input.onBlur && typeof input.onBlur === "function") {
        var val = value || input.value;

        if (typeof val === "string") {
          var obj = _this.props.options.find(function (l) {
            return l[valueKey] === val;
          });

          if (simpleValue && obj && obj[valueKey]) {
            return input.onBlur(obj[valueKey]);
          } else {
            return input.onBlur(obj);
          }
        }

        return input.onBlur(val);
      }
    }, _this.mapOptions = function (options) {
      var _this$props2 = _this.props,
          labelKey = _this$props2.labelKey,
          valueKey = _this$props2.valueKey;


      return options.map(function (o) {
        if (o.isCategory) {
          var _ref2;

          return _ref2 = {}, _defineProperty(_ref2, labelKey, o[labelKey]), _defineProperty(_ref2, valueKey, o[valueKey]), _defineProperty(_ref2, "disabled", true), _defineProperty(_ref2, "isCategory", true), _ref2;
        }
        return o;
      });
    }, _this.arrowRenderer = function (_ref3) {
      var onMouseDown = _ref3.onMouseDown;
      var _this$props3 = _this.props,
          arrowRenderer = _this$props3.arrowRenderer,
          noArrow = _this$props3.noArrow;


      if (noArrow) return _react2.default.createElement("span", null);
      if (!noArrow && !!arrowRenderer) return arrowRenderer();
      if (!noArrow && !arrowRenderer) {
        return _react2.default.createElement("span", { className: "Select-arrow", onMouseDown: onMouseDown });
      }
    }, _this.optionRenderer = function (option, key) {
      var labelKey = _this.props.labelKey;


      if (option.isCategory) {
        return _react2.default.createElement(
          "div",
          { className: "category", key: key },
          _react2.default.createElement(
            "span",
            null,
            option[labelKey]
          )
        );
      }
      return _react2.default.createElement(
        "div",
        { className: "option", key: key },
        _react2.default.createElement(
          "span",
          null,
          option[labelKey]
        )
      );
    }, _this.handleSelectRef = function (element) {
      _this.element = element;
    }, _this.handleOpen = function () {
      var val = _this.props.value || _this.props.input.value;
      if (_this.element && !val && _this.props.options.some(function (e) {
        return e.isCategory;
      })) {
        _this.element.hasScrolledToOption = true;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // this represents only our props, for full list react-select props
  // see https://github.com/JedWatson/react-select#further-options


  _createClass(Select, [{
    key: "render",
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
          rest = _objectWithoutProperties(_props, ["id", "input", "value", "name", "meta", "label", "options", "renderTags", "onChange", "onFocus", "clearIconHTML"]);

      var error = meta.error,
          invalid = meta.invalid,
          valid = meta.valid,
          touched = meta.touched,
          dirty = meta.dirty;

      // option ~= {label, value, [disabled, isCategory]}

      var updOptions = this.mapOptions(options);

      var css = (0, _classnames2.default)({
        "select-wrapper": true,
        "select-input": true,
        "select-input-error": touched && invalid,
        "select-input-success": touched && valid
      });

      var inputMessageCss = (0, _classnames2.default)({
        "input-message": true,
        "input-message-error": touched && invalid,
        "input-message-success": touched && valid
      });

      // 'react-select' expects a function in props.valueComponent
      // If not multi - then should not pass this prop at all
      var valueComponent = {};
      if (!renderTags) valueComponent.valueComponent = function () {
        return null;
      };

      var val = value || input.value;

      if (val === "") {
        val = null;
      }

      return _react2.default.createElement(
        "div",
        { className: css, id: "ghost-" + id },
        label && _react2.default.createElement(
          "label",
          { htmlFor: id },
          label
        ),
        _react2.default.createElement(_reactSelect2.default, _extends({}, rest, valueComponent, {
          name: name || input.name,
          value: val,
          onChange: onChange || input.onChange,
          onFocus: onFocus || input.onFocus,
          ref: this.handleSelectRef,
          onOpen: this.handleOpen,
          onBlur: this.handleBlur,
          optionRenderer: this.optionRenderer,
          arrowRenderer: this.arrowRenderer,
          options: updOptions,
          dangerouslySetInnerHTML: { __html: clearIconHTML }
        })),
        _react2.default.createElement(
          "span",
          { className: inputMessageCss },
          (dirty || touched) && invalid && (0, _helpers.extractErrorMessage)(error)
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
  name: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array, _propTypes2.default.object]),
  options: _propTypes2.default.array,
  optionRenderer: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  matchPos: _propTypes2.default.oneOf(["start", "any"]),
  matchProp: _propTypes2.default.oneOf(["label", "value", "any"]),
  arrowRenderer: _propTypes2.default.func,
  simpleValue: _propTypes2.default.bool,
  valueKey: _propTypes2.default.string,
  labelKey: _propTypes2.default.string,
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  clearIconHTML: _propTypes2.default.string, // DANGER !
  noArrow: _propTypes2.default.bool,
  renderTags: _propTypes2.default.bool,

  input: _propTypes2.default.shape({
    name: _propTypes2.default.string,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func, // mutates the redux-form Field data
    onDragStart: _propTypes2.default.func,
    onDrop: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array, _propTypes2.default.object])
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
Select.defaultProps = {
  input: {},
  meta: {},
  value: "", // react-select expects a defined value
  valueKey: "value",
  labelKey: "label",
  matchPos: "start",
  matchProp: "label",
  options: [],
  simpleValue: false,
  renderTags: true,
  clearIconHTML: "<i class='mb-icons-cross'/>" // DANGER !
};
exports.default = Select;
module.exports = exports["default"];