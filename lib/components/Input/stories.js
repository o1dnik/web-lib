'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('Input', module).add('Default', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, {
      name: 'my-input',
      id: 'my-input',
      label: 'my-input',
      placeholder: 'my-input',
      type: 'text',
      onChange: function onChange(e) {
        return (0, _storybook.action)('change')(e, e.target.value, e.target.name);
      }
    })
  );
}).add('Success', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, {
      name: 'my-input',
      meta: {
        touched: true,
        valid: true
      },
      id: 'my-input',
      label: 'my-input',
      placeholder: 'my-input',
      type: 'text',
      onChange: function onChange(e) {
        return (0, _storybook.action)('change')(e, e.target.value, e.target.name);
      }
    })
  );
}).add('Error', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, {
      name: 'my-input',
      meta: {
        touched: true,
        invalid: true,
        error: 'My error message'
      },
      id: 'my-input',
      label: 'my-input',
      placeholder: 'my-input',
      type: 'text',
      onChange: function onChange(e) {
        return (0, _storybook.action)('change')(e, e.target.value, e.target.name);
      }
    })
  );
});