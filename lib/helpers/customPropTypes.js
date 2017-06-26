import PropTypes from 'prop-types';

export var as = function as() {
  return PropTypes.oneOfType([PropTypes.string, PropTypes.func]).apply(undefined, arguments);
};