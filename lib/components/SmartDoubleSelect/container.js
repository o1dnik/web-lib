'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFieldArrayItemAdd = handleFieldArrayItemAdd;
exports.handleFieldArrayItemRemove = handleFieldArrayItemRemove;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _reduxForm = require('redux-form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var langLevels = [{ value: '0', label: 'A1' }, { value: '1', label: 'A2' }, { value: '2', label: 'B1' }, { value: '3', label: 'B2' }, { value: '4', label: 'C1' }, { value: '5', label: 'C2' }, { value: '6', label: 'Native' }];
var availableLanguages = [{ value: '40', label: 'English' }, { value: '51', label: 'German' }, { value: '148', label: 'Spanish' }, { value: '47', label: 'French' }, { value: '128', label: 'Portuguese' }, { value: '70', label: 'Italian' }, { value: '133', label: 'Russian' }, { value: '7', label: 'Arabic' }, { value: '72', label: 'Japanese' }, { value: '59', label: 'Hindi' }, { value: '20', label: 'Chineese' }];

var job = {
  languages: []
};

var RenderLanguages = function RenderLanguages(_ref) {
  var fields = _ref.fields,
      label = _ref.label;


  var selectedLanguages = fields.getAll().map(function (i) {
    return i.select;
  }).filter(Boolean);

  var fieldsBody = fields.map(function (language, idx) {

    var current = fields.get(idx);

    var languagesOptions = availableLanguages.filter(function (r) {
      if (current && current.select && current.select === r.value) {
        return true;
      }
      return !selectedLanguages.includes(r.value);
    });

    return _react2.default.createElement(
      'li',
      { key: idx, className: 'mb form-field-wrapper' },
      _react2.default.createElement(
        _reduxForm.FormSection,
        { name: language },
        _react2.default.createElement(_reduxForm.Fields, {
          names: ['select', 'level'],
          component: _index2.default,
          onRemove: handleFieldArrayItemRemove(fields, idx),
          resetLevelOnSelectChange: true,
          selectProps: {
            id: 'job_' + language + '_select',
            label: 'Language',
            options: languagesOptions,
            searchable: true,
            clearable: false,
            validate: function validate(val) {
              return val ? null : 'Value is required.';
            },
            simpleValue: true
          },
          levelProps: {
            id: 'job_' + language + '_level',
            label: 'Level',
            options: langLevels,
            clearable: false,
            searchable: false,
            simpleValue: true,
            validate: function validate(val) {
              return val ? null : 'Value is required.';
            }
          }
        })
      )
    );
  });

  return _react2.default.createElement(
    'div',
    null,
    label && _react2.default.createElement(
      'label',
      null,
      label
    ),
    _react2.default.createElement(
      'div',
      { className: 'mb' },
      _react2.default.createElement(
        'button',
        { onClick: handleFieldArrayItemAdd(fields),
          disabled: fields.length > 5
        },
        '+ Add Required Language'
      )
    ),
    _react2.default.createElement(
      'ul',
      null,
      fieldsBody
    )
  );
};

var Job = function Job() {

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reduxForm.FieldArray, {
      name: 'languages',
      label: 'Required languages',
      component: RenderLanguages
    })
  );
};

var JobForm = (0, _reduxForm.reduxForm)({
  form: 'jobForm',
  initialValues: job
})(Job);

function handleFieldArrayItemAdd(fields) {
  return function () {
    return fields.push({});
  };
}

function handleFieldArrayItemRemove(fields, idx) {
  var amountRequired = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  return function () {
    if (fields.length > amountRequired) {
      fields.remove(idx);
    }
  };
}

exports.default = JobForm;