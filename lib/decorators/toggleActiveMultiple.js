import React from 'react';

export default (Component) => {
  return class MultipleActiveItemDecorator extends React.Component {
    state = {
      activeItems: []
    }

    toggleActive = id => e => {
      if (e) e.preventDefault();
      const {activeItems} = this.state;

      const newItems = this.isActive(id) ?
        activeItems.filter(i => i !== id) :
        activeItems.concat(id);

      this.setState({activeItems: newItems});
    }

    disableAll = () => {
      this.setState({activeItems: []});
    }

    isActive = id => this.state.activeItems.includes(id);

    render() {
      return (
        <Component {...this.props}
                   {...this.state}
                   isActive={this.isActive}
                   toggleActive={this.toggleActive}
                   disableAll={this.disableAll}
        />
      );
    }
  };
};