import { configure } from '@storybook/react';

function loadStories() {
  require('./ImagesLoaded.js');
}

configure(loadStories, module);
