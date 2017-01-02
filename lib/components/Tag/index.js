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
    long: PropTypes.bool,
    active: PropTypes.bool
  };

  static defaultProps = {
    hideClose: false,
    closeIcon: 'X',
    long: false,
    active: false
  };

  render() {
    const {label, hideClose, closeIcon, long, active} = this.props;

    const css = {
      wrapper: '',
      label: cn({
        'tag': true,
        'tag-active': active,  // what is this ?
        'extended': long       // tag-long / tag-short ?
      }),
      close: cn({
        'remove': true,  // conditional ?
        'close': true    // conditional ?
      })
    };

    return (
      <span className={css.wrapper}>
        <span className={css.label} onClick={this.onClick}>
          {label}
        </span>

        {!hideClose && (
          <span className={css.close} onClick={this.onClose}>
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
