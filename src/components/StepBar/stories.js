import React from "react"
import { storiesOf } from "@storybook/react"
import StepBar from "./index"

storiesOf("StepBar", module).add("Default", () => (
  <div>
    <StepBar
      currentStep={1}
      steps={[
        { id: "app.registration.steps.info" },
        { id: "app.registration.steps.references" },
        { id: "app.registration.steps.skills" },
      ]}
    />
    <StepBar
      currentStep={2}
      steps={[
        { id: "app.registration.steps.info" },
        { id: "app.registration.steps.references" },
        { id: "app.registration.steps.skills" },
      ]}
    />
    <StepBar
      currentStep={3}
      steps={[
        { id: "app.registration.steps.info" },
        { id: "app.registration.steps.references" },
        { id: "app.registration.steps.skills" },
      ]}
    />
  </div>
))
