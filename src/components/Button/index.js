import React, {PropTypes, Component, Children} from 'react';
import {appendClassPrefix, as} from '../../helpers';
import cn from 'classnames';

class Button extends Component {

  static propTypes = {
    href: PropTypes.string,
    as,
    link: PropTypes.bool,
    target: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    extended: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
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
      'danger',
      'fb',
      'tw',
      'ln'
    ])
  };

  static defaultProps = {
    as: 'button',
    type: 'button',
    size: 'medium',
    color: 'default',
    className: '',
    loading: false,
    disabled: false,
    extended: false,
    outline: false
  };

  render() {
    const {
      href,
      target,
      type,
      className,
      onClick,
      loading,
      disabled,
      extended,
      outline,
      size,
      color,
      link,
      rounded,
      children,
      as,
      ...rest
    } = this.props;

    const withPrefix = appendClassPrefix('button');

    const isDisabled = disabled || loading;

    const newCildren = Children.map(children, (c) => {
      if (c === null) return null;
      if (typeof c === 'string') {
        return <span>{c}</span>;
      }
      return React.cloneElement(c, c.props);
    });

    const hasIcon = Children.toArray(newCildren).some(c => c.type === 'i');

    const css = cn({
      button: true,
      [withPrefix(color)]: Boolean(color),
      [withPrefix(size)]: Boolean(size),
      [withPrefix('rounded')]: Boolean(rounded),
      [withPrefix('outline')]: Boolean(outline),
      [withPrefix('extended')]: Boolean(extended),
      [withPrefix('disabled')]: Boolean(disabled),
      [withPrefix('loading')]: Boolean(loading),
      [withPrefix('link')]: Boolean(href || link),
      [withPrefix('icon')]: Boolean(hasIcon)
    }, className);

    if (href && typeof href === 'string' && href.length > 0 || link) {

      return (
        <a
          href={href || '#'}
          className={css}
          target={target}
          disabled={isDisabled}
          onClick={onClick}
        >
          {newCildren}
        </a>
      );

    }

    const Element = as;

    return (
      <Element
        {...rest}
        type={type}
        className={css}
        onClick={onClick}
        disabled={isDisabled}
      >

        {loading && <i className='ion-load-c animate-spin'/>}

        {newCildren}

      </Element>
    );

  }
}

export default Button;
