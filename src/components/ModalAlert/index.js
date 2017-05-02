import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Button from '../Button'

class AlertComponent extends Component {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

    confirmContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

    onInputChange: PropTypes.func,
    inputValue: PropTypes.string,
    inputPlaceholder: PropTypes.string,

    onConfirm: PropTypes.func.isRequired,

    confirmDisabled: PropTypes.bool.isRequired,

    confirmLoading: PropTypes.bool.isRequired

  };

  static defaultProps = {
    title: '',
    content: '',
    confirmContent: 'Ok',
    inputValue: '',
    inputPlaceholder: '',
    confirmDisabled: false,
    confirmLoading: false
  };

  render () {
    const {
      title,
      content,
      confirmContent,
      onInputChange,
      inputPlaceholder,
      inputValue,
      onConfirm,
      confirmDisabled,
      confirmLoading
    } = this.props

    return (
      <div className='popup__box'>
        <header className='popup__box__header'>
          <h1 className='popup__box__header__title'>
            <span>{title}</span>
          </h1>
        </header>
        <div className='popup__box__body'>
          <div>
            <p>{content}</p>
            {onInputChange &&
            <input
              type='text'
              className='mm-popup__input'
              onChange={onInputChange}
              placeholder={inputPlaceholder}
              value={inputValue}
            />}
          </div>
        </div>
        <footer className='popup__box__footer'>
          <Button
            className='mm-popup__btn mm-popup__btn--danger'
            onClick={onConfirm}
            disabled={confirmDisabled}
            loading={confirmLoading}
          >
            {confirmContent}
          </Button>
        </footer>
      </div>
    )
  }
}

export default AlertComponent
