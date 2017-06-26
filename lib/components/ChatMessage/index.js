var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

import defaultPicture from '../../../src/assets/img/default-logo.png';
import Linkify from 'linkifyjs/react';

var Message = function (_Component) {
  _inherits(Message, _Component);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).apply(this, arguments));
  }

  _createClass(Message, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          picture = _props.picture,
          name = _props.name,
          date = _props.date,
          text = _props.text;


      return React.createElement(
        'div',
        { className: 'box message' },
        React.createElement(
          'div',
          { className: 'list-item' },
          React.createElement(
            'div',
            { className: 'list-body' },
            React.createElement(
              'div',
              { className: 'list-thumb small hide-m' },
              React.createElement('img', {
                alt: 'User Picture',
                src: picture,
                onError: function onError(e) {
                  e.target.src = defaultPicture;
                },
                width: '40'
              })
            ),
            React.createElement(
              'div',
              { className: 'list-info' },
              React.createElement(
                'h2',
                { className: 'list-item-subtitle' },
                name
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'list-controlls text-right' },
            React.createElement(
              'div',
              { className: 'expire hide-m' },
              distanceInWordsToNow(date),
              ' ago'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'message-text' },
          text.split(/\r\n|\r|\n/g).map(function (chunk, idx) {
            return React.createElement(
              Linkify,
              { key: idx, tagName: 'p' },
              chunk
            );
          })
        )
      );
    }
  }]);

  return Message;
}(Component);

Message.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  text: PropTypes.string.isRequired
};
Message.defaultProps = {
  picture: defaultPicture
};


export default Message;