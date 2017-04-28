import React, { Component, PropTypes } from 'react'
import TextareaInput from '../TextareaInput'
import Button from '../Button'

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
        <TextareaInput value={value} onChange={onChange} />
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
