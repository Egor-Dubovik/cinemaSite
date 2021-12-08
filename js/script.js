import slideMenu from "./menu.js";
import renderVideos from "./renderVideos.js";

slideMenu({
	openBtn: '.header__burger-btn',
	menu: '.navigation',
	classActiveMenu: 'navigation_active',
	closeTrigger: '.navigation__link, .navigation__close',
});

renderVideos();

