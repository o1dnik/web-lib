function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import ReactTooltip from 'react-tooltip';

var TooltipComponent = function TooltipComponent(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, ['children']);

  if (children) {
    return React.createElement(
      ReactTooltip,
      rest,
      children
    );
  }

  return React.createElement(ReactTooltip, rest);
};

TooltipComponent.propTypes = {};

export default TooltipComponent;
module.exports = exports['default'];