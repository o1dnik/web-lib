import React, { Component, PropTypes } from 'react'

import Button from '../Button'

class Pagination extends Component {
  static propTypes = {
    disabled: PropTypes.bool.isRequired,
    count: PropTypes.number,
    page: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  }

  render () {
    const {disabled, count, page, limit} = this.props

    if (count === null || count === 0) return null

    const totalPages = Math.floor((count - 1) / limit) + 1

    let pages = []

    if (totalPages < 6) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <Button
            outline
            color={page === i ? 'primary' : 'default'}
            key={i}
            disabled={disabled}
            onClick={this.handleChange(i, disabled)}
          >
            <span>{i}</span>
          </Button>
        )
      }
    }

    if (page <= 3 && totalPages >= 6) {
      for (let i = 1; i < 6; i++) {
        pages.push(
          <Button
            outline
            color={page === i ? 'primary' : 'default'}
            key={i}
            disabled={disabled}
            onClick={this.handleChange(i, disabled)}
          >
            <span>{i}</span>
          </Button>
        )
      }
      pages.push(<Button key={totalPages + 1} disabled>...</Button>)
    }

    if (page > 3 && page <= totalPages - 3 && totalPages >= 6) {
      pages.push(<Button key={totalPages + 1} disabled>...</Button>)

      for (let i = page - 2; i <= page + 2; i++) {
        pages.push(
          <Button
            outline
            color={page === i ? 'primary' : 'default'}
            key={i}
            disabled={disabled}
            onClick={this.handleChange(i, disabled)}
          >
            <span>{i}</span>
          </Button>
        )
      }

      pages.push(<Button key={totalPages + 2} disabled>...</Button>)
    }

    if (page > totalPages - 3 && totalPages >= 6) {
      pages.push(<Button key={totalPages + 1} disabled>...</Button>)
      for (let i = totalPages - 6 + 2; i <= totalPages; i++) {
        pages.push(
          <Button
            outline
            color={page === i ? 'primary' : 'default'}
            key={i}
            disabled={disabled}
            onClick={this.handleChange(i, disabled)}
          >
            <span>{i}</span>
          </Button>
        )
      }
    }

    return (
      <div className='pagination'>

        <Button
          outline
          disabled={page === 1 || disabled}
          onClick={this.handleChange(1, page === 1 || disabled)}
        >
          <i className='ion-ios-arrow-back' />
          <i className='ion-ios-arrow-back' />
        </Button>

        <Button
          outline
          disabled={page === 1 || disabled}
          onClick={this.handleChange(page - 1, page === 1 || disabled)}
        >
          <i className='ion-ios-arrow-back' />
        </Button>

        {pages}

        <Button
          outline
          disabled={page === totalPages || disabled}
          onClick={this.handleChange(page + 1, page === totalPages || disabled)}
        >
          <i className='ion-ios-arrow-forward' />
        </Button>

        <Button
          outline
          disabled={page === totalPages || disabled}
          onClick={
            this.handleChange(totalPages, page === totalPages || disabled)
          }
        >
          <i className='ion-ios-arrow-forward' />
          <i className='ion-ios-arrow-forward' />
        </Button>

      </div>
    )
  }

  handleChange = (page, disabled) => (e) => {
    if (e) e.preventDefault()

    if (!disabled && this.props.page !== page) {
      this.props.onChange(page)
    }
  }
}

export default Pagination
