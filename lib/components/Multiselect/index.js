'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Select = require('../Select');

var _Select2 = _interopRequireDefault(_Select);

var _Tags = require('../Tags');

var _Tags2 = _interopRequireDefault(_Tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**********
 *    Interface:
 * @options  {array} list of options in "dropdown"
 * @value    {array} list of selected items from the "dropdown"
 * @onChange {func}  cb on any value selected/removed
 *
 *    How to use:
 * <Multiselect
 *   options={this.state.options}
 *   value={this.state.selected}
 *   onChange={(selected) => this.setState({selected})}
 * />
 *
 * or as following for redux-forms:
 *
 * <Multiselect
 *   options={this.state.skills}
 *   input={{
 *     value: this.state.selected,
 *     onChange: (selected) => this.setState({selected}),
 *   }}
 * />
 *********/
var Multiselect = function (_Component) {
  _inherits(Multiselect, _Component);

  function Multiselect(props) {
    _classCallCheck(this, Multiselect);

    var _this = _possibleConstructorReturn(this, (Multiselect.__proto__ || Object.getPrototypeOf(Multiselect)).call(this, props));

    _this.onTagRemove = function (tag) {
      var _this$props = _this.props,
          input = _this$props.input,
          value = _this$props.value,
          onChange = _this$props.onChange;


      var newTags = value ? value.filter(function (t) {
        return t.value !== tag.value;
      }) : input.value.filter(function (t) {
        return t.value !== tag.value;
      });

      if (onChange) onChange(newTags);
      if (!onChange && input.onChange) input.onChange(newTags);
    };

    _this.onTagAdd = function (updVal) {
      var _this$props2 = _this.props,
          input = _this$props2.input,
          onChange = _this$props2.onChange;


      var oldVal = _this.getOldValue();
      var newVal = (0, _merge2.default)(oldVal, updVal); // multi => arrays merge

      if (onChange) onChange(newVal);
      if (!onChange && input.onChange) input.onChange(newVal);
    };

    _this.getOldValue = function () {
      var oldValue = []; // Array because multi

      if (!(0, _isEmpty2.default)(_this.props.input.value)) {
        return oldValue = _this.props.input.value;
      }

      if (!(0, _isEmpty2.default)(_this.props.value)) {
        return oldValue = _this.props.value;
      }

      return oldValue;
    };

    _this.onBlur = _this.onBlur.bind(_this);
    return _this;
  }

  _createClass(Multiselect, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          meta = _props.meta,
          input = _props.input,
          label = _props.label,
          id = _props.id;
      var error = meta.error,
          invalid = meta.invalid,
          touched = meta.touched,
          dirty = meta.dirty,
          valid = meta.valid;


      var selectProps = {
        // rendering or state
        label: this.props.selectLabel,
        name: this.props.name || input.name,
        placeholder: this.props.placeholder,
        noResultsText: this.props.noResultsText,
        optionRenderer: this.props.optionRenderer,
        arrowRenderer: this.props.arrowRenderer,
        isLoading: this.props.isLoading,
        matchPos: this.props.matchPos,
        matchProp: this.props.matchProp,
        multi: this.props.multi,
        simpleValue: this.props.simpleValue,
        disabled: this.props.disabled,
        clearable: this.props.clearable,
        searchable: this.props.searchable,
        clearIcon: this.props.clearIcon,
        clearIconHTML: this.props.clearIconHTML,
        noArrow: this.props.noArrow,
        renderTags: this.props.renderTags,

        // data entries
        value: this.props.value || input.value,
        options: this.props.options,

        // callbacks
        onInputChange: this.props.onChange || input.onChange,
        onSelect: this.onTagAdd, // uses onChange
        onBlur: this.onBlur,
        onFocus: this.props.onFocus || input.onFocus,
        loadOptions: this.props.loadOptions // react-select async cb
      };
      var tagsProps = {
        id: this.props.tagsId,
        label: this.props.tagsLabel,
        hideClose: this.props.hideClose,
        closeIcon: this.props.closeIcon,
        extended: this.props.extended,
        inactive: this.props.inactive,

        tags: this.props.value || input.value,

        onClick: this.props.onClick,
        onTagRemove: this.onTagRemove
      };

      var css = (0, _classnames2.default)({
        'multiselect': true,
        'multiselect-error': touched && invalid,
        'multiselect-success': touched && valid
      });

      var inputMessageCss = (0, _classnames2.default)({
        'input-message': true,
        'input-message-error': touched && invalid,
        'input-message-success': touched && valid
      });

      return _react2.default.createElement(
        'div',
        { className: css },
        label && _react2.default.createElement(
          'label',
          { htmlFor: id },
          label
        ),
        _react2.default.createElement(_Select2.default, selectProps),
        _react2.default.createElement(_Tags2.default, tagsProps),
        _react2.default.createElement(
          'span',
          { className: inputMessageCss },
          (dirty || touched) && invalid && error
        )
      );
    }

    // Replication of the same function in Select

  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      var _props2 = this.props,
          onBlur = _props2.onBlur,
          value = _props2.value,
          input = _props2.input,
          options = _props2.options;


      if (typeof onBlur === 'function') return onBlur(e);

      if (!onBlur && typeof input.onBlur === 'function') {
        var _ret = function () {

          var val = value || input.value;

          if (typeof val === 'string') {
            var loc = options.find(function (l) {
              return l.value === val;
            });
            return {
              v: input.onBlur(loc)
            };
          }

          return {
            v: input.onBlur(val)
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
    }
  }]);

  return Multiselect;
}(_react.Component);

Multiselect.propTypes = {
  id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  options: _react.PropTypes.array,
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array, _react.PropTypes.arrayOf(_react.PropTypes.shape({
    value: _react.PropTypes.string,
    label: _react.PropTypes.string
  }))]),

  onChange: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,

  label: _react.PropTypes.string,
  selectLabel: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
  tagsLabel: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
  renderTags: _react.PropTypes.bool,

  input: _react.PropTypes.shape({
    name: _react.PropTypes.string,
    onBlur: _react.PropTypes.func,
    onChange: _react.PropTypes.func, // mutates the redux-form Field data
    onDragStart: _react.PropTypes.func,
    onDrop: _react.PropTypes.func,
    onFocus: _react.PropTypes.func,
    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array, _react.PropTypes.arrayOf(_react.PropTypes.shape({
      value: _react.PropTypes.string,
      label: _react.PropTypes.string
    }))])
  }),

  meta: _react.PropTypes.shape({
    active: _react.PropTypes.bool,
    asyncValidating: _react.PropTypes.bool,
    autofilled: _react.PropTypes.bool,
    dirty: _react.PropTypes.bool,
    dispatch: _react.PropTypes.func,
    error: _react.PropTypes.string,
    invalid: _react.PropTypes.bool,
    pristine: _react.PropTypes.bool,
    submitting: _react.PropTypes.bool,
    touched: _react.PropTypes.bool,
    valid: _react.PropTypes.bool,
    visited: _react.PropTypes.bool,
    warning: _react.PropTypes.string
  })
};
Multiselect.defaultProps = {
  input: {},
  meta: {},
  multi: true,
  renderTags: false
};
exports.default = Multiselect;
module.exports = exports['default'];