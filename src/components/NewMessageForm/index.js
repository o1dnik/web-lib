import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Textarea from 'react-textarea-autosize'
import Button from '../Button'

const style = {minHeight: '87px', marginBottom: '10px'}

class NewMessageForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    loading: PropTypes.bool
  }

  static defaultProps = {
    value: '',
    buttonText: 'Send'
  }

  render () {
    const {onSubmit, onChange, value, disabled, loading, buttonText} = this.props

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
          {buttonText}
        </Button>
      </div>
    )
  }
}

export default NewMessageForm
