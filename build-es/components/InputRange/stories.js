'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('InputRange', module).add('Default', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'input-range-wraper' },
      _react2.default.createElement(_index2.default, {
        name: 'my-input-range',
        minValue: 5,
        maxValue: 15,
        step: 1,
        value: 9,
        onChange: (0, _storybook.action)('change')
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'input-range-wraper' },
      _react2.default.createElement(_index2.default, {
        name: 'my-input-range',
        minValue: 5,
        maxValue: 15,
        step: 1,
        value: 5,
        onChange: (0, _storybook.action)('change')
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'input-range-wraper' },
      _react2.default.createElement(_index2.default, {
        name: 'my-input-range',
        minValue: 5,
        maxValue: 15,
        step: 1,
        value: 15,
        onChange: (0, _storybook.action)('change')
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'input-range-wraper' },
      _react2.default.createElement(_index2.default, {
        name: 'my-input-range',
        minValue: 5,
        maxValue: 15,
        step: 1,
        value: { min: 8, max: 10 },
        onChange: (0, _storybook.action)('change')
      })
    )
  );
}).add('With Label', function () {

  var label = _react2.default.createElement(
    'span',
    null,
    'SALARY PER YEAR \xA0',
    _react2.default.createElement(
      'span',
      { className: 'optional-info' },
      'FROM TO'
    )
  );

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'input-range-wraper' },
      _react2.default.createElement(_index2.default, {
        name: 'my-input-range',
        label: label,
        additionalLabel: 'FROM-TO',
        minValue: 5,
        maxValue: 15,
        step: 1,
        value: { min: 8, max: 10 },
        onChange: (0, _storybook.action)('change')
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'input-range-wraper' },
      _react2.default.createElement(_index2.default, {
        name: 'my-input-range',
        label: 'LABEL AS STRING',
        additionalLabel: 'FROM-TO',
        minValue: 5,
        maxValue: 15,
        step: 1,
        value: { min: 8, max: 10 },
        onChange: (0, _storybook.action)('change')
      })
    )
  );
});