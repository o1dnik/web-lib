'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('Loader', module).add('Default', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { size: 'tiny' },
        'Tiny'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { size: 'small' },
        'Small'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { size: 'medium' },
        'Medium'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { size: 'big' },
        'Big'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { size: 'large' },
        'Large'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { size: 'xlarge' },
        'X-Large'
      )
    )
  );
});