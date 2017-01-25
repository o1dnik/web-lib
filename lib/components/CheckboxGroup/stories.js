'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options1 = [{ value: '0', label: 'Yes' }, { value: '1', label: 'No' }];

var value1 = [{ value: '0', label: 'Yes' }];

var options2 = [{ value: '0', label: 'horntip' }, { value: '1', label: 'lanuginousness' }, { value: '2', label: 'outby' }, { value: '3', label: 'psychosarcous' }, { value: '4', label: 'Etheneldeli' }, { value: '5', label: 'fruitlet' }];

var value2 = [{ value: '0', label: 'horntip' }, { value: '1', label: 'lanuginousness' }];

var options3 = [{ value: '0', label: 'arrestor' }, { value: '1', label: 'roselet' }, { value: '2', label: 'nonthinking' }, { value: '3', label: 'triturate' }];

var value3 = [{ value: '0', label: 'arrestor' }, { value: '1', label: 'roselet' }];

(0, _storybook.storiesOf)('CheckboxGroup', module).add('Default', function () {
  return _react2.default.createElement(_index2.default, {
    options: options1,
    value: value1,
    onChange: (0, _storybook.action)('changed') });
}).add('With Label', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        label: 'My group',
        options: options1,
        value: value1,
        onChange: (0, _storybook.action)('changed')
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        label: 'My second group',
        options: options3,
        value: value3,
        onChange: (0, _storybook.action)('changed')
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        label: 'My another group',
        options: options2,
        value: value2,
        onChange: (0, _storybook.action)('changed')
      })
    )
  );
}).add('Validation States', function () {

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        label: 'My group',
        options: options1,
        value: value1,
        onChange: (0, _storybook.action)('changed')
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        label: 'My error group',
        options: options3,
        value: value3,
        meta: {
          touched: true,
          invalid: true,
          error: 'My error message'
        },
        onChange: (0, _storybook.action)('changed')
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        label: 'My success group',
        options: options2,
        value: value2,
        meta: {
          touched: true,
          valid: true
        },
        onChange: (0, _storybook.action)('changed')
      })
    )
  );
});