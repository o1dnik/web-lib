'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentLoader = undefined;

var _range2 = require('lodash/range');

var _range3 = _interopRequireDefault(_range2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Sizes
// 90
// 120
// 190
// 350
// 870

var widths = [230, 300, 380, 420, 480];

var ContentLoader = exports.ContentLoader = function (_Component) {
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

      var lines = (0, _range3.default)(header ? 4 : 0, Math.floor(linesCount));

      return _react2.default.createElement(
        'div',
        { className: 'content-loader' },
        _react2.default.createElement(
          'div',
          { style: { height: height }, className: 'animated-background' },
          header && _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('div', { className: 'background-masker header-top' }),
            _react2.default.createElement('div', { className: 'background-masker header-left' }),
            _react2.default.createElement('div', { className: 'background-masker header-right' }),
            _react2.default.createElement('div', { className: 'background-masker header-bottom' }),
            _react2.default.createElement('div', { className: 'background-masker subheader-left' }),
            _react2.default.createElement('div', { className: 'background-masker subheader-right' }),
            _react2.default.createElement('div', { className: 'background-masker subheader-bottom' })
          ),
          lines.map(function (i) {
            if (i % 2 === 0) {
              return _react2.default.createElement('div', {
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

            return _react2.default.createElement('div', {
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
}(_react.Component);

ContentLoader.propTypes = {
  height: _propTypes2.default.number.isRequired,
  lineHeight: _propTypes2.default.number.isRequired
};
ContentLoader.defaultProps = {
  height: 90,
  lineHeight: 10,
  header: false
};
exports.default = ContentLoader;