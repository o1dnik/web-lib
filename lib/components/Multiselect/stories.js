'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hrStyle = {
  display: 'block',
  height: '3px',
  border: '0',
  borderTop: '3px solid #ccc',
  margin: '1em 0',
  padding: '0'
};

var options = [{ value: 'copastor', label: 'thermetrograph', isCategory: true }, { value: 'cryoscopy', label: 'uncharted' }, { value: 'bullyrook', label: 'urethratresia' }, { value: 'thishow', label: 'Sertulariidae' }, { value: 'bite', label: 'personalization' }, { value: 'sharebroker', label: 'Ganda', isCategory: true }, { value: 'toxihemia', label: 'haplostemonous' }, { value: 'brough', label: 'amorphous' }, { value: 'insinuant', label: 'phosphoroscope' }, { value: 'budget', label: 'Mercatorial', isCategory: true }, { value: 'multituberculy', label: 'fossula' }];
var tags = [{ value: 'microanalyst', label: 'Aglossa' }, { value: 'nine', label: 'cretion' }, { value: 'tailing', label: 'Zoilean' }];

(0, _storybook.storiesOf)('Multiselect', module).add('Default', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        options: options,
        tags: tags
      })
    )
  );
}).add('states', function () {
  var selectLabel = _react2.default.createElement(
    'span',
    {
      style: { color: 'red', textTransform: 'lowercase' }
    },
    'Select label'
  );
  var tagsLabel = _react2.default.createElement(
    'span',
    {
      style: { color: 'blue', textTransform: 'lowercase' }
    },
    'Tags label'
  );
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        label: 'General Label',
        selectLabel: selectLabel,
        tagsLabel: tagsLabel,
        options: options,
        tags: tags,
        onChange: (0, _storybook.action)('onChange'),
        onSelect: (0, _storybook.action)('onSelect'),
        onFocus: (0, _storybook.action)('onFocus'),
        onBlur: (0, _storybook.action)('onBlur'),
        onClick: (0, _storybook.action)('onClick'),
        onClose: (0, _storybook.action)('onClose')
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('hr', { style: hrStyle }),
      _react2.default.createElement(_index2.default, {
        options: options,
        tags: tags,
        value: 'toxihemia',
        onChange: (0, _storybook.action)('onChange'),
        onSelect: (0, _storybook.action)('onSelect'),
        onFocus: (0, _storybook.action)('onFocus'),
        onBlur: (0, _storybook.action)('onBlur'),
        onClick: (0, _storybook.action)('onClick'),
        onClose: (0, _storybook.action)('onClose')
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('hr', { style: hrStyle }),
      _react2.default.createElement(_index2.default, {
        options: options,
        tags: tags,
        extended: true,
        onChange: (0, _storybook.action)('onChange'),
        onSelect: (0, _storybook.action)('onSelect'),
        onFocus: (0, _storybook.action)('onFocus'),
        onBlur: (0, _storybook.action)('onBlur'),
        onClick: (0, _storybook.action)('onClick'),
        onClose: (0, _storybook.action)('onClose')
      })
    )
  );
});