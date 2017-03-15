'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StepBarComponent = function StepBarComponent(props) {
  var steps = props.steps,
      currentStep = props.currentStep;


  return _react2.default.createElement(
    'ul',
    { className: 'progress-tabs' },
    steps.map(function (s, idx) {

      var className = getTabClassNames(currentStep, idx + 1);

      return _react2.default.createElement(
        'li',
        { key: s, className: className },
        s,
        _react2.default.createElement('i', { className: 'ion-checkmark' })
      );
    })
  );
};

function getTabClassNames(currentStep, step) {
  return (0, _classnames2.default)({
    active: currentStep === step,
    done: currentStep > step,
    'progress-tab': true
  });
}

StepBarComponent.propTypes = {
  steps: _react.PropTypes.array.isRequired,
  currentStep: _react.PropTypes.number.isRequired
};

StepBarComponent.defaultProps = {
  steps: [],
  currentStep: 1
};

exports.default = StepBarComponent;
module.exports = exports['default'];