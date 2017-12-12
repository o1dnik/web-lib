import PropTypes from 'prop-types'
import React from 'react'
import cn from 'classnames'
import {FormattedMessage} from 'react-intl'

const StepBarComponent = (props) => {
  const {steps, currentStep} = props

  return (
    <ul className='progress-tabs'>

      {steps.map((msg, idx) => {
        const className = getTabClassNames(currentStep, idx + 1)

        return (
          <li key={msg.id} className={className}>
            <FormattedMessage {...msg} />
            <i className='ion-checkmark' />
          </li>
        )
      })}

    </ul>
  )
}

function getTabClassNames (currentStep, step) {
  return cn({
    active: currentStep === step,
    done: currentStep > step,
    'progress-tab': true
  })
}

StepBarComponent.propTypes = {
  steps: PropTypes.array.isRequired,
  currentStep: PropTypes.number.isRequired
}

StepBarComponent.defaultProps = {
  steps: [],
  currentStep: 1
}

export default StepBarComponent
