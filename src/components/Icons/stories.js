import React from "react"
import { storiesOf } from "@storybook/react"
import classes from "./classes"

storiesOf("Icons", module).add("Default", () => (
  <div>
    {classes.map(c => (
      <div key={c}>
        <span>
          <i style={{ fontSize: "30px" }} className={c} /> - {c}
        </span>
      </div>
    ))}
  </div>
))
