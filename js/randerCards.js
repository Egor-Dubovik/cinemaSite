const listCards = document.querySelector('.other-films__list');

const randerCards = data => {
	listCards.textContent = '';

	const cards = data.map(item => {


		const card = document.createElement('li');
		card.className = 'other-films__item';

		const link = document.createElement('a');
		link.className = 'other-films__link';
		if (item.vote_average) link.dataset.rating = item.vote_average;


		const img = document.createElement('img');
		img.className = 'other-films__img';
		img.alt = `постер:${item.name ?? item.title}`;
		img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`;

		card.append(link);
		link.append(img);

		return card;
	})

	listCards.append(...cards)
}

export default randerCards;