'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizeMap = {
  tiny: 15,
  small: 25,
  medium: 55,
  big: 75,
  large: 95,
  xlarge: 115
};

var Loader = function Loader(props) {
  var animatedStrokeColor = props.animatedStrokeColor,
      strokeColor = props.strokeColor;


  return _react2.default.createElement(
    'svg',
    {
      width: sizeMap[props.size],
      height: sizeMap[props.size],
      viewBox: '0 0 100 100',
      style: {
        position: 'relative',
        left: '50%',
        top: '50%',
        marginLeft: -(sizeMap[props.size] / 2)
      },
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
    _react2.default.createElement(
      'circle',
      {
        cx: '50',
        cy: '50',
        r: '40',
        stroke: animatedStrokeColor,
        fill: 'none',
        strokeWidth: '6',
        strokeLinecap: 'round'
      },
      _react2.default.createElement('animate', {
        attributeName: 'stroke-dashoffset',
        dur: '3s',
        repeatCount: 'indefinite',
        from: '0',
        to: '502'
      }),
      _react2.default.createElement('animate', {
        attributeName: 'stroke-dasharray',
        dur: '3s',
        repeatCount: 'indefinite',
        values: '150.6 100.4;1 250;150.6 100.4'
      })
    )
  );
};

Loader.propTypes = {
  size: _react.PropTypes.string.isRequired,
  animatedStrokeColor: _react.PropTypes.string.isRequired,
  strokeColor: _react.PropTypes.string.isRequired
};

Loader.defaultProps = {
  size: 'medium',
  animatedStrokeColor: '#dd1843',
  strokeColor: '#eeeeee'
};

exports.default = Loader;