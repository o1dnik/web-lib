'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('Checkbox', module).add('Default', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, {
      name: 'my-checkbox1',
      id: 'my-checkbox1',
      onChange: function onChange(e) {
        return (0, _storybook.action)('change')(e, e.target.checked, e.target.name);
      }
    }),
    _react2.default.createElement(_index2.default, {
      name: 'my-checkbox2',
      id: 'my-checkbox2',
      onChange: function onChange(e) {
        return (0, _storybook.action)('change')(e, e.target.checked, e.target.name);
      }
    })
  );
}).add('With Label', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, {
      name: 'my-checkbox3',
      id: 'my-checkbox3',
      label: 'my-checkbox',
      onChange: function onChange(e) {
        return (0, _storybook.action)('change')(e, e.target.checked, e.target.name);
      }
    }),
    _react2.default.createElement(_index2.default, {
      name: 'my-checkbox4',
      id: 'my-checkbox4',
      label: 'my-checkbox',
      onChange: function onChange(e) {
        return (0, _storybook.action)('change')(e, e.target.checked, e.target.name);
      }
    })
  );
});