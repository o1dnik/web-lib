'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _customPropTypes = require('../../helpers/customPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = function Box(props) {
  var style = _extends({
    width: props.width,
    padding: props.padding
  }, props.style);

  var Element = props.as;

  return _react2.default.createElement(
    Element,
    { className: 'white-box', style: style },
    props.children
  );
};

Box.propTypes = {
  as: _customPropTypes.as,
  width: _propTypes2.default.string,
  padding: _propTypes2.default.string,
  style: _propTypes2.default.object
};

Box.defaultProps = {
  as: 'div',
  width: '100%',
  style: {}
};

exports.default = Box;
module.exports = exports['default'];