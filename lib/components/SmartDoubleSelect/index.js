'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Select = require('../Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SmartDoubleSelect = function (_Component) {
  _inherits(SmartDoubleSelect, _Component);

  function SmartDoubleSelect() {
    _classCallCheck(this, SmartDoubleSelect);

    return _possibleConstructorReturn(this, (SmartDoubleSelect.__proto__ || Object.getPrototypeOf(SmartDoubleSelect)).apply(this, arguments));
  }

  _createClass(SmartDoubleSelect, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          levelProps = _props.levelProps,
          selectProps = _props.selectProps,
          onRemove = _props.onRemove,
          select = _props.select,
          level = _props.level,
          resetLevelOnSelectChange = _props.resetLevelOnSelectChange;


      var valid = select.meta.valid && level.meta.valid;

      var levelDisabled = Boolean(!select.input.value || select.meta.invalid);

      var selectDisabled = selectProps.disabledIfValid && select.meta.valid;

      var css = (0, _classnames2.default)({
        'smart-double-select': true,
        'options-box': true,
        done: valid
      });

      return _react2.default.createElement(
        'div',
        { className: css },
        onRemove && _react2.default.createElement(
          'span',
          { className: 'close', onClick: onRemove },
          _react2.default.createElement('i', { className: 'ion-close' })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_reduxForm.Field, _extends({
            name: 'select',
            component: _Select2.default,
            onChange: function onChange() {
              resetLevelOnSelectChange && level.input.onChange('');
            },
            disabled: selectDisabled
          }, selectProps, {
            noArrow: selectProps.disabled
          })),
          _react2.default.createElement(_reduxForm.Field, _extends({
            name: 'level',
            component: _Select2.default,
            disabled: levelDisabled || levelProps.disabled
          }, levelProps, {
            noArrow: levelDisabled || levelProps.disabled
          }))
        )
      );
    }
  }]);

  return SmartDoubleSelect;
}(_react.Component);

SmartDoubleSelect.propTypes = {
  onRemove: _react.PropTypes.func
};
exports.default = SmartDoubleSelect;
module.exports = exports['default'];