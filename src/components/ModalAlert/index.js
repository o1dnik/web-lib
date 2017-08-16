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
    style: PropTypes.object,

    onConfirm: PropTypes.func,
    onClose: PropTypes.func.isRequired,

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
    confirmLoading: false,
    style: {
      box: '',
      header: '',
      body: '',
      footer: ''
    }
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
      onClose,
      confirmDisabled,
      confirmLoading,
      style
    } = this.props

    return (
      <div className='popup__box' style={style.box}>

        <header className='popup__box__header' style={style.header}>
          <i className='ion-close' onClick={onClose} />
          <h1 className='popup__box__header__title'>
            <span>{title}</span>
          </h1>
        </header>

        <div className='popup__box__body' style={style.body}>
          <div>
            <div>{content}</div>
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

        {onConfirm &&
        <footer className='popup__box__footer' style={style.footer}>
          <Button
            className='mm-popup__btn mm-popup__btn--danger'
            onClick={onConfirm}
            disabled={confirmDisabled}
            loading={confirmLoading}
          >
            {confirmContent}
          </Button>
        </footer>}

      </div>
    )
  }
}

export default AlertComponent
