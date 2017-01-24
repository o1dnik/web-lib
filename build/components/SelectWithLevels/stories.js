'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _flatten = require('lodash/flatten');

var _flatten2 = _interopRequireDefault(_flatten);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var roles = [{
  name: 'Software Development',
  roles: [{
    name: 'Python Developer',
    id: '8'
  }, {
    name: 'Data Scientist',
    id: '9'
  }, {
    name: 'Frontend Developer',
    id: '10'
  }, {
    name: 'DevOps',
    id: '11'
  }]
}, {
  name: 'Marketing',
  roles: [{
    name: 'Online Marketing Manager',
    id: '4'
  }, {
    name: 'Communications Manager',
    id: '6'
  }, {
    name: 'Social Media Marketing',
    id: '7'
  }]
}, {
  name: 'Finance',
  roles: [{
    name: 'Accountant',
    id: '1'
  }, {
    name: 'Account Manager',
    id: '2'
  }]
}, {
  name: 'Sales',
  roles: [{
    name: 'Product Sales Manager',
    id: '3'
  }, {
    name: 'Solar Energy Consultant',
    id: '5'
  }]
}];

var jobLevels = [{ value: '0', label: '0-1' }, { value: '1', label: '2-3' }, { value: '2', label: '4-5' }, { value: '3', label: '5+' }];

//roles should be mapped in container's connect
roles = (0, _flatten2.default)(roles.map(function (c) {
  return [{ name: c.name, isCategory: true, id: c.name }].concat(_toConsumableArray(c.roles));
})).map(function (c) {
  return { value: c.id, label: c.name, isCategory: c.isCategory || false };
});

(0, _storybook.storiesOf)('SelectWithLevels', module).add('Default', function () {
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
      selectOptions: roles,
      levelOptions: jobLevels
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
        select: '3',
        level: '2'
      },
      selectOptions: roles,
      levelOptions: jobLevels
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
        select: '3',
        level: '2'
      },
      meta: {
        touched: true,
        valid: true
      },
      selectOptions: roles,
      levelOptions: jobLevels
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
        select: '3',
        level: '2'
      },
      meta: {
        touched: true,
        invalid: true,
        error: 'My error message'
      },
      selectOptions: roles,
      levelOptions: jobLevels
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
        select: '3',
        level: '2'
      },
      meta: {
        touched: true,
        invalid: true,
        error: 'My error message'
      },
      selectOptions: roles,
      levelOptions: jobLevels
    })
  );
});