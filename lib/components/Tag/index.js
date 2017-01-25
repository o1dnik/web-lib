'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tag = function Tag(props) {
  var _cn;

  var label = props.label,
      hideClose = props.hideClose,
      closeIcon = props.closeIcon,
      extended = props.extended,
      active = props.active,
      onClick = props.onClick,
      onClose = props.onClose,
      type = props.type,
      disabled = props.disabled;


  var css = {
    wrapper: (0, _classnames2.default)((_cn = {
      'tag': true,
      'tag-active': active
    }, _defineProperty(_cn, type, Boolean(type)), _defineProperty(_cn, 'extended', extended), _cn)),
    close: (0, _classnames2.default)({
      'remove': true, // conditional ?
      'close': true // conditional ?
    })
  };

  var onclick = disabled ? undefined : onClick;
  var onclose = disabled ? undefined : onClose;

  return _react2.default.createElement(
    'span',
    { className: css.wrapper },
    _react2.default.createElement(
      'span',
      {
        onClick: onclick,
        style: { cursor: onClick ? 'pointer' : 'default' }
      },
      label,
      props.children
    ),
    !hideClose && onClose && _react2.default.createElement(
      'span',
      {
        className: css.close,
        onClick: onclose,
        style: { cursor: 'pointer' }
      },
      closeIcon
    )
  );
};

Tag.propTypes = {
  label: _react.PropTypes.string,
  type: _react.PropTypes.string, // active, pending, default, inactive
  onClick: _react.PropTypes.func,
  onClose: _react.PropTypes.func,
  hideClose: _react.PropTypes.bool,
  closeIcon: _react.PropTypes.string,
  extended: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool
};

Tag.defaultProps = {
  type: 'default',
  hideClose: false,
  closeIcon: 'X',
  extended: false,
  disabled: false
};

exports.default = Tag;
module.exports = exports['default'];