'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatsCircle = function (_Component) {
  _inherits(StatsCircle, _Component);

  function StatsCircle() {
    _classCallCheck(this, StatsCircle);

    return _possibleConstructorReturn(this, (StatsCircle.__proto__ || Object.getPrototypeOf(StatsCircle)).apply(this, arguments));
  }

  _createClass(StatsCircle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          r = _props.r,
          cx = _props.cx,
          cy = _props.cy,
          color = _props.color,
          fill = _props.fill,
          width = _props.width,
          value = _props.value,
          textColor = _props.textColor,
          containerWidth = _props.containerWidth,
          containerHeight = _props.containerHeight,
          transition = _props.transition,
          fontSize = _props.fontSize,
          textDY = _props.textDY;
      var percent = this.props.percent;


      if (isNaN(percent)) {
        percent = 100;
      }

      var strokeDasharray = 2 * Math.PI * r;

      var c = Math.PI * (r * 2);

      if (percent < 0) {
        percent = 0;
      }

      if (percent > 100) {
        percent = 100;
      }

      var pct = (100 - percent) / 100 * c;

      var rotateX = parseInt(containerWidth, 10) / 2;
      var rotateY = parseInt(containerHeight, 10) / 2;
      var transform = 'rotate(-90, ' + rotateX + ', ' + rotateY + ')';

      return _react2.default.createElement(
        'svg',
        { style: { width: containerWidth, height: containerHeight } },
        _react2.default.createElement('circle', { r: r,
          cx: cx,
          cy: cy,
          stroke: '#999',
          fill: fill,
          strokeWidth: width,
          strokeDasharray: strokeDasharray,
          strokeDashoffset: '0'
        }),
        _react2.default.createElement('circle', { r: r,
          cx: cx,
          cy: cy,
          style: { transition: transition },
          transform: transform,
          stroke: color,
          fill: fill,
          strokeWidth: width,
          strokeDasharray: strokeDasharray,
          strokeDashoffset: pct
        }),
        _react2.default.createElement(
          'text',
          { x: '50%',
            y: '50%',
            textAnchor: 'middle',
            color: textColor,
            strokeWidth: '1px',
            fontSize: fontSize,
            dy: textDY },
          value || percent
        )
      );
    }
  }]);

  return StatsCircle;
}(_react.Component);

StatsCircle.PropTypes = {
  r: _react.PropTypes.string,
  cx: _react.PropTypes.string,
  cy: _react.PropTypes.string,
  color: _react.PropTypes.string,
  width: _react.PropTypes.string,
  percent: _react.PropTypes.number,
  value: _react.PropTypes.string,
  containerWidth: _react.PropTypes.string,
  containerHeight: _react.PropTypes.string,
  transition: _react.PropTypes.string,
  fontSize: _react.PropTypes.string,
  textDY: _react.PropTypes.string
};
StatsCircle.defaultProps = {
  r: '40',
  cx: '50%',
  cy: '50%',
  color: 'blue',
  fill: 'transparent',
  width: '2',
  percent: 50,
  containerWidth: '90px',
  containerHeight: '90px',
  transition: 'stroke-dashoffset .1s linear',
  textColor: '#999',
  fontSize: '2.5em',
  textDY: '.35em'
};
exports.default = StatsCircle;
module.exports = exports['default'];