import PropTypes from "prop-types"
import React from "react"

export default Component => {
  return class MultipleActiveItemDecorator extends React.Component {
    static propTypes = {
      activeItems: PropTypes.any,
      defaultActiveItems: PropTypes.any,
      toggleActive: PropTypes.func,
      isActive: PropTypes.func,
      disableAll: PropTypes.func
    }

    static defaultProps = {
      defaultActiveItems: []
    }

    state = {
      activeItems: this.props.defaultActiveItems
    }

    toggleActive = item => e => {
      if (e) e.preventDefault()

      this.setState(prevState => {
        const { activeItems } = prevState

        const newItems = this.isActive(item)
          ? activeItems.filter(i => i !== item)
          : activeItems.concat(item)

        return { ...prevState, activeItems: newItems }
      })
    }

    isActive = item => this.state.activeItems.includes(item)

    disableAll = e => {
      if (e) e.preventDefault()
      this.setState(prevState => ({ ...prevState, activeItems: [] }))
    }

    render() {
      return (
        <Component
          {...this.state}
          isActive={this.isActive}
          toggleActive={this.toggleActive}
          disableAll={this.disableAll}
          {...this.props}
        />
      )
    }
  }
}
