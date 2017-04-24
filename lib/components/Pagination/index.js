'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Pagination);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (page, disabled) {
      return function (e) {
        if (e) e.preventDefault();

        if (!disabled && _this.props.page !== page) {
          _this.props.onChange(page);
        }
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Pagination, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          count = _props.count,
          page = _props.page,
          limit = _props.limit;


      if (count === null || count === 0) return null;

      var totalPages = Math.floor((count - 1) / limit) + 1;

      var pages = [];

      if (totalPages < 6) {
        for (var i = 1; i <= totalPages; i++) {
          pages.push(_react2.default.createElement(
            _Button2.default,
            {
              outline: true,
              color: page === i ? 'primary' : 'default',
              key: i,
              disabled: disabled,
              onClick: this.handleChange(i, disabled)
            },
            _react2.default.createElement(
              'span',
              null,
              i
            )
          ));
        }
      }

      if (page <= 3 && totalPages >= 6) {
        for (var _i = 1; _i < 6; _i++) {
          pages.push(_react2.default.createElement(
            _Button2.default,
            {
              outline: true,
              color: page === _i ? 'primary' : 'default',
              key: _i,
              disabled: disabled,
              onClick: this.handleChange(_i, disabled)
            },
            _react2.default.createElement(
              'span',
              null,
              _i
            )
          ));
        }
        pages.push(_react2.default.createElement(
          _Button2.default,
          { key: totalPages + 1, disabled: true, outline: true },
          '...'
        ));
      }

      if (page > 3 && page <= totalPages - 3 && totalPages >= 6) {
        pages.push(_react2.default.createElement(
          _Button2.default,
          { key: totalPages + 1, disabled: true, outline: true },
          '...'
        ));

        for (var _i2 = page - 2; _i2 <= page + 2; _i2++) {
          pages.push(_react2.default.createElement(
            _Button2.default,
            {
              outline: true,
              color: page === _i2 ? 'primary' : 'default',
              key: _i2,
              disabled: disabled,
              onClick: this.handleChange(_i2, disabled)
            },
            _react2.default.createElement(
              'span',
              null,
              _i2
            )
          ));
        }

        pages.push(_react2.default.createElement(
          _Button2.default,
          { key: totalPages + 2, disabled: true, outline: true },
          '...'
        ));
      }

      if (page > totalPages - 3 && totalPages >= 6) {
        pages.push(_react2.default.createElement(
          _Button2.default,
          { key: totalPages + 1, disabled: true, outline: true },
          '...'
        ));
        for (var _i3 = totalPages - 6 + 2; _i3 <= totalPages; _i3++) {
          pages.push(_react2.default.createElement(
            _Button2.default,
            {
              outline: true,
              color: page === _i3 ? 'primary' : 'default',
              key: _i3,
              disabled: disabled,
              onClick: this.handleChange(_i3, disabled)
            },
            _react2.default.createElement(
              'span',
              null,
              _i3
            )
          ));
        }
      }

      return _react2.default.createElement(
        'div',
        { className: 'pagination' },
        _react2.default.createElement(
          _Button2.default,
          {
            outline: true,
            disabled: page === 1 || disabled,
            onClick: this.handleChange(1, page === 1 || disabled)
          },
          _react2.default.createElement('i', { className: 'ion-ios-arrow-back' }),
          _react2.default.createElement('i', { className: 'ion-ios-arrow-back' })
        ),
        _react2.default.createElement(
          _Button2.default,
          {
            outline: true,
            disabled: page === 1 || disabled,
            onClick: this.handleChange(page - 1, page === 1 || disabled)
          },
          _react2.default.createElement('i', { className: 'ion-ios-arrow-back' })
        ),
        pages,
        _react2.default.createElement(
          _Button2.default,
          {
            outline: true,
            disabled: page === totalPages || disabled,
            onClick: this.handleChange(page + 1, page === totalPages || disabled)
          },
          _react2.default.createElement('i', { className: 'ion-ios-arrow-forward' })
        ),
        _react2.default.createElement(
          _Button2.default,
          {
            outline: true,
            disabled: page === totalPages || disabled,
            onClick: this.handleChange(totalPages, page === totalPages || disabled)
          },
          _react2.default.createElement('i', { className: 'ion-ios-arrow-forward' }),
          _react2.default.createElement('i', { className: 'ion-ios-arrow-forward' })
        )
      );
    }
  }]);

  return Pagination;
}(_react.Component);

Pagination.propTypes = {
  disabled: _react.PropTypes.bool.isRequired,
  count: _react.PropTypes.number,
  page: _react.PropTypes.number.isRequired,
  limit: _react.PropTypes.number.isRequired,
  onChange: _react.PropTypes.func.isRequired
};
exports.default = Pagination;
module.exports = exports['default'];