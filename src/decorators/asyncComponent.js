import PropTypes from "prop-types"
import React from "react"
import Loader from "../components/Loader"

export default function(loaderFunc) {
  return class AsyncComponentDecorator extends React.Component {
    static propTypes = {
      onLoadStart: PropTypes.func,
      onLoadSuccess: PropTypes.func,
      onLoadFail: PropTypes.func,
      renderLoader: PropTypes.func
    }

    state = {
      component: null,
      loadingError: null
    }

    componentWillMount() {
      if (this.props.onLoadStart) {
        this.props.onLoadStart()
      }

      loaderFunc()
        .then(component => {
          this.setState(prevState => {
            if (this.props.onLoadSuccess) {
              this.props.onLoadSuccess()
            }

            return {
              ...prevState,
              component: (component && component.default) || component
            }
          })
        })
        .catch(err => {
          this.setState(prevState => {
            if (this.props.onLoadFail) {
              this.props.onLoadFail(err)
            }

            return {
              ...prevState,
              loadingError: err
            }
          })
        })
    }

    renderLoader() {
      return <Loader size="large" />
    }

    render() {
      const { renderLoader, ...rest } = this.props

      if (this.state.component) {
        return <this.state.component {...rest} />
      }
      return (renderLoader || this.renderLoader)()
    }
  }
}
