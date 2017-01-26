import React from 'react';
import {checkConflictProps} from '../helpers';
const warnProps = ['toggleActive', 'isActive', 'disableAll', 'activeItems'];

export default (Component) => {
  return class MultipleActiveItemDecorator extends React.Component {
    state = {
      activeItems: this.props.activeItems || []
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
          activeItems={this.state.activeItems}
          isActive={this.isActive}
          toggleActive={this.toggleActive}
          disableAll={this.disableAll}
        />
      );
    }
  };
};
