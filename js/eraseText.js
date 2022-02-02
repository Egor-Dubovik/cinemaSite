const btnErase = document.querySelector('.header__search-erase');
const searchInput = document.querySelector('.header__search-input');

export default function eraseText() {

	searchInput.oninput = () => {
		btnErase.style.display = 'block';
	}

	btnErase.onclick = () => {
		searchInput.value = '';
		btnErase.style.display = 'none';
	}
}
