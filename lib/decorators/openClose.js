import React from 'react';

export default (Component) => {
  return class OpenCloseDecorator extends React.Component {
    state = {
      isOpen: false
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

    render() {
      return (
        <Component isOpen={this.state.isOpen}
                   toggle={this.toggle}
                   open={this.open}
                   close={this.close}
                   {...this.props}
        />
      );
    }
  };
};
