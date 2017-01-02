import React, {PropTypes, Component} from 'react';
import cn from 'classnames';

class Button extends Component {

  static propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    extended: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'large', 'xlarge']),
    color: PropTypes.oneOf([
      'green',
      'red',
      'ln',
      'fb',
      'tw',
      'white',
      'danger'
    ])
  };

  static defaultProps = {
    type: 'button',
    className: '',
    loading: false,
    disabled: false,
    extended: false
  };

  render() {
    const {className, type, loading, disabled, children, onClick} = this.props;

    const isDisabled = disabled || loading;

    const classes = cn({
      [`button-${this.props.color}`]: this.props.color,
      [this.props.size]: this.props.size,
      'extended': this.props.extended,
      'button-disabled': isDisabled
    }, className);

    return (
      <button
        type={type}
        className={classes}
        onClick={onClick}
        disabled={isDisabled}
      >
        {children}
      </button>
    );
  }
}

export default Button;
