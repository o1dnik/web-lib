import {asyncComponent} from 'web-lib';

export default asyncComponent((cb) => {
  require.ensure([], (require) => {
    cb(require('./modal-overlay-component'));
  }, 'modal-overlay');
});
