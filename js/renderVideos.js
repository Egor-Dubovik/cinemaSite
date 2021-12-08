import { getTriends } from "./services.js";

const filmWeek = document.querySelector('.film-week');

const firstRander = data => {
	// console.log(data);
	filmWeek.innerHTML = `
	<div class="container film-week__container" data-rating="${data.vote_average}">
		<div class="film-week__poster-wrapper">
			<img class="film-week__poster"
				src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}"
				alt="постер ${data.name ?? data.title}">
			<p class="film-week__title_origin">${data.original_name ?? data.original_title}</p>
		</div>
		<h2 class="film-week__title">${data.name ?? data.title}</h2>
		<a class="film-week__watch-trailer tube" href="https://youtu.be/V0hagz_8L3M"
			aria-label="смотреть трейлер"></a>
	</div>
	`
}

const renderVideos = async () => {
	const data = await getTriends();
	firstRander(data.results[0]);
}

export default renderVideos;