var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Field } from 'redux-form';
import cn from 'classnames';
import Select from '../Select';

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
          inOneRow = _props.inOneRow,
          resetLevelOnSelectChange = _props.resetLevelOnSelectChange,
          selectKey = _props.selectKey,
          levelKey = _props.levelKey;


      var select = this.props[selectKey];
      var level = this.props[levelKey];

      var valid = select.meta.valid && level.meta.valid;

      var levelDisabled = Boolean(!select.input.value || select.meta.invalid || levelProps.disabled);

      var selectDisabled = selectProps.disabledIfValid && select.meta.valid || selectProps.disabled;

      var css = cn({
        'smart-double-select': true,
        'options-box': true,
        done: valid
      });

      var wrapperCss = cn({
        'select-group-wrapper': inOneRow
      });

      return React.createElement(
        'div',
        { className: css },
        onRemove && React.createElement(
          'span',
          { className: 'close', onClick: onRemove },
          React.createElement('i', { className: 'ion-close' })
        ),
        React.createElement(
          'div',
          { className: wrapperCss },
          React.createElement(Field, _extends({}, selectProps, {
            component: Select,
            onChange: function onChange() {
              resetLevelOnSelectChange && level.input.onChange(undefined);
            },
            disabled: selectDisabled,
            noArrow: selectDisabled,
            name: selectKey
          })),
          React.createElement(Field, _extends({}, levelProps, {
            component: Select,
            disabled: levelDisabled,
            noArrow: levelDisabled,
            name: levelKey
          }))
        )
      );
    }
  }]);

  return SmartDoubleSelect;
}(Component);

SmartDoubleSelect.propTypes = {
  onRemove: PropTypes.func,

  selectKey: PropTypes.string,
  levelKey: PropTypes.string,

  names: PropTypes.array,

  levelProps: PropTypes.object,
  selectProps: PropTypes.object,

  resetLevelOnSelectChange: PropTypes.bool,
  inOneRow: PropTypes.bool
};
SmartDoubleSelect.defaultProps = {
  selectKey: 'id',
  levelKey: 'level',
  levelProps: {},
  selectProps: {},
  resetLevelOnSelectChange: false,
  inOneRow: false
};


export default SmartDoubleSelect;
module.exports = exports['default'];