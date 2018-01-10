import React, { Component } from "react"
import { storiesOf } from "@storybook/react"
import Pagination from "./index"

class PaginationWrappaer extends Component {
  state = {
    page: 1,
    limit: 10,
    count: 210,
    disabled: false
  }

  handlePageChange = page => {
    this.setState(prevState => ({ ...prevState, disabled: true }))
    // emulate async delay
    setTimeout(() => {
      this.setState(prevState => ({ ...prevState, page, disabled: false }))
    }, 300)
  }

  handleInputChange = e => {
    if (e) e.preventDefault()
    const { value, name } = e.target

    this.setState(prevState => {
      return { ...prevState, [name]: parseInt(value, 10) }
    })
  }

  handleDisabledChange = e => {
    const { checked, name } = e.target

    this.setState(prevState => {
      return { ...prevState, [name]: checked }
    })
  }

  render() {
    const { page, limit, count, disabled } = this.state

    return (
      <div>
        <div>
          <label htmlFor="count">Pages Count (count)</label>
          <input
            type="number"
            id="count"
            name="count"
            value={count}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="limit">Items Per page (limit)</label>
          <input
            type="number"
            id="limit"
            name="limit"
            value={limit}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="page">Current page (page)</label>
          <input
            type="number"
            id="page"
            name="page"
            value={page}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="disabled">
            Is disabled
            <input
              type="checkbox"
              id="disabled"
              name="disabled"
              value={disabled}
              onChange={this.handleDisabledChange}
            />
          </label>
        </div>

        <Pagination
          page={page}
          limit={limit}
          count={count}
          disabled={disabled}
          onChange={this.handlePageChange}
        />
      </div>
    )
  }
}

storiesOf("Pagination", module).add("Default", () => (
  <div>
    <h4>Pagination</h4>
    <PaginationWrappaer />
  </div>
))
