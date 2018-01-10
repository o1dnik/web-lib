import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import RadioGroup from "./index"

const options = [{ value: "0", label: "Yes" }, { value: "1", label: "No" }]

const value = { value: "0", label: "Yes" }

storiesOf("RadioGroup", module)
  .add("Default", () => (
    <RadioGroup
      name={"my-radio1"}
      options={options}
      value={value}
      onChange={action("changed")}
    />
  ))
  .add("Validation States", () => (
    <div>
      <RadioGroup
        name={"my-radio1"}
        options={options}
        value={value}
        onChange={action("changed")}
      />
      <RadioGroup
        name={"my-radio2"}
        options={options}
        meta={{
          touched: true,
          invalid: true,
          error: "My error message"
        }}
        onChange={action("changed")}
      />
      <RadioGroup
        name={"my-radio3"}
        options={options}
        value={value}
        meta={{
          touched: true,
          valid: true
        }}
        onChange={action("changed")}
      />
    </div>
  ))
