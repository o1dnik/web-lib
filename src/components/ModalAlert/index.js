import PropTypes from "prop-types"
import React, { Component } from "react"
import Button from "../Button"

class AlertComponent extends Component {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

    confirmContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

    onInputChange: PropTypes.func,
    inputValue: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    className: PropTypes.string,

    onConfirm: PropTypes.func,
    onClose: PropTypes.func.isRequired,

    confirmDisabled: PropTypes.bool.isRequired,

    confirmLoading: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    title: "",
    content: "",
    confirmContent: "Ok",
    inputValue: "",
    inputPlaceholder: "",
    confirmDisabled: false,
    confirmLoading: false,
    className: "",
  }

  render() {
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
      className,
    } = this.props

    return (
      <div className={"popup__box " + className}>
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
                type="text"
                className="mm-popup__input"
                onChange={onInputChange}
                placeholder={inputPlaceholder}
                value={inputValue}
              />
            )}
          </div>
        </div>

        {onConfirm && (
          <footer className="popup__box__footer">
            <Button
              className="mm-popup__btn mm-popup__btn--danger"
              onClick={onConfirm}
              disabled={confirmDisabled}
              loading={confirmLoading}
            >
              {confirmContent}
            </Button>
          </footer>
        )}
      </div>
    )
  }
}

export default AlertComponent
