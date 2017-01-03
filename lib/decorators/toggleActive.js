import React from 'react';

export default (Component) => {
  return class ActiveItemDecorator extends React.Component {
    state = {
      activeItem: null
    }

    toggleActive = id => e => {
      if (e) e.preventDefault();
      const activeItem = id === this.state.activeItem ? null : id;
      this.setState({activeItem});
    }

    isActive = id => this.state.activeItem === id;

    render() {
      return (
        <Component {...this.props}
                   {...this.state}
                   isActive={this.isActive}
                   toggleActive={this.toggleActive}
        />
      );
    }
  };
};