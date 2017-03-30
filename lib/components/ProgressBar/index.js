'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcProgress = require('rc-progress');

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBarComponent = function ProgressBarComponent(props) {
  var className = props.className,
      label = props.label;


  var css = (0, _classnames2.default)({
    progressbar: true
  }, className);

  return _react2.default.createElement(
    'div',
    { className: css },
    label,
    _react2.default.createElement(_rcProgress.Line, (0, _omit2.default)(props, Object.keys(ProgressBarComponent.propTypes)))
  );
};

ProgressBarComponent.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.node
};

exports.default = ProgressBarComponent;
module.exports = exports['default'];