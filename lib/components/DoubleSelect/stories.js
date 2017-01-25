'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var langLevels = [{ value: '0', label: 'A1' }, { value: '1', label: 'A2' }, { value: '2', label: 'B1' }, { value: '3', label: 'B2' }, { value: '4', label: 'C1' }, { value: '5', label: 'C2' }, { value: '6', label: 'Native' }];
var langs = [{ value: '40', label: 'English' }, { value: '51', label: 'German' }, { value: '148', label: 'Spanish' }, { value: '47', label: 'French' }, { value: '128', label: 'Portuguese' }, { value: '70', label: 'Italian' }, { value: '133', label: 'Russian' }, { value: '7', label: 'Arabic' }, { value: '72', label: 'Japanese' }, { value: '59', label: 'Hindi' }, { value: '20', label: 'Chineese' }];

(0, _storybook.storiesOf)('DoubleSelect', module).add('Default', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, {
      label: 'JOB DESTIGATION',
      subLabel: 'SUB LABEL YEARS OF EXPERIENCE',
      onRemove: (0, _storybook.action)('remove'),
      onChange: (0, _storybook.action)('change'),
      onFocus: (0, _storybook.action)('focus'),
      onBlur: (0, _storybook.action)('blur'),
      value: {},
      selectOptions: langs,
      levelOptions: langLevels
    })
  );
}).add('With selected values', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, {
      label: 'JOB DESTIGATION',
      subLabel: 'SUB LABEL YEARS OF EXPERIENCE',
      onRemove: (0, _storybook.action)('remove'),
      onChange: (0, _storybook.action)('change'),
      onFocus: (0, _storybook.action)('focus'),
      onBlur: (0, _storybook.action)('blur'),
      value: {
        select: '148',
        level: '2'
      },
      selectOptions: langs,
      levelOptions: langLevels
    })
  );
}).add('Success', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, {
      label: 'JOB DESTIGATION',
      subLabel: 'SUB LABEL YEARS OF EXPERIENCE',
      onRemove: (0, _storybook.action)('remove'),
      onChange: (0, _storybook.action)('change'),
      onFocus: (0, _storybook.action)('focus'),
      onBlur: (0, _storybook.action)('blur'),
      value: {
        select: '47',
        level: '2'
      },
      meta: {
        touched: true,
        valid: true
      },
      selectOptions: langs,
      levelOptions: langLevels
    })
  );
}).add('Error', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, {
      label: 'JOB DESTIGATION',
      subLabel: 'SUB LABEL YEARS OF EXPERIENCE',
      onRemove: (0, _storybook.action)('remove'),
      onChange: (0, _storybook.action)('change'),
      onFocus: (0, _storybook.action)('focus'),
      onBlur: (0, _storybook.action)('blur'),
      value: {
        select: '72',
        level: '2'
      },
      meta: {
        touched: true,
        invalid: true,
        error: 'My error message'
      },
      selectOptions: langs,
      levelOptions: langLevels
    })
  );
}).add('readOnly', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, {
      label: 'readOnly',
      disabled: true,
      onRemove: (0, _storybook.action)('remove'),
      onChange: (0, _storybook.action)('change'),
      onFocus: (0, _storybook.action)('focus'),
      onBlur: (0, _storybook.action)('blur'),
      value: {
        select: '72',
        level: '2'
      },
      meta: {
        touched: true,
        invalid: true,
        error: 'My error message'
      },
      selectOptions: langs,
      levelOptions: langLevels
    })
  );
});