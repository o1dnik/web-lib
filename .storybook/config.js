import {configure} from '@kadira/storybook';
import '../lib/scss/main.scss';

function loadStories() {
  require('../lib/components/Button/stories');
}

configure(loadStories, module);
