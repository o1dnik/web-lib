import {configure} from '@kadira/storybook';
import '../src/styles/main.scss';

function loadStories() {
  require('./components/Button/stories');
  require('./components/Box/stories');
  require('./components/Loader/stories');
  require('./components/Input/stories');
  require('./components/TextareaInput/stories');
  require('./components/Checkbox/stories');
  require('./components/CheckboxGroup/stories');
  require('./components/RadioGroup/stories');
  require('./components/Tag/stories');
  require('./components/Tags/stories');
  require('./components/Select/stories');
  require('./components/InputRange/stories');
  require('./components/Multiselect/stories');
  require('./components/SelectWithLevels/stories');
  require('./components/DoubleSelect/stories');
  require('./components/AlertBar/stories');
  require('./components/StatsCircle/stories');
}

configure(loadStories, module);
