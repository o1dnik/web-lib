import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

var PaginationItem = function PaginationItem(_ref) {
  var disabled = _ref.disabled,
      className = _ref.className,
      onClick = _ref.onClick,
      children = _ref.children;

  var css = cn({ disabled: disabled }, className);
  return React.createElement(
    'li',
    { className: css, onClick: onClick },
    React.createElement(
      'a',
      null,
      children
    )
  );
};

PaginationItem.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default PaginationItem;
module.exports = exports['default'];