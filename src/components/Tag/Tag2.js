import React, {Component, PropTypes} from 'react';
import cn from 'classnames';

class Tag extends Component {
  static propTypes = {
    onClick: PropTypes.func
  };

  render() {

    const {children, onClick} = this.props;

    const css = cn({

    });

    return (
      <span onClick={onClick} className={css}>
        {children}
      </span>
    );
  }
}

export default Tag;
