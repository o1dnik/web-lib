import React, {PropTypes} from 'react';
import cn from 'classnames';

const StepBarComponent = (props) => {

  const {steps, currentStep} = props;

  return (
    <ul className='progress-tabs'>

      {steps.map((s, idx) => {

        const className = getTabClassNames(currentStep, idx + 1);

        return (
          <li key={s} className={className}>
            {s}
            <i className='ion-checkmark'/>
          </li>
        );

      })}

    </ul>
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
