var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import ReactModal from 'react-modal';

ReactModal.defaultStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position: 'absolute',
    top: '70px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    border: '0px solid #ccc',
    color: '#fff',
    background: '#000',
    overflow: 'auto',
    opacity: 0.8,
    WebkitOverflowScrolling: 'touch',
    borderRadius: '0px',
    outline: 'none',
    padding: '0px'
  }
};

var ModalOverlay = function (_Component) {
  _inherits(ModalOverlay, _Component);

  function ModalOverlay() {
    _classCallCheck(this, ModalOverlay);

    return _possibleConstructorReturn(this, (ModalOverlay.__proto__ || Object.getPrototypeOf(ModalOverlay)).apply(this, arguments));
  }

  _createClass(ModalOverlay, [{
    key: 'render',
    value: function render() {
      return React.createElement(ReactModal, _extends({ className: 'modal', overlayClassName: 'modal-overlay', portalClassName: 'modal-wrapper' }, this.props));
    }
  }]);

  return ModalOverlay;
}(Component);

ModalOverlay.propTypes = {};
ModalOverlay.defaultProps = {
  contentLabel: ''
};


export default ModalOverlay;