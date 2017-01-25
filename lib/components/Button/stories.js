'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('Button', module).add('Default', function () {
  return _react2.default.createElement(
    _index2.default,
    { onClick: (0, _storybook.action)('clicked') },
    'Default'
  );
}).add('states', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { disabled: true, onClick: (0, _storybook.action)('clicked') },
        'Disabled'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { loading: true, onClick: (0, _storybook.action)('clicked') },
        'Loading'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { size: 'small', loading: true, onClick: (0, _storybook.action)('clicked') },
        'Loading'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { size: 'large', loading: true, onClick: (0, _storybook.action)('clicked') },
        'Loading'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { size: 'xlarge', loading: true, onClick: (0, _storybook.action)('clicked') },
        'Loading'
      )
    )
  );
}).add('sizes', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { size: 'small', onClick: (0, _storybook.action)('clicked') },
        'small'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { size: 'large', onClick: (0, _storybook.action)('clicked') },
        'large'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { size: 'xlarge', onClick: (0, _storybook.action)('clicked') },
        'xlarge'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { extended: true, onClick: (0, _storybook.action)('clicked') },
        'extended'
      )
    )
  );
}).add('colors', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { color: 'green', onClick: (0, _storybook.action)('clicked') },
        'green'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { color: 'red', onClick: (0, _storybook.action)('clicked') },
        'red'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { color: 'ln', onClick: (0, _storybook.action)('clicked') },
        'ln'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { color: 'fb', onClick: (0, _storybook.action)('clicked') },
        'fb'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { color: 'tw', onClick: (0, _storybook.action)('clicked') },
        'tw'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { color: 'white', onClick: (0, _storybook.action)('clicked') },
        'white'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _index2.default,
        { color: 'danger', onClick: (0, _storybook.action)('clicked') },
        'danger'
      )
    )
  );
});