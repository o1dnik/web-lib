import React, { Component } from "react"
import ReactModal from "react-modal"

ReactModal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "70px",
    left: "0px",
    right: "0px",
    bottom: "0px",
    border: "0px solid #ccc",
    color: "#fff",
    background: "#000",
    overflow: "auto",
    opacity: 0.8,
    WebkitOverflowScrolling: "touch",
    borderRadius: "0px",
    outline: "none",
    padding: "0px"
  }
}

class ModalOverlay extends Component {
  static propTypes = {}

  static defaultProps = {
    contentLabel: ""
  }

  render() {
    return (
      <ReactModal
        className="modal"
        overlayClassName="modal-overlay"
        portalClassName="modal-wrapper"
        {...this.props}
      />
    )
  }
}

export default ModalOverlay
