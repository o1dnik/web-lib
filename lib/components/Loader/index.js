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

var Loader = function Loader(props) {
  var animatedStrokeColor = props.animatedStrokeColor,
      strokeColor = props.strokeColor;


  return _react2.default.createElement(
    'svg',
    {
      width: sizeMap[props.size],
      height: sizeMap[props.size],
      className: 'loader',
      viewBox: '0 0 100 100',
      preserveAspectRatio: 'xMidYMid'
    },
    _react2.default.createElement('circle', {
      cx: '50',
      cy: '50',
      r: '40',
      stroke: strokeColor,
      fill: 'none',
      strokeWidth: '10',
      strokeLinecap: 'round'
    }),
    _react2.default.createElement('circle', {
      cx: '50',
      cy: '50',
      r: '40',
      stroke: animatedStrokeColor,
      fill: 'none',
      strokeWidth: '6',
      strokeLinecap: 'round',
      className: 'inner-circle'
    })
  );
};

Loader.propTypes = {
  size: _react.PropTypes.string.isRequired,
  animatedStrokeColor: _react.PropTypes.string.isRequired,
  strokeColor: _react.PropTypes.string.isRequired
};

Loader.defaultProps = {
  size: 'medium',
  animatedStrokeColor: '#111111',
  strokeColor: '#eeeeee'
};

exports.default = Loader;
module.exports = exports['default'];