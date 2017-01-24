'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = [{ value: '0', label: 'Yes' }, { value: '1', label: 'No' }];

var value = { value: '0', label: 'Yes' };

(0, _storybook.storiesOf)('RadioGroup', module).add('Default', function () {
  return _react2.default.createElement(_index2.default, {
    name: 'my-radio1',
    options: options,
    value: value,
    onChange: (0, _storybook.action)('changed')
  });
}).add('Validation States', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, {
      name: 'my-radio1',
      options: options,
      value: value,
      onChange: (0, _storybook.action)('changed')
    }),
    _react2.default.createElement(_index2.default, {
      name: 'my-radio2',
      options: options,
      meta: {
        touched: true,
        invalid: true,
        error: 'My error message'
      },
      onChange: (0, _storybook.action)('changed')
    }),
    _react2.default.createElement(_index2.default, {
      name: 'my-radio3',
      options: options,
      value: value,
      meta: {
        touched: true,
        valid: true
      },
      onChange: (0, _storybook.action)('changed')
    })
  );
});