import PropTypes from "prop-types"
import React, { Component } from "react"
import Button from "../Button"

class ConfirmModalComponent extends Component {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

    confirmContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    cancelContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

    onInputChange: PropTypes.func,
    inputValue: PropTypes.string,
    inputType: PropTypes.string,
    inputPlaceholder: PropTypes.string,

    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,

    confirmDisabled: PropTypes.bool.isRequired,
    cancelDisabled: PropTypes.bool.isRequired,

    confirmLoading: PropTypes.bool.isRequired,
    cancelLoading: PropTypes.bool.isRequired
  }

  static defaultProps = {
    title: "",
    content: "",
    confirmContent: "Confirm",
    cancelContent: "Cancel",
    inputValue: "",
    inputType: "text",
    inputPlaceholder: "",
    confirmDisabled: false,
    cancelDisabled: false,
    confirmLoading: false,
    cancelLoading: false
  }

  render() {
    const {
      title,
      content,
      confirmContent,
      cancelContent,
      onInputChange,
      inputPlaceholder,
      inputValue,
      inputType,
      onConfirm,
      onCancel,
      onClose,
      confirmDisabled,
      cancelDisabled,
      confirmLoading,
      cancelLoading
    } = this.props

    return (
      <div className="popup__box">
        <header className="popup__box__header">
          <i className="ion-close" onClick={onClose} />
          <h1 className="popup__box__header__title">
            <span>{title}</span>
          </h1>
        </header>
        <div className="popup__box__body">
          <div>
            <div>{content}</div>
            {onInputChange && (
              <input
                type={inputType}
                className="mm-popup__input"
                onChange={onInputChange}
                placeholder={inputPlaceholder}
                value={inputValue}
              />
            )}
          </div>
        </div>
        <footer className="popup__box__footer">
          <div className="popup__box__footer__left-space">
            <Button
              className="mm-popup__btn mm-popup__btn--cancel"
              onClick={onCancel}
              disabled={cancelDisabled}
              loading={cancelLoading}
            >
              {cancelContent}
            </Button>
          </div>
          <div className="popup__box__footer__right-space">
            <Button
              className="mm-popup__btn mm-popup__btn--danger"
              onClick={onConfirm}
              disabled={confirmDisabled}
              loading={confirmLoading}
            >
              {confirmContent}
            </Button>
          </div>
        </footer>
      </div>
    )
  }
}

export default ConfirmModalComponent
