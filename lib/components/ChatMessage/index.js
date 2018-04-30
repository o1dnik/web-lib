"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require("react-intl");

var _defaultLogo = require("../../../src/assets/img/default-logo.png");

var _defaultLogo2 = _interopRequireDefault(_defaultLogo);

var _react3 = require("linkifyjs/react");

var _react4 = _interopRequireDefault(_react3);

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
    key: "render",
    value: function render() {
      var _props = this.props,
          picture = _props.picture,
          name = _props.name,
          date = _props.date,
          text = _props.text;


      return _react2.default.createElement(
        "div",
        { className: "box message" },
        _react2.default.createElement(
          "div",
          { className: "list-item" },
          _react2.default.createElement(
            "div",
            { className: "list-body" },
            _react2.default.createElement(
              "div",
              { className: "list-thumb small hide-m" },
              _react2.default.createElement("img", {
                alt: "User",
                src: picture === null ? _defaultLogo2.default : picture,
                onError: function onError(e) {
                  e.target.src = _defaultLogo2.default;
                },
                width: "40"
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "list-info" },
              _react2.default.createElement(
                "h2",
                { className: "list-item-subtitle" },
                name
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "list-controlls text-right" },
            _react2.default.createElement(
              "div",
              { className: "expire hide-m" },
              _react2.default.createElement(_reactIntl.FormattedRelative, { value: date })
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "message-text" },
          text.split(/\r\n|\r|\n/g).map(function (chunk, idx) {
            return _react2.default.createElement(
              _react4.default,
              { key: idx, tagName: "p" },
              chunk
            );
          })
        )
      );
    }
  }]);

  return Message;
}(_react.Component);

Message.propTypes = {
  picture: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  date: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  text: _propTypes2.default.string.isRequired
};
Message.defaultProps = {
  picture: _defaultLogo2.default
};
exports.default = Message;
module.exports = exports["default"];