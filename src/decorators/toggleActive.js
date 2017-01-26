import React from 'react';
import {checkConflictProps} from '../helpers';
const warnProps = ['toggleActive', 'isActive', 'activeItem'];

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

    componentWillReceiveProps(nextProps) {
      checkConflictProps(nextProps, warnProps);
    }

    componentDidMount() {
      checkConflictProps(this.props, warnProps);
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          isActive={this.isActive}
          toggleActive={this.toggleActive}
        />
      );
    }
  };
};
