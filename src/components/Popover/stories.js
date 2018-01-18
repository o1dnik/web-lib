import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Popover from "./index"
import Tag from "../Tag"

const body = (
  <div className="popover-container">
    <h3 className="popover-header">Lorem ipsum</h3>
    <div className="popover-content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
  </div>
)

storiesOf("Popover", module).add("Default", () => (
  <div style={{ paddingTop: "20%", textAlign: "center", height: "900px" }}>
    <div>
      <Popover
        preferPlace="left"
        className="popover-success"
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
        className="popover-error"
        body={body}
        toggleOnOut
        onOuterAction={action("onOuterAction")}
      >
        <Tag>Below</Tag>
      </Popover>

      <Popover
        preferPlace="right"
        className="popover-warning"
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
        className="popover-info"
        body={body}
        toggleOnOut
        onOuterAction={action("onOuterAction")}
      >
        {props => <Tag onClick={props.toggle}>As a function child</Tag>}
      </Popover>
    </div>
  </div>
))
