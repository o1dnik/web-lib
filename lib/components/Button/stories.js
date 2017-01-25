'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'];

var colors = ['default', 'primary', 'light', 'danger', 'fb', 'tw', 'ln'];

(0, _storybook.storiesOf)('Button', module).add('Default', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h4',
        null,
        'Default'
      ),
      _react2.default.createElement(
        _index2.default,
        { onClick: (0, _storybook.action)('clicked') },
        _react2.default.createElement(
          'span',
          null,
          'Default'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h4',
        null,
        'Sizes'
      ),
      sizes.map(function (s) {
        return _react2.default.createElement(
          _index2.default,
          { size: s, onClick: (0, _storybook.action)('clicked') },
          _react2.default.createElement(
            'span',
            null,
            s
          )
        );
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h4',
        null,
        'Colors'
      ),
      colors.map(function (s) {
        return _react2.default.createElement(
          _index2.default,
          { color: s, onClick: (0, _storybook.action)('clicked') },
          _react2.default.createElement(
            'span',
            null,
            s
          )
        );
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h4',
        null,
        'Outline Colors'
      ),
      colors.map(function (s) {
        return _react2.default.createElement(
          _index2.default,
          { outline: true, color: s, onClick: (0, _storybook.action)('clicked') },
          _react2.default.createElement(
            'span',
            null,
            s
          )
        );
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h4',
        null,
        'Extended'
      ),
      _react2.default.createElement(
        _index2.default,
        { extended: true, onClick: (0, _storybook.action)('clicked') },
        _react2.default.createElement(
          'span',
          null,
          'Extended'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h4',
        null,
        'Disabled'
      ),
      _react2.default.createElement(
        _index2.default,
        { disabled: true, onClick: (0, _storybook.action)('clicked') },
        _react2.default.createElement(
          'span',
          null,
          'Disabled'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h4',
        null,
        'Loading'
      ),
      sizes.map(function (s) {
        return _react2.default.createElement(
          _index2.default,
          { loading: true, size: s, onClick: (0, _storybook.action)('clicked') },
          _react2.default.createElement(
            'span',
            null,
            'Loading ',
            s
          )
        );
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h4',
        null,
        'As Link'
      ),
      _react2.default.createElement(
        _index2.default,
        { href: 'google.ru', onClick: (0, _storybook.action)('clicked') },
        _react2.default.createElement(
          'span',
          null,
          'As Link'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h4',
        null,
        'With icon'
      ),
      _react2.default.createElement(
        _index2.default,
        { className: 'button-icon', onClick: (0, _storybook.action)('clicked') },
        _react2.default.createElement('i', { className: 'mb-ico-linkedin' }),
        _react2.default.createElement(
          'span',
          null,
          'With icon left'
        )
      ),
      _react2.default.createElement(
        _index2.default,
        { className: 'button-icon', onClick: (0, _storybook.action)('clicked') },
        _react2.default.createElement(
          'span',
          null,
          'With icon right'
        ),
        _react2.default.createElement('i', { className: 'mb-ico-arrow-button-next' })
      )
    )
  );
});