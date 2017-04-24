'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _defaultLogo = require('../../assets/img/default-logo.png');

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
          expiresAt = _props.expiresAt,
          isRead = _props.isRead;


      var listItemCss = (0, _classnames2.default)({
        'list-item': true,
        'box': true,
        'box-shadow': true,
        'is-read': isRead
      });

      return _react2.default.createElement(
        'li',
        { className: 'list-wrapper' },
        _react2.default.createElement(
          'div',
          { className: listItemCss },
          _react2.default.createElement(
            'div',
            { className: 'list-body' },
            _react2.default.createElement(
              'div',
              { className: 'list-thumb large hide-m' },
              _react2.default.createElement('img', { alt: 'trololo',
                src: image || _defaultLogo2.default,
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
          _react2.default.createElement(
            'div',
            { className: 'list-controlls text-right' },
            _react2.default.createElement(
              'div',
              { className: 'expire hide-m' },
              expiresAt
            )
          )
        )
      );
    }
  }]);

  return ThreadCard;
}(_react.Component);

ThreadCard.propTypes = {
  id: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string.isRequired,
  image: _react.PropTypes.string.isRequired,
  expiresAt: _react.PropTypes.string.isRequired,
  isRead: _react.PropTypes.bool.isRequired
};
ThreadCard.defaultProps = {
  id: '',
  title: 'Joobla Descriptionenene',
  subtitle: 'Paramaribaladam Pirindirimobola',
  image: '',
  expiresAt: '9 days',
  isRead: false
};
exports.default = ThreadCard;
module.exports = exports['default'];