import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Popover from "./index"
import Tag from "../Tag"

const body = (
  <div>
    <h3 className="popover-header">Lorem ipsum</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>
)

storiesOf("Popover", module).add("Default", () => (
  <div style={{ paddingTop: "150px", paddingLeft: "400px", height: "900px" }}>
    <div>
      <Popover
        preferPlace="left"
        body={body}
        toggleOnOut
        onOuterAction={action("onOuterAction")}
      >
        <Tag>Left</Tag>
      </Popover>

      <Popover
        preferPlace="above"
        body={body}
        toggleOnOut
        onOuterAction={action("onOuterAction")}
      >
        <Tag>Above</Tag>
      </Popover>

      <Popover
        preferPlace="below"
        body={body}
        toggleOnOut
        onOuterAction={action("onOuterAction")}
      >
        <Tag>Below</Tag>
      </Popover>

      <Popover
        preferPlace="right"
        body={body}
        toggleOnOut
        onOuterAction={action("onOuterAction")}
      >
        <Tag>Right</Tag>
      </Popover>
    </div>
    <br />
    <br />
    <br />
    <div>
      <Popover
        preferPlace="above"
        body={body}
        toggleOnOut
        onOuterAction={action("onOuterAction")}
      >
        {props => <Tag onClick={props.toggle}>As a function child</Tag>}
      </Popover>
    </div>
  </div>
))
