import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

var StepBarComponent = function StepBarComponent(props) {
  var steps = props.steps,
      currentStep = props.currentStep;


  return React.createElement(
    'ul',
    { className: 'progress-tabs' },
    steps.map(function (s, idx) {
      var className = getTabClassNames(currentStep, idx + 1);

      return React.createElement(
        'li',
        { key: s, className: className },
        s,
        React.createElement('i', { className: 'ion-checkmark' })
      );
    })
  );
};

function getTabClassNames(currentStep, step) {
  return cn({
    active: currentStep === step,
    done: currentStep > step,
    'progress-tab': true
  });
}

StepBarComponent.propTypes = {
  steps: PropTypes.array.isRequired,
  currentStep: PropTypes.number.isRequired
};

StepBarComponent.defaultProps = {
  steps: [],
  currentStep: 1
};

export default StepBarComponent;
module.exports = exports['default'];