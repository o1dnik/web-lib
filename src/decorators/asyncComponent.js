import React from 'react';
import {Loader} from '../components/Loader';

export default function(loaderFunc) {
  return class AsyncComponentDecorator extends React.Component {

    state = {
      component: null
    }

    componentWillMount() {
      loaderFunc((component) => {
        this.setState({component: component.default});
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
