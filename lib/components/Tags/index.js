'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Tag = require('../Tag');

var _Tag2 = _interopRequireDefault(_Tag);

var _toggleActive = require('../../decorators/toggleActive');

var _toggleActive2 = _interopRequireDefault(_toggleActive);

var _toggleActiveMultiple = require('../../decorators/toggleActiveMultiple');

var _toggleActiveMultiple2 = _interopRequireDefault(_toggleActiveMultiple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tags = function (_Component) {
  _inherits(Tags, _Component);

  function Tags() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tags);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tags.__proto__ || Object.getPrototypeOf(Tags)).call.apply(_ref, [this].concat(args))), _this), _this.onClose = function (tag) {
      return function () {
        var onTagRemove = _this.props.onTagRemove;

        if (onTagRemove) onTagRemove(tag);
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tags, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          tags = _props.tags,
          label = _props.label,
          id = _props.id,
          isActive = _props.isActive,
          disabled = _props.disabled,
          onClick = _props.onClick,
          toggleActive = _props.toggleActive,
          rest = _objectWithoutProperties(_props, ['tags', 'label', 'id', 'isActive', 'disabled', 'onClick', 'toggleActive']);

      var css = (0, _classnames2.default)({ 'tags': true });

      return _react2.default.createElement(
        'div',
        { className: css },
        label && _react2.default.createElement(
          'label',
          { htmlFor: id },
          label
        ),
        tags.map(function (tag, key) {
          return _react2.default.createElement(_Tag2.default, _extends({}, rest, {
            key: key,
            label: tag.label,
            active: isActive && isActive(tag.value),
            disabled: disabled,
            onClick: onClick || toggleActive && toggleActive(tag.value),
            onClose: _this2.onClose(tag)
          }));
        })
      );
    }
  }]);

  return Tags;
}(_react.Component);

Tags.propTypes = {
  tags: _react.PropTypes.array.isRequired,
  label: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
  id: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  onClick: _react.PropTypes.func,
  onTagRemove: _react.PropTypes.func,
  hideClose: _react.PropTypes.bool,
  closeIcon: _react.PropTypes.string,
  extended: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,

  //decorators
  activeItem: _react.PropTypes.any,
  activeItems: _react.PropTypes.any,
  isActive: _react.PropTypes.func,
  toggleActive: _react.PropTypes.func,
  disableAll: _react.PropTypes.func
};
Tags.defaultProps = {
  tags: []
};


Tags.toggleActive = (0, _toggleActive2.default)(Tags);
Tags.toggleActiveMultiple = (0, _toggleActiveMultiple2.default)(Tags);

exports.default = Tags;
module.exports = exports['default'];