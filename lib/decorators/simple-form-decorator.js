"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapValues2 = require("lodash/mapValues");

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _has2 = require("lodash/has");

var _has3 = _interopRequireDefault(_has2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (options) {
  options = _extends({ initialValues: {}, validators: {} }, options);

  return function (Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
      _inherits(SimpleFormDecorator, _React$Component);

      function SimpleFormDecorator(props, context) {
        _classCallCheck(this, SimpleFormDecorator);

        var _this = _possibleConstructorReturn(this, (SimpleFormDecorator.__proto__ || Object.getPrototypeOf(SimpleFormDecorator)).call(this, props, context));

        _this.handleFieldChange = function (e) {
          if (e) e.preventDefault();

          var _e$target = e.target,
              value = _e$target.value,
              name = _e$target.name;


          var error = _this.validateField(value, name);

          _this.setState(function (prevState) {
            var dirty = _extends({}, prevState.dirty, _defineProperty({}, name, value !== prevState.initialValues[name]));

            var errors = _extends({}, prevState.errors, _defineProperty({}, name, error));

            return {
              values: _extends({}, prevState.values, _defineProperty({}, name, value)),
              dirty: dirty,
              errors: errors,
              isDirty: Object.keys(dirty).some(function (i) {
                return dirty[i] !== false;
              }),
              isValid: Object.keys(errors).every(function (i) {
                return errors[i] === null;
              })
            };
          });
        };

        _this.handleFieldBlur = function (e) {
          if (e) e.preventDefault();

          var _e$target2 = e.target,
              value = _e$target2.value,
              name = _e$target2.name;


          var error = _this.validateField(value, name);

          _this.setState(function (prevState) {
            var touched = _extends({}, prevState.touched, _defineProperty({}, name, true));
            var errors = _extends({}, prevState.errors, _defineProperty({}, name, error));

            return {
              touched: touched,
              errors: errors,
              isTouched: Object.keys(touched).some(function (i) {
                return touched[i] === true;
              }),
              isValid: Object.keys(errors).every(function (i) {
                return errors[i] === null;
              })
            };
          });
        };

        _this.validateField = function (value, name) {
          var validators = _this.props.validators;


          var error = null;

          if ((0, _has3.default)(validators, name) && Array.isArray(validators[name])) {
            validators[name].forEach(function (fn) {
              if (error) return;
              error = fn(value, _this.state.values);
            });
          }

          return error;
        };

        _this.getMetaForField = function (name) {
          var _this$state = _this.state,
              errors = _this$state.errors,
              touched = _this$state.touched,
              dirty = _this$state.dirty;


          return {
            touched: touched[name],
            invalid: errors[name] !== null,
            dirty: dirty[name],
            valid: errors[name] === null,
            error: errors[name]
          };
        };

        _this.resetForm = function (e) {
          if (e) e.preventDefault();

          _this.setState(function (prevState) {
            return {
              values: _extends({}, prevState.initialValues),
              dirty: (0, _mapValues3.default)(prevState.initialValues, function () {
                return false;
              }),
              errors: (0, _mapValues3.default)(prevState.initialValues, function () {
                return null;
              }),
              touched: (0, _mapValues3.default)(prevState.initialValues, function () {
                return false;
              }),
              isDirty: false,
              isTouched: false,
              isValid: false
            };
          });
        };

        _this.reinitializeForm = function (values) {
          _this.setState(function (prevState) {
            return {
              initialValues: _extends({}, Object.assign({}, values || prevState.values)),

              values: _extends({}, Object.assign({}, values || prevState.values)),

              dirty: (0, _mapValues3.default)(Object.assign({}, values || prevState.values), function () {
                return false;
              }),
              errors: (0, _mapValues3.default)(Object.assign({}, values || prevState.values), function () {
                return null;
              }),
              touched: (0, _mapValues3.default)(Object.assign({}, values || prevState.values), function () {
                return false;
              }),

              isDirty: false,
              isTouched: false,
              isValid: false
            };
          });
        };

        _this.state = {
          initialValues: _extends({}, _this.props.initialValues),
          values: _extends({}, _this.props.initialValues),
          dirty: (0, _mapValues3.default)(_this.props.initialValues, function () {
            return false;
          }),
          touched: (0, _mapValues3.default)(_this.props.initialValues, function () {
            return false;
          }),
          isDirty: false,
          isTouched: false
        };

        _this.state.errors = (0, _mapValues3.default)(_this.props.initialValues, function (val, key) {
          return _this.validateField(val, key);
        });

        _this.state.isValid = Object.keys(_this.state.errors).every(function (i) {
          return _this.state.errors[i] === null;
        });
        return _this;
      }

      _createClass(SimpleFormDecorator, [{
        key: "render",
        value: function render() {
          return _react2.default.createElement(Component, _extends({}, this.props, this.state, {
            handleFieldChange: this.handleFieldChange,
            handleFieldBlur: this.handleFieldBlur,
            getMetaForField: this.getMetaForField,
            resetForm: this.resetForm,
            reinitializeForm: this.reinitializeForm
          }));
        }
      }]);

      return SimpleFormDecorator;
    }(_react2.default.Component), _class.propTypes = {
      onSubmit: _propTypes2.default.func,

      submitting: _propTypes2.default.bool,

      validators: _propTypes2.default.object,

      initialValues: _propTypes2.default.object
    }, _class.defaultProps = {
      submitting: false,
      initialValues: options.initialValues,
      validators: options.validators
    }, _temp;
  };
};

module.exports = exports["default"];