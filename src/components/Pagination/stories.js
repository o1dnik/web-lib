import React, { Component } from 'react'
import { storiesOf } from '@kadira/storybook'
import Pagination from './index'

class PaginationWrappaer extends Component {
  state = {
    page: 1,
    limit: 10,
    count: 210,
    disabled: false
  }

  handlePageChange = page => {
    this.setState((prevState) => ({...prevState, disabled: true}))
    // emulate async delay
    setTimeout(() => {
      this.setState((prevState) => ({...prevState, page, disabled: false}))
    }, 300)
  }

  handleInputChange = (e) => {
    if (e) e.preventDefault()
    const {value, name} = e.target

    this.setState((prevState) => {
      return {...prevState, [name]: parseInt(value)}
    })
  }

  handleDisabledChange = (e) => {
    const {checked, name} = e.target

    this.setState((prevState) => {
      return {...prevState, [name]: checked}
    })
  }

  render () {
    const {page, limit, count, disabled} = this.state

    return (
      <div>

        <div>
          <label htmlFor='count'>Pages Count (count)</label>
          <input
            type='number'
            id='count'
            name='count'
            value={count}
            onChange={this.handleInputChange} />
        </div>

        <div>
          <label htmlFor='limit'>Items Per page (limit)</label>
          <input
            type='number'
            id='limit'
            name='limit'
            value={limit}
            onChange={this.handleInputChange} />
        </div>

        <div>
          <label htmlFor='page'>Current page (page)</label>
          <input
            type='number'
            id='page'
            name='page'
            value={page}
            onChange={this.handleInputChange} />
        </div>

        <div>
          <label htmlFor='disabled'>
            Is disabled
            <input
              type='checkbox'
              id='disabled'
              name='disabled'
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

storiesOf('Pagination', module)
  .add('Default', () => (
    <div>
      <h4>Pagination</h4>
      <PaginationWrappaer />
      <ul className='pagination'>
        <li className='pagination-first disabled'>
          <a>
            <i className='ion-chevron-left' />
          </a>
        </li>
        <li className='pagination-previous disabled'>
          <a>
            <i className='ion-chevron-left' />
          </a>
        </li>
        <li><a>1</a></li>
        <li className='current'><a href='#'>2</a></li>
        <li><a>3</a></li>
        <li><a>4</a></li>
        <li><a>5</a></li>
        <li className='pagination-next'>
          <a>
            <i className='ion-chevron-right' />
          </a>
        </li>
        <li className='pagination-last'>
          <a>
            <i className='ion-chevron-right' />
          </a>
        </li>
      </ul>
    </div>
  ))
