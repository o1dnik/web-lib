import React, {PropTypes, Component} from 'react';
import Loader from '../Loader';
import {appendClassPrefix} from '../../helpers';
import cn from 'classnames';

class Button extends Component {

  static propTypes = {
    href: PropTypes.string,
    link: PropTypes.bool,
    target: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    extended: PropTypes.bool,
    outline: PropTypes.bool,
    size: PropTypes.oneOf([
      'mini',
      'tiny',
      'small',
      'medium',
      'large',
      'big',
      'huge',
      'massive'
    ]),
    color: PropTypes.oneOf([
      'default',
      'primary',
      'success',
      'danger',
      'fb',
      'tw'
    ])
  };

  static defaultProps = {
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
      children
    } = this.props;

    const withPrefix = appendClassPrefix('button');

    const isDisabled = disabled || loading;

    const css = cn({
      button: true,
      [withPrefix(color)]: Boolean(color),
      [withPrefix(size)]: Boolean(size),
      [withPrefix('outline')]: Boolean(outline),
      [withPrefix('extended')]: Boolean(extended),
      [withPrefix('disabled')]: Boolean(disabled),
      [withPrefix('loading')]: Boolean(loading),
      [withPrefix('link')]: Boolean(href || link)
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
          {children}
        </a>
      );

    }

    return (
      <button
        type={type}
        className={css}
        onClick={onClick}
        disabled={isDisabled}
      >

        {loading && <Loader size='tiny'/>}

        {children}

      </button>
    );

  }
}

export default Button;
