import scrolling from './modules/scrolling';
import sidebarShow from './modules/sideBarShow';

import { WOW } from 'wowjs';

import '../sass/style.scss';

window.addEventListener('DOMContentLoaded', () => {
	new WOW().init();

	scrolling('.header__arrow', '.header');
	if (document.documentElement.clientWidth < 1200) {
		sidebarShow();
	}
});
