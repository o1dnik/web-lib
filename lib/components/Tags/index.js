import React, {Component, PropTypes} from 'react';
import cn from 'classnames';
import Tag from '../Tag';
import toggleActive from '../../decorators/toggleActive';
import toggleActiveMultiple from '../../decorators/toggleActiveMultiple';
import isEqual from 'lodash/isEqual';

class Tags extends Component {
  static propTypes = {
    tags: PropTypes.array.isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onTagRemove: PropTypes.func,
    hideClose: PropTypes.bool,
    closeIcon: PropTypes.string,
    extended: PropTypes.bool,
    inactive: PropTypes.bool,

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

  componentWillReceiveProps(nextProps) {

    if (!isEqual(this.props.activeItem, nextProps.activeItem)) {
      return nextProps.onChange && nextProps.onChange(nextProps.activeItem);
    }

    if (!isEqual(this.props.activeItems, nextProps.activeItems)) {
      nextProps.onChange && nextProps.onChange(nextProps.activeItems);
    }

  }

  render() {

    const {tags, label, id, ...rest} = this.props;
    const {isActive, toggleActive, onClick} = this.props;

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
            onClick={onClick || toggleActive && toggleActive(tag.value)}
            onClose={this.onClose(tag)}
          />
        )}

      </div>
    );
  }

  onClose = (tag) => () => {
    const {onTagRemove} = this.props;
    if (onTagRemove) onTagRemove(tag);
  }

}

Tags.toggleActive = toggleActive(Tags);
Tags.toggleActiveMultiple = toggleActiveMultiple(Tags);

export default Tags;
