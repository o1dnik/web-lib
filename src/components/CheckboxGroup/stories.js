import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import CheckboxGroup from "./index"

const options1 = [{ value: "0", label: "Yes" }, { value: "1", label: "No" }]

const value1 = [{ value: "0", label: "Yes" }]

const options2 = [
  { value: "0", label: "horntip" },
  { value: "1", label: "lanuginousness" },
  { value: "2", label: "outby" },
  { value: "3", label: "psychosarcous" },
  { value: "4", label: "Etheneldeli" },
  { value: "5", label: "fruitlet" },
]

const value2 = [
  { value: "0", label: "horntip" },
  { value: "1", label: "lanuginousness" },
]

const options3 = [
  { value: "0", label: "arrestor" },
  { value: "1", label: "roselet" },
  { value: "2", label: "nonthinking" },
  { value: "3", label: "triturate" },
]

const value3 = [
  { value: "0", label: "arrestor" },
  { value: "1", label: "roselet" },
]

const options4 = [
  { id: "0", name: "arrestor" },
  { id: "1", name: "roselet" },
  { id: "2", name: "nonthinking" },
  { id: "3", name: "triturate" },
]

const value4 = [{ id: "0", name: "arrestor" }, { id: "1", name: "roselet" }]

storiesOf("CheckboxGroup", module).add("Default", () => (
  <div>
    <div>
      <h3>Default</h3>
      <CheckboxGroup
        options={options1}
        value={value1}
        onChange={action("changed")}
        onBlur={action("blur")}
        onFocus={action("focus")}
      />
    </div>

    <div>
      <h3>Untouched state</h3>
      <CheckboxGroup
        label="My group"
        options={options1}
        value={value1}
        onChange={action("changed")}
        onBlur={action("blur")}
        onFocus={action("focus")}
      />
    </div>

    <div>
      <h3>Success state</h3>
      <CheckboxGroup
        label="My success group"
        options={options2}
        value={value2}
        meta={{
          touched: true,
          valid: true,
        }}
        onChange={action("changed")}
        onBlur={action("blur")}
        onFocus={action("focus")}
      />
    </div>

    <div>
      <h3>Error state</h3>
      <CheckboxGroup
        label="My error group"
        options={options3}
        value={value3}
        meta={{
          touched: true,
          invalid: true,
          error: "My error message",
        }}
        onChange={action("changed")}
        onBlur={action("blur")}
        onFocus={action("focus")}
      />
    </div>

    <div>
      <h3>Simple Value</h3>
      <CheckboxGroup
        label="My group"
        simpleValue
        options={options1}
        value={value1}
        onChange={action("changed")}
        onBlur={action("blur")}
        onFocus={action("focus")}
      />
    </div>

    <div>
      <h3>ReadOnly</h3>
      <CheckboxGroup
        label="My group"
        simpleValue
        options={options1}
        value={value1}
        disabled
        onChange={action("changed")}
        onBlur={action("blur")}
        onFocus={action("focus")}
      />
    </div>

    <div>
      <h3>ValueKey LabelKey</h3>
      <CheckboxGroup
        label="My group"
        valueKey="id"
        labelKey="name"
        options={options4}
        value={value4}
        onChange={action("changed")}
        onBlur={action("blur")}
        onFocus={action("focus")}
      />
    </div>

    <div>
      <h3>ValueKey LabelKey With simpleValue</h3>
      <CheckboxGroup
        label="My group"
        valueKey="id"
        simpleValue
        labelKey="name"
        options={options4}
        value={value4}
        onChange={action("changed")}
        onBlur={action("blur")}
        onFocus={action("focus")}
      />
    </div>
  </div>
))
