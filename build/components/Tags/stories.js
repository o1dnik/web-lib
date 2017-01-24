'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tags1 = [{ id: 0, label: 'neuropodium' }, { id: 1, label: 'knowledgeably' }, { id: 2, label: 'terminist' }, { id: 3, label: 'prepartition' }];
var tags2 = [{ id: 0, label: 'Stymphalid' }, { id: 1, label: 'derm' }];
var tags3 = [{ id: 0, label: 'sulfureous' }, { id: 1, label: 'pupulo' }, { id: 2, label: 'locule' }, { id: 3, label: 'snappable' }, { id: 4, label: 'hypaethron' }];

(0, _storybook.storiesOf)('Tags', module).add('Default', function () {
  return _react2.default.createElement(_index2.default, { tags: tags1 });
}).add('styles', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        null,
        'Disabled'
      ),
      _react2.default.createElement(_index2.default, { tags: tags1,
        disabled: true,
        onClick: (0, _storybook.action)('clicked') // makes active unless disabled
        , onTagRemove: (0, _storybook.action)('closed') })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        null,
        'Not Disabled'
      ),
      _react2.default.createElement(_index2.default, { tags: tags1,
        onClick: (0, _storybook.action)('clicked'),
        onTagRemove: (0, _storybook.action)('closed') })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        null,
        'Extended'
      ),
      _react2.default.createElement(_index2.default, { tags: tags2,
        extended: true,
        onClick: (0, _storybook.action)('clicked'),
        onTagRemove: (0, _storybook.action)('closed') })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        null,
        'Type: Active'
      ),
      _react2.default.createElement(_index2.default, { tags: tags3,
        type: 'active',
        onClick: (0, _storybook.action)('clicked'),
        onTagRemove: (0, _storybook.action)('closed') })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        null,
        'Type: Inactive'
      ),
      _react2.default.createElement(_index2.default, { tags: tags3,
        type: 'inactive' })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        null,
        'Type: Pending'
      ),
      _react2.default.createElement(_index2.default, { tags: tags3,
        type: 'pending',
        onClick: (0, _storybook.action)('clicked'),
        onTagRemove: (0, _storybook.action)('closed') })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        null,
        'Type: Active && Disabled'
      ),
      _react2.default.createElement(_index2.default, { tags: tags3,
        type: 'active',
        disabled: true,
        onClick: (0, _storybook.action)('clicked'),
        onTagRemove: (0, _storybook.action)('closed') })
    )
  );
});