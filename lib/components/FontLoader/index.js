'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizeMap = {
  xsmall: 16,
  small: 25,
  medium: 55,
  large: 75,
  xlarge: 95
};

var FontLoader = function FontLoader(props) {

  return _react2.default.createElement('i', {
    style: { fontSize: sizeMap[props.size] },
    className: 'mb-ico-spinner animate-spin font-loader'
  });
};

FontLoader.propTypes = {
  size: _react.PropTypes.string.isRequired
};

FontLoader.defaultProps = {
  size: 'medium'
};

exports.default = FontLoader;
module.exports = exports['default'];