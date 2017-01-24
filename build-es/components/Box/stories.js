'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('Box', module).add('Default', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      null,
      'Default'
    )
  );
}).add('Half width', function () {
  return _react2.default.createElement(
    _index2.default,
    { width: '50%' },
    'Half width'
  );
}).add('As another element', function () {
  return _react2.default.createElement(
    'ul',
    null,
    _react2.default.createElement(
      _index2.default,
      { as: 'li' },
      'Li'
    ),
    _react2.default.createElement(
      _index2.default,
      { as: 'li' },
      'Li'
    ),
    _react2.default.createElement(
      _index2.default,
      { as: 'li' },
      'Li'
    )
  );
});