import React from "react"
import { storiesOf } from "@storybook/react"
import Tooltip from "./index"
import Tag from "../Tag"

storiesOf("Tooltip", module).add("Default", () => (
  <div style={{ padding: "50px" }}>
    <Tag color="primary" data-for="main" data-tip>
      Tooltip
    </Tag>

    <Tooltip id="main" effect="solid">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <p>
        At dolore dolores eius obcaecati porro, quos tempore unde vero
        voluptates voluptatibus?
      </p>
    </Tooltip>

    <Tag data-for="second" data-tip>
      Tooltip 2
    </Tag>

    <Tooltip id="second" effect="solid" type="light">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <p>
        At dolore dolores eius obcaecati porro, quos tempore unde vero
        voluptates voluptatibus?
      </p>
      <p>
        At dolore dolores eius obcaecati porro, quos tempore unde vero
        voluptates voluptatibus?
      </p>
    </Tooltip>
  </div>
))
