import React from 'react';
import {checkConflictProps} from '../helpers';
const warnProps = ['isOpen', 'toggle', 'open', 'close'];

export default (Component) => {
  return class OpenCloseDecorator extends React.Component {
    state = {
      isOpen: this.props.isOpen || false
    }

    toggle = e => {
      if (e) e.preventDefault();
      this.setState({isOpen: !this.state.isOpen});
    }

    close = e => {
      if (e) e.preventDefault();
      this.setState({isOpen: false});
    }

    open = e => {
      if (e) e.preventDefault();
      this.setState({isOpen: true});
    }

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
          isOpen={this.state.isOpen}
          toggle={this.toggle}
          open={this.open}
          close={this.close}
        />
      );
    }
  };
};
