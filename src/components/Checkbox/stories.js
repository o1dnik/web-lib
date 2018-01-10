import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Checkbox from "./index"

storiesOf("Checkbox", module).add("Default", () => (
  <div>
    <div>
      <h3>Default</h3>
      <Checkbox
        name="my-checkbox1"
        id="my-checkbox1"
        onChange={e => action("change")(e, e.target.checked, e.target.name)}
      />
      <Checkbox
        checked
        name="my-checkbox2"
        id="my-checkbox2"
        onChange={e => action("change")(e, e.target.checked, e.target.name)}
      />
    </div>

    <div>
      <h3>With label</h3>
      <Checkbox
        name="my-checkbox3"
        id="my-checkbox3"
        label="my-checkbox"
        onChange={e => action("change")(e, e.target.checked, e.target.name)}
      />
      <Checkbox
        checked
        name="my-checkbox4"
        id="my-checkbox4"
        label="my-checkbox"
        onChange={e => action("change")(e, e.target.checked, e.target.name)}
      />
    </div>
  </div>
))
