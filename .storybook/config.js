import {configure} from '@kadira/storybook';
import '../lib/scss/main.scss';

function loadStories() {
  require('../lib/components/Button/stories');
  require('../lib/components/Box/stories');
  require('../lib/components/Loader/stories');
  require('../lib/components/Input/stories');
  require('../lib/components/TextareaInput/stories');
  require('../lib/components/Checkbox/stories');
  require('../lib/components/CheckboxGroup/stories');
  require('../lib/components/Tag/stories');
  require('../lib/components/Tags/stories');
  require('../lib/components/Select/stories');
}

configure(loadStories, module);
