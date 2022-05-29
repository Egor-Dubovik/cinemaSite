import { search as getSearch } from './services.js' // одинаковые названия функций
import randerCards from './randerCards.js';

const title = document.querySelector('.other-films__title');
const filmWeek = document.querySelector('.film-week');
const searchInput = document.querySelector('.header__search-input');
const searchForm = document.querySelector('.header__search-form');

const search = () => {
	searchForm.addEventListener('submit', event => {
		event.preventDefault();

		if (!searchInput.value) return;

		getSearch(searchInput.value)
			.then(data => {
				console.log(data)
				if (data.results.length) {
					randerCards(data.results);
				} else {
					throw 'Ничего не найдено (='
				}
			})
			.then(() => {
				filmWeek.remove();
				title.textContent = 'Результат поиска'
			})
			.catch(err => {
				title.textContent = err;
			})

	})
};

export default search;