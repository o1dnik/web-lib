import React from 'react';
import Loader from '../components/Loader';

export default function(loaderFunc) {
  return class AsyncComponentDecorator extends React.Component {

    static propTypes = {
      onLoadStart: React.PropTypes.func,
      onLoadSuccess: React.PropTypes.func,
      renderLoader: React.PropTypes.func
    }

    state = {
      component: null
    }

    componentWillMount() {

      this.props.onLoadStart && this.props.onLoadStart();
      loaderFunc((component) => {
        /**
         * Newer version of Webpack does not understand component.default,
         * so we have to check if it exists (older version)
         * or not (newer version).
         */
        this.setState({component: component.default || component});
        this.props.onLoadSuccess && this.props.onLoadSuccess();
      });

    }

    renderLoader() {
      return <Loader size='large'/>;
    }

    render() {
      const {renderLoader, ...rest} = this.props;

      if (this.state.component) {
        return <this.state.component {...rest}/>;
      }
      return (renderLoader || this.renderLoader)();
    }

  };
}
