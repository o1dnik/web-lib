import React, {Component, PropTypes, Children} from 'react';
import {appendClassPrefix, wrapToStopPropagation} from '../../helpers';
import cn from 'classnames';

class Tag extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    bordered: PropTypes.bool,
    extended: PropTypes.bool,
    value: PropTypes.bool,
    size: PropTypes.oneOf([
      'xsmall',
      'small',
      'medium',
      'large',
      'xlarge'
    ]),
    color: PropTypes.oneOf([
      'default',
      'primary',
      'light',
      'danger'
    ])
  };

  static defaultProps = {
    size: 'medium',
    color: 'default',
    className: '',
    disabled: false,
    extended: false,
    bordered: false,
    value: false
  };

  render() {

    const {
      children,
      onClick,
      color,
      size,
      bordered,
      extended,
      disabled,
      value,
      className
    } = this.props;

    const withPrefix = appendClassPrefix('tag');

    const newCildren = Children.map(children, (c) => {
      if (typeof c === 'string' || typeof c === 'number') {
        return <span>{c}</span>;
      }

      if (c === null || c === undefined) {
        return null;
      }

      let childClick;
      let className = c.props.className;

      if (c.props.onClick) {
        childClick = c.props.onClick;
      }

      if (c.type === 'i' && c.props.onClick) {
        childClick = wrapToStopPropagation(c.props.onClick);
        className = cn({
          close: Boolean(childClick),
          'cursor-disabled': Boolean(disabled)
        }, className);
      }

      return React.cloneElement(c, {
        ...c.props,
        onClick: !disabled && childClick,
        className
      });
    });

    const hasIcon = Children.toArray(newCildren).some(c => c.type === 'i');

    const css = cn({
      tag: true,
      [withPrefix(color)]: Boolean(color),
      [withPrefix(size)]: Boolean(size),
      [withPrefix('bordered')]: Boolean(bordered),
      clickable: Boolean(onClick && !disabled),
      [withPrefix('extended')]: Boolean(extended),
      [withPrefix('disabled')]: Boolean(disabled),
      [withPrefix('value')]: Boolean(value),
      [withPrefix('icon')]: Boolean(hasIcon)
    }, className);

    return (
      <span
        onClick={!disabled && onClick}
        className={css}
      >
        {newCildren}
      </span>
    );
  }

}

export default Tag;
