import { getTriends, getVideo } from "./services.js";
import randerCards from './randerCards.js';

const filmWeek = document.querySelector('.film-week');


const firstRender = (data, keyVideo) => {
	const key = keyVideo?.key;
	const {
		vote_average: voteAverage,
		name,
		title,
		original_name: originalName,
		original_title: originalTitle,
		backdrop_path: backdropPath,

	} = data;
	filmWeek.innerHTML = `
	<div class="container film-week__container" data-rating="${voteAverage}">
		<div class="film-week__poster-wrapper">
			<img class="film-week__poster"
				src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdropPath}"
				alt="постер ${name ?? title}">
			<p class="film-week__title_origin">${originalName ?? originalTitle}</p>
		</div>
		<h2 class="film-week__title">${name ?? title}</h2>
		${key ?
			`<a class="film-week__watch-trailer tube" href="https://youtu.be/${key}" aria-label="смотреть трейлер"></a>`
			: ``
		}
		
	</div>
	`
}




const renderVideos = async () => {
	const data = await getTriends();
	const [firstCard, ...otherCards] = data.results;
	otherCards.length = 16;

	const video = await getVideo(firstCard.id, firstCard.media_type);

	firstRender(firstCard, video.results[0]);
	randerCards(otherCards);

}

export default renderVideos;

