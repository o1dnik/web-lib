'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('Tag', module).add('Default', function () {
  return _react2.default.createElement(_index2.default, { label: 'Label', id: 0 });
}).add('states', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, { label: 'default',
        id: 1,
        onClick: (0, _storybook.action)('clicked'),
        onClose: (0, _storybook.action)('closed') })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, { label: 'Disabled',
        id: 3,
        disabled: true,
        onClose: (0, _storybook.action)('closed') })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, { label: 'Extended via props',
        id: 4,
        extended: true,
        onClick: (0, _storybook.action)('clicked'),
        onClose: (0, _storybook.action)('closed') })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, { label: 'Extended via className',
        id: 4,
        className: 'extended',
        onClick: (0, _storybook.action)('clicked'),
        onClose: (0, _storybook.action)('closed') })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, { label: 'Clickable',
        id: 4,
        onClick: (0, _storybook.action)('clicked'),
        onClose: (0, _storybook.action)('closed') })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, { label: 'not Clickable', id: 4 })
    )
  );
}).add('style/types', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'span',
      null,
      'With close button & actions'
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, { label: 'active',
        id: 5,
        type: 'active',
        onClick: (0, _storybook.action)('clicked'),
        onClose: (0, _storybook.action)('closed') })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, { label: 'pending',
        id: 5,
        type: 'pending',
        onClick: (0, _storybook.action)('clicked'),
        onClose: (0, _storybook.action)('closed') })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, { label: 'default',
        id: 5,
        type: 'default',
        onClick: (0, _storybook.action)('clicked'),
        onClose: (0, _storybook.action)('closed') })
    ),
    _react2.default.createElement(
      'span',
      null,
      'Without close button & not clickable (no actions)'
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, { label: 'active',
        id: 5,
        type: 'active' })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, { label: 'pending',
        id: 5,
        type: 'pending' })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, { label: 'default',
        id: 5,
        type: 'default' })
    )
  );
}).add('close icons', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, { label: 'Default',
        id: 5,
        onClick: (0, _storybook.action)('clicked'),
        onClose: (0, _storybook.action)('closed') })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, { label: 'No close icon',
        id: 6,
        onClick: (0, _storybook.action)('clicked'),
        onClose: (0, _storybook.action)('closed'),
        hideClose: true })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, { label: 'Custom close icon',
        id: 7,
        onClick: (0, _storybook.action)('clicked'),
        onClose: (0, _storybook.action)('closed'),
        closeIcon: '★' })
    )
  );
});