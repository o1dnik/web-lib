var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

import cn from 'classnames';

import DEFAULT_PROFILE_IMAGE from '../../../src/assets/img/default-logo.png';

var ThreadCard = function (_Component) {
  _inherits(ThreadCard, _Component);

  function ThreadCard() {
    _classCallCheck(this, ThreadCard);

    return _possibleConstructorReturn(this, (ThreadCard.__proto__ || Object.getPrototypeOf(ThreadCard)).apply(this, arguments));
  }

  _createClass(ThreadCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          image = _props.image,
          title = _props.title,
          subtitle = _props.subtitle,
          date = _props.date,
          isUnread = _props.isUnread,
          onClick = _props.onClick;


      var listItemCss = cn({
        'list-item': true,
        'box': true,
        'box-shadow': true,
        'is-unread': isUnread
      });

      return React.createElement(
        'li',
        { className: 'list-wrapper', onClick: onClick },
        React.createElement(
          'div',
          { className: listItemCss },
          React.createElement(
            'div',
            { className: 'list-body' },
            React.createElement(
              'div',
              { className: 'list-thumb hide-m' },
              React.createElement('img', { alt: 'Avatar',
                src: image,
                onError: function onError(e) {
                  e.target.src = DEFAULT_PROFILE_IMAGE;
                }
              })
            ),
            React.createElement(
              'div',
              { className: 'list-info' },
              React.createElement(
                'div',
                { className: 'list-item-subtitle' },
                subtitle
              ),
              React.createElement(
                'h2',
                { className: 'list-item-title' },
                title
              )
            )
          ),
          date && React.createElement(
            'div',
            { className: 'list-controlls text-right' },
            React.createElement(
              'div',
              { className: 'expire' },
              distanceInWordsToNow(date),
              ' ago'
            )
          )
        )
      );
    }
  }]);

  return ThreadCard;
}(Component);

ThreadCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  isUnread: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};
ThreadCard.defaultProps = {
  image: DEFAULT_PROFILE_IMAGE,
  isUnread: false
};


export default ThreadCard;