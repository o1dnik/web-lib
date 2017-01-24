'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('TextareaInput', module).add('Default', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, {
      name: 'my-textarea',
      id: 'my-textarea',
      label: 'my-textarea',
      placeholder: 'my-textarea',
      onChange: function onChange(e) {
        return (0, _storybook.action)('change')(e, e.target.value, e.target.name);
      },
      onBlur: function onBlur(e) {
        return (0, _storybook.action)('blur')(e, e.target.value, e.target.name);
      },
      onFocus: function onFocus(e) {
        return (0, _storybook.action)('focus')(e, e.target.value, e.target.name);
      }
    })
  );
}).add('Success', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, {
      name: 'my-textarea',
      meta: {
        touched: true,
        valid: true
      },
      id: 'my-textarea',
      label: 'my-textarea',
      placeholder: 'my-textarea',
      onChange: function onChange(e) {
        return (0, _storybook.action)('change')(e, e.target.value, e.target.name);
      },
      onBlur: function onBlur(e) {
        return (0, _storybook.action)('blur')(e, e.target.value, e.target.name);
      },
      onFocus: function onFocus(e) {
        return (0, _storybook.action)('focus')(e, e.target.value, e.target.name);
      }
    })
  );
}).add('Error', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, {
      name: 'my-textarea',
      meta: {
        touched: true,
        invalid: true,
        error: 'Error message'
      },
      id: 'my-textarea',
      label: 'my-textarea',
      placeholder: 'my-textarea',
      onChange: function onChange(e) {
        return (0, _storybook.action)('change')(e, e.target.value, e.target.name);
      },
      onBlur: function onBlur(e) {
        return (0, _storybook.action)('blur')(e, e.target.value, e.target.name);
      },
      onFocus: function onFocus(e) {
        return (0, _storybook.action)('focus')(e, e.target.value, e.target.name);
      }
    })
  );
}).add('Ten rows long', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, {
      name: 'my-textarea',
      id: 'my-textarea',
      label: 'my-textarea',
      placeholder: 'my-textarea',
      rows: 10,
      onChange: function onChange(e) {
        return (0, _storybook.action)('change')(e, e.target.value, e.target.name);
      },
      onBlur: function onBlur(e) {
        return (0, _storybook.action)('blur')(e, e.target.value, e.target.name);
      },
      onFocus: function onFocus(e) {
        return (0, _storybook.action)('focus')(e, e.target.value, e.target.name);
      }
    })
  );
});