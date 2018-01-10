import React, { Component } from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import NumberInput from "./index"

class NumberInputWrappaer extends Component {
  state = {
    value: 0,
    loading: false
  }

  handleChange = value => {
    action("change")(value)
    this.setState(prevState => ({ ...prevState, value }))
  }

  render() {
    const { value, loading } = this.state

    return (
      <div>
        <NumberInput
          onBlur={e => action("blur")(e)}
          onFocus={e => action("focus")(e)}
          id="candidate_salary"
          name="candidate_salary"
          label="Salary Per Year"
          value={value}
          minValue={0}
          maxValue={100000}
          step={5000}
          disabled={loading}
          onChange={this.handleChange}
        />

        <NumberInput
          id="candidate_salary_1"
          label="Salary Per Year With Redux-Form"
          input={{
            value,
            name: "candidate_salary",
            onChange: this.handleChange,
            onBlur: e => action("blur")(e),
            onFocus: e => action("focus")(e)
          }}
          minValue={0}
          maxValue={100000}
          step={5000}
          disabled={loading}
        />
      </div>
    )
  }
}

storiesOf("NumberInput", module).add("Default", () => (
  <div>
    <h4>NumberInput</h4>
    <NumberInputWrappaer />
  </div>
))
