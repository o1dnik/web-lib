import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import InputRange from "./index"

const label = (
  <span>
    SALARY PER YEAR &nbsp;
    <span className="optional-info">{"FROM TO"}</span>
  </span>
)

storiesOf("InputRange", module).add("Default", () => (
  <div>
    <div>
      <InputRange
        name="my-input-range"
        minValue={5}
        maxValue={15}
        step={1}
        value={9}
        onChange={action("change")}
      />
    </div>

    <div>
      <InputRange
        name="my-input-range"
        minValue={5}
        maxValue={15}
        step={1}
        value={5}
        onChange={action("change")}
      />
    </div>

    <div>
      <InputRange
        name="my-input-range"
        minValue={5}
        maxValue={15}
        step={1}
        value={15}
        onChange={action("change")}
      />
    </div>

    <div>
      <InputRange
        name="my-input-range"
        minValue={5}
        maxValue={15}
        step={1}
        value={{ min: 8, max: 10 }}
        onChange={action("change")}
      />
    </div>

    <div>
      <InputRange
        name="my-input-range"
        label={label}
        additionalLabel="FROM-TO"
        minValue={5}
        maxValue={15}
        step={1}
        value={{ min: 8, max: 10 }}
        onChange={action("change")}
      />
    </div>

    <div>
      <InputRange
        name="my-input-range"
        label="LABEL AS STRING"
        additionalLabel="FROM-TO"
        minValue={5}
        maxValue={15}
        step={1}
        value={{ min: 8, max: 10 }}
        onChange={action("change")}
      />
    </div>
  </div>
))
