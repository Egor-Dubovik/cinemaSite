function openNavMenu(nav, active) {
	nav.classList.add(active);
	console.log('ee')
}

function closeNavMenu(nav, active) {
	nav.classList.remove(active);
}




const slideMenu = (setting) => {
	const { openBtn, menu, classActiveMenu, closeTrigger } = setting;
	const burgerBtn = document.querySelector(openBtn);
	const navigation = document.querySelector(menu);
	const navigationClose = document.querySelectorAll(closeTrigger);

	burgerBtn.addEventListener('click', () => {
		openNavMenu(navigation, classActiveMenu);
	});

	navigationClose.forEach(item => {
		item.addEventListener('click', () => {
			closeNavMenu(navigation, classActiveMenu);
		})
	})
	console.log(classActiveMenu);
}


export default slideMenu;