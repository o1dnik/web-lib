import React, {Component, PropTypes} from 'react';
import cn from 'classnames';
import Tag from '../Tag';
import toggleActive from '../../decorators/toggleActive';
import toggleActiveMultiple from '../../decorators/toggleActiveMultiple';

class Tags extends Component {
  static propTypes = {
    tags: PropTypes.array.isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onClick: PropTypes.func,
    onTagRemove: PropTypes.func,
    hideClose: PropTypes.bool,
    closeIcon: PropTypes.string,
    extended: PropTypes.bool,
    disabled: PropTypes.bool,

    //decorators
    activeItem: PropTypes.any,
    activeItems: PropTypes.any,
    isActive: PropTypes.func,
    toggleActive: PropTypes.func,
    disableAll: PropTypes.func
  };

  static defaultProps = {
    tags: []
  };

  render() {

    const {tags, label, id, isActive, disabled, ...rest} = this.props;

    const css = cn({'tags': true});

    return (
      <div className={css}>

        {label && <label htmlFor={id}>{label}</label>}

        {tags.map((tag, key) =>
          <Tag
            {...rest}
            key={key}
            label={tag.label}
            active={isActive && isActive(tag.value)}
            disabled={disabled}
            onClick={this.onClick(tag)}
            onClose={this.onClose(tag)}
          />
        )}

      </div>
    );
  }

  onClick = (tag) => (e) => {
    e.preventDefault();
    const {disabled, onClick, toggleActive} = this.props;

    if (disabled) return undefined;
    if (onClick) {
      onClick(tag.value);
    } else {
      if (toggleActive) toggleActive(tag.value);
    }
  }

  onClose = (tag) => () => {
    const {disabled, onTagRemove} = this.props;
    if (disabled) return undefined;
    if (onTagRemove) onTagRemove(tag);
  }

}

Tags.toggleActive = toggleActive(Tags);
Tags.toggleActiveMultiple = toggleActiveMultiple(Tags);

export default Tags;
