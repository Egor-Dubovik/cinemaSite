import {
	getTriends,
	getPopular,
	getTop,
} from './services.js';

import randerCards from './randerCards.js';

const title = document.querySelector('.other-films__title');
const filmWeek = document.querySelector('.film-week');
const getNav = document.querySelectorAll('.get-nav');

const menuLinks = () => {

	getNav.forEach(nav => {
		nav.addEventListener('click', event => { //делегирование 
			const target = event.target.closest('.get-nav__link');

			if (target) {
				event.preventDefault();
				filmWeek.style.display = 'none';
				title.textContent = target.textContent;

				if (target.classList.contains('get-nav__link_triends')) {
					getTriends()
						.then(data => randerCards(data.results));
				} else if (target.classList.contains('get-nav__link_popular-movies')) {
					getPopular('movie')
						.then(data => randerCards(data.results, 'movie'));
				} else if (target.classList.contains('get-nav__link_popular-tv')) {
					getPopular('tv')
						.then(data => randerCards(data.results, 'tv'));
				} else if (target.classList.contains('get-nav__link_top-movies')) {
					getTop('movie')
						.then(data => randerCards(data.results, 'movie'));
				} else if (target.classList.contains('get-nav__link_top-tv')) {
					getTop('tv')
						.then(data => randerCards(data.results, 'tv'));
				}

			}
		})
	})

}

export default menuLinks;