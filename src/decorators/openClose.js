import PropTypes from "prop-types"
import React from "react"

export default Component => {
  return class OpenCloseDecorator extends React.Component {
    static propTypes = {
      isOpen: PropTypes.bool,
      defaultIsOpen: PropTypes.bool,
      toggle: PropTypes.func,
      close: PropTypes.func,
      open: PropTypes.func
    }

    static defaultProps = {
      defaultIsOpen: false
    }

    state = {
      isOpen: this.props.defaultIsOpen
    }

    toggle = e => {
      if (e) e.preventDefault()
      this.setState(prevState => ({ ...prevState, isOpen: !prevState.isOpen }))
    }

    close = e => {
      if (e) e.preventDefault()
      this.setState(prevState => ({ ...prevState, isOpen: false }))
    }

    open = e => {
      if (e) e.preventDefault()
      this.setState(prevState => ({ ...prevState, isOpen: true }))
    }

    render() {
      return (
        <Component
          {...this.state}
          toggle={this.toggle}
          open={this.open}
          close={this.close}
          {...this.props}
        />
      )
    }
  }
}
