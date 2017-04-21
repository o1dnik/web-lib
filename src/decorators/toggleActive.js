import React, {PropTypes} from 'react'

export default (Component) => {
  return class ActiveItemDecorator extends React.Component {
    static propTypes = {
      activeItem: PropTypes.any,
      defaultActiveItem: PropTypes.any,
      toggleActive: PropTypes.func,
      isActive: PropTypes.func
    }

    static defaultProps = {
      defaultActiveItem: null
    }

    state = {
      activeItem: this.props.defaultActiveItem
    }

    toggleActive = item => e => {
      if (e) e.preventDefault()
      this.setState((prevState) => {
        const activeItem = item === prevState.activeItem ? null : item
        return {...prevState, activeItem}
      })
    }

    isActive = id => this.state.activeItem === id;

    render () {
      return (
        <Component
          {...this.state}
          isActive={this.isActive}
          toggleActive={this.toggleActive}
          {...this.props}
        />
      )
    }
  }
}
