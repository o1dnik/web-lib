import React, {Component, PropTypes} from 'react'
import TextareaInput from '../TextareaInput'
import Button from '../Button'

class NewMessageForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string
  };

  static defaultProps = {
    value: ''
  };

  render () {
    const {onSubmit, value} = this.props

    return (
      <div className='box box-shadow send-form'>
        <TextareaInput value={value} />
        <Button
          className='send-btn'
          onClick={onSubmit}
          disabled={value.length < 3}
        >
          Send
        </Button>
      </div>
    )
  }
}

export default NewMessageForm
