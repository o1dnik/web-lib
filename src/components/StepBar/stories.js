import React from 'react';
import {storiesOf} from '@kadira/storybook';
import StepBar from './index';

storiesOf('StepBar', module)
  .add('Default', () => (
    <div>
      <StepBar
        currentStep={1}
        steps={['Select Subscription', 'Billing Information', 'Confirmation']}
      />
      <StepBar
        currentStep={2}
        steps={['Select Subscription', 'Billing Information', 'Confirmation']}
      />
      <StepBar
        currentStep={3}
        steps={['Select Subscription', 'Billing Information', 'Confirmation']}
      />
    </div>
  ));
