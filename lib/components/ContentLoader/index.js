import _range from 'lodash/range';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';


// Sizes
// 90
// 120
// 190
// 350
// 870

var widths = [230, 300, 380, 420, 480];

export var ContentLoader = function (_Component) {
  _inherits(ContentLoader, _Component);

  function ContentLoader() {
    _classCallCheck(this, ContentLoader);

    return _possibleConstructorReturn(this, (ContentLoader.__proto__ || Object.getPrototypeOf(ContentLoader)).apply(this, arguments));
  }

  _createClass(ContentLoader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          height = _props.height,
          lineHeight = _props.lineHeight,
          header = _props.header;


      var linesCount = height / lineHeight;

      var lines = _range(header ? 4 : 0, Math.floor(linesCount));

      return React.createElement(
        'div',
        { className: 'content-loader' },
        React.createElement(
          'div',
          { style: { height: height }, className: 'animated-background' },
          header && React.createElement(
            'div',
            null,
            React.createElement('div', { className: 'background-masker header-top' }),
            React.createElement('div', { className: 'background-masker header-left' }),
            React.createElement('div', { className: 'background-masker header-right' }),
            React.createElement('div', { className: 'background-masker header-bottom' }),
            React.createElement('div', { className: 'background-masker subheader-left' }),
            React.createElement('div', { className: 'background-masker subheader-right' }),
            React.createElement('div', { className: 'background-masker subheader-bottom' })
          ),
          lines.map(function (i) {
            if (i % 2 === 0) {
              return React.createElement('div', {
                key: i,
                className: 'background-masker',
                style: {
                  top: lineHeight * i + 'px',
                  left: '0',
                  right: '0',
                  height: lineHeight + 'px'
                }
              });
            }

            return React.createElement('div', {
              key: i,
              className: 'background-masker',
              style: {
                top: lineHeight * i + 'px',
                right: '0px',
                left: widths[Math.floor(Math.random() * widths.length)] + 'px',
                height: lineHeight + 'px'
              }
            });
          })
        )
      );
    }
  }]);

  return ContentLoader;
}(Component);

ContentLoader.PropTypes = {
  height: PropTypes.number.isRequired,
  lineHeight: PropTypes.number.isRequired
};
ContentLoader.defaultProps = {
  height: 90,
  lineHeight: 10,
  header: false
};
export default ContentLoader;