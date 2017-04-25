'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _distance_in_words_to_now = require('date-fns/distance_in_words_to_now');

var _distance_in_words_to_now2 = _interopRequireDefault(_distance_in_words_to_now);

var _defaultLogo = require('../../../src/assets/img/default-logo.png');

var _defaultLogo2 = _interopRequireDefault(_defaultLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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


      return _react2.default.createElement(
        'div',
        { className: 'box box-shadow' },
        _react2.default.createElement(
          'div',
          { className: 'list-item' },
          _react2.default.createElement(
            'div',
            { className: 'list-body' },
            _react2.default.createElement(
              'div',
              { className: 'list-thumb small hide-m' },
              _react2.default.createElement('img', {
                alt: 'User Picture',
                src: picture,
                onError: function onError(e) {
                  e.target.src = _defaultLogo2.default;
                },
                width: '40'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'list-info' },
              _react2.default.createElement(
                'h2',
                { className: 'list-item-subtitle' },
                name
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'list-controlls text-right' },
            _react2.default.createElement(
              'div',
              { className: 'expire hide-m' },
              (0, _distance_in_words_to_now2.default)(date)
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'message-text' },
          text
        )
      );
    }
  }]);

  return Message;
}(_react.Component);

Message.propTypes = {
  picture: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string.isRequired,
  date: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired,
  text: _react.PropTypes.string.isRequired
};
Message.defaultProps = {
  picture: _defaultLogo2.default
};
exports.default = Message;
module.exports = exports['default'];