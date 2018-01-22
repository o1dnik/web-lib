"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactPopover = require("react-popover");

var _reactPopover2 = _interopRequireDefault(_reactPopover);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _openClose = require("../../decorators/openClose");

var _openClose2 = _interopRequireDefault(_openClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PopoverComponent = function PopoverComponent(props) {
  var children = props.children,
      toggle = props.toggle,
      open = props.open,
      close = props.close,
      _onOuterAction = props.onOuterAction,
      toggleOnOut = props.toggleOnOut,
      eventType = props.eventType,
      rest = _objectWithoutProperties(props, ["children", "toggle", "open", "close", "onOuterAction", "toggleOnOut", "eventType"]);

  var newChildren = void 0;

  if (typeof children === "function") {
    newChildren = children(props);
  } else {
    newChildren = _react2.default.Children.map(children, function (child) {
      var props = {};

      if (eventType === "click") {
        props.onClick = toggle;
      } else if (eventType === "hover") {
        props.onMouseOver = open;
        props.onMouseOut = close;
      }

      return _react2.default.cloneElement(child, _extends({}, child.props, props));
    });
  }

  return _react2.default.createElement(
    _reactPopover2.default,
    _extends({}, rest, {
      onOuterAction: function onOuterAction() {
        if (toggleOnOut) toggle();
        if (_onOuterAction && typeof _onOuterAction === "function") _onOuterAction.apply(undefined, arguments);
      }
    }),
    _react2.default.createElement(
      _react.Fragment,
      null,
      newChildren
    )
  );
};

exports.PopoverComponent = PopoverComponent;
PopoverComponent.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  className: _propTypes2.default.string.isRequired,
  place: _propTypes2.default.string,
  eventType: _propTypes2.default.oneOf(["click", "hover"]),
  preferPlace: _propTypes2.default.string,
  body: _propTypes2.default.node.isRequired,
  onOuterAction: _propTypes2.default.func,
  toggleOnOut: _propTypes2.default.bool.isRequired
};

PopoverComponent.defaultProps = {
  isOpen: false,
  toggleOnOut: false,
  eventType: "click",
  className: "popover-info"
};

exports.default = (0, _openClose2.default)(PopoverComponent);