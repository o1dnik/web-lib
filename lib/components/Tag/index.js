import React, {PropTypes, Component} from 'react';
import cn from 'classnames';


class Tag extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    hideClose: PropTypes.bool,
    closeIcon: PropTypes.string,
    extended: PropTypes.bool,
    inactive: PropTypes.bool
  };

  static defaultProps = {
    hideClose: false,
    closeIcon: 'X',
    extended: false,
    inactive: false
  };

  render() {
    const {
      label, hideClose, closeIcon, extended, inactive, className,
      onClick, onClose
    } = this.props;

    const isInactive = inactive || (className && className.includes('inactive'));
    const isExtended = extended || (className && className.includes('extended'));

    const css = {
      wrapper: '',
      label: cn({
        'tag': true,
        'inactive': isInactive,
        'extended': isExtended
      }),
      close: cn({
        'remove': true,  // conditional ?
        'close': true    // conditional ?
      })
    };

    return (
      <span className={css.wrapper}>
        <span
          className={css.label}
          onClick={this.onClick.bind(this)}
          style={{cursor: (onClick && !isInactive) ? 'pointer' : 'default'}}
        >
          {label}
        </span>

        {(!isInactive && !hideClose && onClose) && (
          <span
            className={css.close}
            onClick={this.onClose.bind(this)}
            style={{cursor: 'pointer'}}
          >
            {closeIcon}
          </span>
        )}
      </span>
    );
  }

  onClick(e) {
    const {onClick, id} = this.props;

    if (typeof onClick !== 'undefined') {
      e.preventDefault();
      onClick(id);
    }
  }

  onClose(e) {
    const {onClose, id} = this.props;

    if (typeof onClose !== 'undefined') {
      e.preventDefault();
      onClose(id);
    }
  }

}

export default Tag;
