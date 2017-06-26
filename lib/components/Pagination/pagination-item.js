'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginationItem = function PaginationItem(_ref) {
  var disabled = _ref.disabled,
      className = _ref.className,
      onClick = _ref.onClick,
      children = _ref.children;

  var css = (0, _classnames2.default)({ disabled: disabled }, className);
  return _react2.default.createElement(
    'li',
    { className: css, onClick: onClick },
    _react2.default.createElement(
      'a',
      null,
      children
    )
  );
};

PaginationItem.propTypes = {
  disabled: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

exports.default = PaginationItem;
module.exports = exports['default'];