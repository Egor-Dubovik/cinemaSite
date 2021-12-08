function openMenu(elem, active) {
	elem.classList.add(active);

}

function closeMenu(elem, active) {
	elem.classList.remove(active);
}

// console.log(document)


const slideMenu = ({ openBtn, menu, classActiveMenu, closeTrigger }) => {
	const burgerBtn = document.querySelector(openBtn);
	const navigationMenu = document.querySelector(menu);
	const navigationClose = document.querySelectorAll(closeTrigger);

	burgerBtn.addEventListener('click', openMenu.bind(this, navigationMenu, classActiveMenu));
	// console.log(navigationClose)
	navigationClose.forEach(item => {
		item.addEventListener('click', () => {
			closeMenu(navigationMenu, classActiveMenu);
		})
	})

	document.addEventListener('mousedown', (e) => {
		if (!e.target.closest('.navigation')) {
			closeMenu(navigationMenu, classActiveMenu);
		}
	})
}


export default slideMenu;