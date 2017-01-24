'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('AlertBar', module).add('Default', function () {
  return _react2.default.createElement(_index2.default, { isActive: true, onClick: (0, _storybook.action)('clicked') });
}).add('states', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        isActive: true,
        onClick: (0, _storybook.action)('clicked')
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        isActive: true,
        type: 'success',
        onClick: (0, _storybook.action)('clicked')
      })
    )
  );
});