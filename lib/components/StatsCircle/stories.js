'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('StatsCircle', module).add('Default', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        percent: 60,
        value: 5,
        color: '#dd1843',
        r: '40'
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(_index2.default, {
          percent: 90,
          value: 9,
          color: '#dd1843',
          r: '35'
        })
      ),
      _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(_index2.default, {
          percent: 3,
          value: 30,
          color: '#dd1843',
          r: '35'
        })
      )
    )
  );
});