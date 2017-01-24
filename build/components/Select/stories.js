'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = [{ value: 'saraad', label: 'anorthosite', isCategory: true }, { value: 'galant', label: 'aglobulia' }, { value: 'biseriately', label: 'chargeman' }, { value: 'antioxygenic', label: 'gaggle' }, { value: 'exendospermic', label: 'renter' }, { value: 'chordacentrum', label: 'untrashed', isCategory: true }, { value: 'polyspermal', label: 'beclart' }, { value: 'paiwari', label: 'bibitory' }, { value: 'respirability', label: 'photodynamics' }, { value: 'unmeetly', label: 'overobese', isCategory: true }, { value: 'Primates', label: 'anthropodeoxycholic' }];

(0, _storybook.storiesOf)('Select', module).add('Default', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        options: options,
        onInputChange: (0, _storybook.action)('onInputChange'),
        onSelect: (0, _storybook.action)('onSelect'),
        onFocus: (0, _storybook.action)('onFocus'),
        onBlur: (0, _storybook.action)('onBlur')
      })
    )
  );
}).add('With selected value', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        label: 'input #1',
        value: 'antioxygenic',
        options: options,
        onInputChange: (0, _storybook.action)('onInputChange'),
        onSelect: (0, _storybook.action)('onSelect'),
        onFocus: (0, _storybook.action)('onFocus'),
        onBlur: (0, _storybook.action)('onBlur')
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        label: 'input #2',
        value: 'exendospermic',
        noArrow: true,
        options: options,
        onInputChange: (0, _storybook.action)('onInputChange'),
        onSelect: (0, _storybook.action)('onSelect'),
        onFocus: (0, _storybook.action)('onFocus'),
        onBlur: (0, _storybook.action)('onBlur')
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        value: 'respirability',
        arrowRenderer: function arrowRenderer() {
          return 'CustomArrow';
        },
        options: options,
        onInputChange: (0, _storybook.action)('onInputChange'),
        onSelect: (0, _storybook.action)('onSelect'),
        onFocus: (0, _storybook.action)('onFocus'),
        onBlur: (0, _storybook.action)('onBlur')
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        value: 'polyspermal',
        clearIconHTML: '<i class="mb-icons-checkmark"></i>',
        options: options,
        onInputChange: (0, _storybook.action)('onInputChange'),
        onSelect: (0, _storybook.action)('onSelect'),
        onFocus: (0, _storybook.action)('onFocus'),
        onBlur: (0, _storybook.action)('onBlur')
      })
    )
  );
}).add('States & Props', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        label: 'Multi',
        multi: true,
        options: options,
        onInputChange: (0, _storybook.action)('onInputChange'),
        onSelect: (0, _storybook.action)('onSelect'),
        onFocus: (0, _storybook.action)('onFocus'),
        onBlur: (0, _storybook.action)('onBlur')
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        label: 'disabled',
        disabled: true,
        options: options,
        onInputChange: (0, _storybook.action)('onInputChange'),
        onSelect: (0, _storybook.action)('onSelect'),
        onFocus: (0, _storybook.action)('onFocus'),
        onBlur: (0, _storybook.action)('onBlur')
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        label: 'not clearable',
        value: 'Primates',
        clearable: false,
        options: options,
        onInputChange: (0, _storybook.action)('onInputChange'),
        onSelect: (0, _storybook.action)('onSelect'),
        onFocus: (0, _storybook.action)('onFocus'),
        onBlur: (0, _storybook.action)('onBlur')
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        label: 'not searchable',
        searchable: false,
        options: options,
        onInputChange: (0, _storybook.action)('onInputChange'),
        onSelect: (0, _storybook.action)('onSelect'),
        onFocus: (0, _storybook.action)('onFocus'),
        onBlur: (0, _storybook.action)('onBlur')
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        label: 'loading',
        isLoading: true,
        disabled: true,
        options: options,
        onInputChange: (0, _storybook.action)('onInputChange'),
        onSelect: (0, _storybook.action)('onSelect'),
        onFocus: (0, _storybook.action)('onFocus'),
        onBlur: (0, _storybook.action)('onBlur')
      })
    )
  );
}).add('searching props', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        label: 'Match on beginning (type g)',
        matchPos: 'start',
        options: options,
        onInputChange: (0, _storybook.action)('onInputChange'),
        onSelect: (0, _storybook.action)('onSelect'),
        onFocus: (0, _storybook.action)('onFocus'),
        onBlur: (0, _storybook.action)('onBlur')
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        label: 'Match on any (type g)',
        matchPos: 'any',
        options: options,
        onInputChange: (0, _storybook.action)('onInputChange'),
        onSelect: (0, _storybook.action)('onSelect'),
        onFocus: (0, _storybook.action)('onFocus'),
        onBlur: (0, _storybook.action)('onBlur')
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        label: 'Match by label (type g)',
        matchProp: 'label',
        options: options,
        onInputChange: (0, _storybook.action)('onInputChange'),
        onSelect: (0, _storybook.action)('onSelect'),
        onFocus: (0, _storybook.action)('onFocus'),
        onBlur: (0, _storybook.action)('onBlur')
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        label: 'Match by value (type g)',
        matchProp: 'value',
        options: options,
        onInputChange: (0, _storybook.action)('onInputChange'),
        onSelect: (0, _storybook.action)('onSelect'),
        onFocus: (0, _storybook.action)('onFocus'),
        onBlur: (0, _storybook.action)('onBlur')
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_index2.default, {
        label: 'Match by label AND value (type g)',
        matchProp: 'any',
        options: options,
        onInputChange: (0, _storybook.action)('onInputChange'),
        onSelect: (0, _storybook.action)('onSelect'),
        onFocus: (0, _storybook.action)('onFocus'),
        onBlur: (0, _storybook.action)('onBlur')
      })
    )
  );
});