import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Textarea from 'react-textarea-autosize'
import Button from '../Button'

const style = {minHeight: '87px'}

class NewMessageForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    loading: PropTypes.bool
  }

  static defaultProps = {
    value: ''
  }

  render () {
    const {onSubmit, onChange, value, disabled, loading} = this.props

    return (
      <div className='message-send-form box-shadow'>
        <Textarea
          style={style}
          value={value}
          onChange={onChange}
          minRows={3}
          maxRows={15}
        />
        <Button
          className='send-btn'
          onClick={onSubmit}
          loading={loading}
          disabled={disabled}
        >
          Send
        </Button>
      </div>
    )
  }
}

export default NewMessageForm
