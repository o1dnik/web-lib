import asyncComponent from '../../decorators/asyncComponent';

export default asyncComponent((cb) => {
  require.ensure([], (require) => {
    cb(require('./modal-overlay-component'));
  }, 'modal-overlay');
});
