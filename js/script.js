import slideMenu from "./menu.js";
import renderVideos from "./renderVideos.js";
import menuLinks from './menuLink.js';
import search from './search.js'
import eraseText from './eraseText.js'

slideMenu({
	openBtn: '.header__burger-btn',
	menu: '.navigation',
	classActiveMenu: 'navigation_active',
	closeTrigger: '.navigation__link, .navigation__close',
});
eraseText();
renderVideos();
menuLinks();
search();


