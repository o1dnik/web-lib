"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactIntl = require("react-intl");

var _defaultLogo = require("../../../src/assets/img/default-logo.png");

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
    key: "render",
    value: function render() {
      var _props = this.props,
          image = _props.image,
          title = _props.title,
          subtitle = _props.subtitle,
          date = _props.date,
          isUnread = _props.isUnread,
          onClick = _props.onClick;


      var listItemCss = (0, _classnames2.default)({
        "list-item": true,
        box: true,
        "box-shadow": true,
        "is-unread": isUnread
      });

      return _react2.default.createElement(
        "li",
        { className: "list-wrapper", onClick: onClick },
        _react2.default.createElement(
          "div",
          { className: listItemCss },
          _react2.default.createElement(
            "div",
            { className: "list-body" },
            _react2.default.createElement(
              "div",
              { className: "list-thumb hide-m" },
              _react2.default.createElement("img", {
                alt: "Avatar",
                src: image,
                onError: function onError(e) {
                  e.target.src = _defaultLogo2.default;
                }
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "list-info" },
              _react2.default.createElement(
                "div",
                { className: "list-item-subtitle" },
                subtitle
              ),
              _react2.default.createElement(
                "h2",
                { className: "list-item-title" },
                title
              )
            )
          ),
          date && _react2.default.createElement(
            "div",
            { className: "list-controlls text-right" },
            _react2.default.createElement(
              "div",
              { className: "expire" },
              _react2.default.createElement(_reactIntl.FormattedRelative, { value: date })
            )
          )
        )
      );
    }
  }]);

  return ThreadCard;
}(_react.Component);

ThreadCard.propTypes = {
  title: _propTypes2.default.string.isRequired,
  subtitle: _propTypes2.default.string.isRequired,
  image: _propTypes2.default.string.isRequired,
  date: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  isUnread: _propTypes2.default.bool.isRequired,
  onClick: _propTypes2.default.func
};
ThreadCard.defaultProps = {
  image: _defaultLogo2.default,
  isUnread: false
};
exports.default = ThreadCard;
module.exports = exports["default"];