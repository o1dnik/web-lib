'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _is_valid = require('date-fns/is_valid');

var _is_valid2 = _interopRequireDefault(_is_valid);

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
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ThreadCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ThreadCard.__proto__ || Object.getPrototypeOf(ThreadCard)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      if (e) e.preventDefault();

      if (_this.props.onClick) {
        _this.props.onClick();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ThreadCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          image = _props.image,
          title = _props.title,
          subtitle = _props.subtitle,
          date = _props.date,
          isRead = _props.isRead;


      var listItemCss = (0, _classnames2.default)({
        'list-item': true,
        'box': true,
        'box-shadow': true,
        'is-read': isRead
      });

      return _react2.default.createElement(
        'li',
        { className: 'list-wrapper', onClick: this.handleClick },
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
          _react2.default.createElement(
            'div',
            { className: 'list-controlls text-right' },
            _react2.default.createElement(
              'div',
              { className: 'expire' },
              date && (0, _is_valid2.default)(date) && (0, _distance_in_words_to_now2.default)(date)
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
  date: _react.PropTypes.string,
  isRead: _react.PropTypes.bool.isRequired,
  onClick: _react.PropTypes.func
};
ThreadCard.defaultProps = {
  image: _defaultLogo2.default,
  date: null
};
exports.default = ThreadCard;
module.exports = exports['default'];