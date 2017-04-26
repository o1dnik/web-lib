'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _distance_in_words_to_now = require('date-fns/distance_in_words_to_now');

var _distance_in_words_to_now2 = _interopRequireDefault(_distance_in_words_to_now);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultLogo = require('../../../src/assets/img/default-logo.png');

var _defaultLogo2 = _interopRequireDefault(_defaultLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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


      var listItemCss = (0, _classnames2.default)({
        'list-item': true,
        'box': true,
        'box-shadow': true,
        'is-unread': isUnread
      });

      return _react2.default.createElement(
        'li',
        { className: 'list-wrapper', onClick: onClick },
        _react2.default.createElement(
          'div',
          { className: listItemCss },
          _react2.default.createElement(
            'div',
            { className: 'list-body' },
            _react2.default.createElement(
              'div',
              { className: 'list-thumb large' },
              _react2.default.createElement('img', { alt: 'Avatar',
                src: image,
                onError: function onError(e) {
                  e.target.src = _defaultLogo2.default;
                }
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'list-info' },
              _react2.default.createElement(
                'div',
                { className: 'list-item-subtitle' },
                subtitle
              ),
              _react2.default.createElement(
                'h2',
                { className: 'list-item-title' },
                title
              )
            )
          ),
          date && _react2.default.createElement(
            'div',
            { className: 'list-controlls text-right' },
            _react2.default.createElement(
              'div',
              { className: 'expire' },
              (0, _distance_in_words_to_now2.default)(date)
            )
          )
        )
      );
    }
  }]);

  return ThreadCard;
}(_react.Component);

ThreadCard.propTypes = {
  title: _react.PropTypes.string.isRequired,
  subtitle: _react.PropTypes.string.isRequired,
  image: _react.PropTypes.string.isRequired,
  date: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
  isUnread: _react.PropTypes.bool.isRequired,
  onClick: _react.PropTypes.func
};
ThreadCard.defaultProps = {
  image: _defaultLogo2.default
};
exports.default = ThreadCard;
module.exports = exports['default'];