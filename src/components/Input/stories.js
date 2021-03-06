import React, { Fragment } from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Input from "./index"

storiesOf("Input", module).add("Default", () => (
  <div>
    <div>
      <h3>Untouched state</h3>
      <Input
        name="my-input"
        id="my-input"
        label={
          <Fragment>
            <span>my-input</span>
            <i className="ion-help-circled" />
          </Fragment>
        }
        placeholder="my-input"
        type="text"
        onChange={e => action("change")(e, e.target.value, e.target.name)}
      />
    </div>
    <div>
      <h3>Success state</h3>
      <Input
        name="my-input"
        meta={{
          touched: true,
          valid: true,
        }}
        id="my-input"
        label="my-input"
        placeholder="my-input"
        type="text"
        onChange={e => action("change")(e, e.target.value, e.target.name)}
      />
    </div>
    <div>
      <h3>Error state</h3>
      <Input
        name="my-input"
        meta={{
          touched: true,
          invalid: true,
          error: "My error message",
        }}
        id="my-input"
        label="my-input"
        placeholder="my-input"
        type="text"
        onChange={e => action("change")(e, e.target.value, e.target.name)}
      />
    </div>
  </div>
))
