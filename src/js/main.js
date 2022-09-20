import scrolling from './modules/scrolling';

import {WOW} from 'wowjs';

import '../sass/style.scss';

window.addEventListener('DOMContentLoaded', () => {

      new WOW().init();

      scrolling();
  });
