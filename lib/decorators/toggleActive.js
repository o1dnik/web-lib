import React from 'react';

export default (Component) => {
  return class ActiveItemDecorator extends React.Component {
    state = {
      activeItem: this.props.activeItem || null
    }

    toggleActive = id => e => {
      if (e) e.preventDefault();
      const activeItem = id === this.state.activeItem ? null : id;
      this.setState({activeItem});
    }

    isActive = id => this.state.activeItem === id;

    render() {
      return (
        <Component {...this.state}
                   isActive={this.isActive}
                   toggleActive={this.toggleActive}
                   {...this.props}
        />
      );
    }
  };
};