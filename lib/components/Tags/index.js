var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cn from 'classnames';
import Tag from '../Tag';
import toggleActive from '../../decorators/toggleActive';
import toggleActiveMultiple from '../../decorators/toggleActiveMultiple';

var Tags = function (_Component) {
  _inherits(Tags, _Component);

  function Tags() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tags);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tags.__proto__ || Object.getPrototypeOf(Tags)).call.apply(_ref, [this].concat(args))), _this), _this.onClose = function (tag) {
      return function () {
        var onTagRemove = _this.props.onTagRemove;

        if (onTagRemove) onTagRemove(tag);
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tags, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          tags = _props.tags,
          label = _props.label,
          id = _props.id,
          isActive = _props.isActive,
          disabled = _props.disabled,
          onClick = _props.onClick,
          toggleActive = _props.toggleActive,
          rest = _objectWithoutProperties(_props, ['tags', 'label', 'id', 'isActive', 'disabled', 'onClick', 'toggleActive']);

      var css = cn({ 'tags': true });

      return React.createElement(
        'div',
        { className: css },
        label && React.createElement(
          'label',
          { htmlFor: id },
          label
        ),
        tags.map(function (tag, key) {
          return React.createElement(Tag, _extends({}, rest, {
            key: key,
            label: tag.label,
            active: isActive && isActive(tag.value),
            disabled: disabled,
            onClick: onClick || toggleActive && toggleActive(tag.value),
            onClose: _this2.onClose(tag)
          }));
        })
      );
    }
  }]);

  return Tags;
}(Component);

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
  onTagRemove: PropTypes.func,
  hideClose: PropTypes.bool,
  closeIcon: PropTypes.string,
  extended: PropTypes.bool,
  disabled: PropTypes.bool,

  // decorators
  activeItem: PropTypes.any,
  activeItems: PropTypes.any,
  isActive: PropTypes.func,
  toggleActive: PropTypes.func,
  disableAll: PropTypes.func
};
Tags.defaultProps = {
  tags: []
};


Tags.toggleActive = toggleActive(Tags);
Tags.toggleActiveMultiple = toggleActiveMultiple(Tags);

export default Tags;
module.exports = exports['default'];