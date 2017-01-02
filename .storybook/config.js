import {configure} from '@kadira/storybook';
import '../lib/scss/main.scss';

function loadStories() {
  require('../lib/components/Button/stories');
  require('../lib/components/Box/stories');
  require('../lib/components/Loader/stories');
}

configure(loadStories, module);
