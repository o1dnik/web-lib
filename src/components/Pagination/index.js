import PropTypes from "prop-types"
import React, { Component } from "react"

import PaginationItem from "./pagination-item"

class Pagination extends Component {
  static propTypes = {
    disabled: PropTypes.bool.isRequired,
    count: PropTypes.number,
    page: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  render() {
    const { disabled, count, page, limit } = this.props

    if (count === null || count === 0) return null

    const totalPages = Math.floor((count - 1) / limit) + 1

    let pages = []

    if (totalPages < 6) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <PaginationItem
            className={page === i ? "current" : ""}
            key={i}
            disabled={disabled}
            onClick={this.handleChange(i, disabled)}
          >
            {i}
          </PaginationItem>,
        )
      }
    }

    if (page <= 3 && totalPages >= 6) {
      for (let i = 1; i < 6; i++) {
        pages.push(
          <PaginationItem
            className={page === i ? "current" : ""}
            key={i}
            disabled={disabled}
            onClick={this.handleChange(i, disabled)}
          >
            {i}
          </PaginationItem>,
        )
      }
      pages.push(
        <PaginationItem className="hide-inline-m" key={totalPages + 1} disabled>
          ...
        </PaginationItem>,
      )
    }

    if (page > 3 && page <= totalPages - 3 && totalPages >= 6) {
      pages.push(
        <PaginationItem className="hide-inline-m" key={totalPages + 1} disabled>
          ...
        </PaginationItem>,
      )

      for (let i = page - 2; i <= page + 2; i++) {
        pages.push(
          <PaginationItem
            className={page === i ? "current" : ""}
            key={i}
            disabled={disabled}
            onClick={this.handleChange(i, disabled)}
          >
            {i}
          </PaginationItem>,
        )
      }

      pages.push(
        <PaginationItem className="hide-inline-m" key={totalPages + 2} disabled>
          ...
        </PaginationItem>,
      )
    }

    if (page > totalPages - 3 && totalPages >= 6) {
      pages.push(
        <PaginationItem className="hide-inline-m" key={totalPages + 1} disabled>
          ...
        </PaginationItem>,
      )
      for (let i = totalPages - 6 + 2; i <= totalPages; i++) {
        pages.push(
          <PaginationItem
            className={page === i ? "current" : ""}
            key={i}
            disabled={disabled}
            onClick={this.handleChange(i, disabled)}
          >
            {i}
          </PaginationItem>,
        )
      }
    }

    return (
      <ul className="pagination">
        <PaginationItem
          disabled={page === 1 || disabled}
          className="pagination-first"
          onClick={this.handleChange(1, page === 1 || disabled)}
        >
          <i className="ion-chevron-left" />
        </PaginationItem>

        <PaginationItem
          disabled={page === 1 || disabled}
          className="pagination-previous"
          onClick={this.handleChange(page - 1, page === 1 || disabled)}
        >
          <i className="ion-chevron-left" />
        </PaginationItem>

        {pages}

        <PaginationItem
          disabled={page === totalPages || disabled}
          className="pagination-next"
          onClick={this.handleChange(page + 1, page === totalPages || disabled)}
        >
          <i className="ion-chevron-right" />
        </PaginationItem>

        <PaginationItem
          disabled={page === totalPages || disabled}
          className="pagination-last"
          onClick={this.handleChange(
            totalPages,
            page === totalPages || disabled,
          )}
        >
          <i className="ion-chevron-right" />
        </PaginationItem>
      </ul>
    )
  }

  handleChange = (page, disabled) => e => {
    if (e) e.preventDefault()

    if (!disabled && this.props.page !== page) {
      this.props.onChange(page)
    }
  }
}

export default Pagination
