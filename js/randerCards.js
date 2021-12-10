import { getVideo } from "./services.js";

const listCards = document.querySelector('.other-films__list');

const randerCards = (data, type) => {
	listCards.textContent = '';

	Promise.all(data.map(async (item) => {
		console.warn(item)
		const mediaType = item.media_type ? item.media_type : type;

		const video = await getVideo(item.id, mediaType);
		const key = video.results[0]?.key;

		const card = document.createElement('li');
		card.className = 'other-films__item';

		const link = document.createElement('a');
		if (key) link.href = `https://youtu.be/${key}`;
		link.className = 'other-films__link';
		if (item.vote_average) link.dataset.rating = item.vote_average;


		const img = document.createElement('img');
		img.className = 'other-films__img';
		img.alt = `постер:${item.name ?? item.title}`;
		if (!item.poster_path) {
			img.src = "img/no_poster.jpg";
		} else {
			img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/` +
				`${item.poster_path}`;
		}

		card.append(link);
		link.append(img);

		return card;
	})).then(cards => listCards.append(...cards))

}

export default randerCards;