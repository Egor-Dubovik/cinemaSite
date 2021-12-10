const API_KEY = 'f42f435e99005a6532326369f8baf467';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = 'language=ru-RU'

//trending/all/day?api_key=<<api_key>>

const getDate = url => {
	return fetch(url)  // fetch делает get(особо не нужно настроек) и post запросы 
		.then(response => {
			if (response.ok) {
				return response.json();
			}
			throw `Ошибка: ${response.status}`;
		})
		// принимает колбэк функцию и она пр-ет ответ который отпр-ся с пом-ю fetch
		.catch(err => console.error(err));
}


export const getTriends = (type = 'all', period = "day", page = 2) => {
	const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}&${LANGUAGE}&page=${page}`;
	return getDate(url);
}

export const getTop = async (type, page = 1) => {
	const url = `${BASE_URL}${type}/top_rated?api_key=${API_KEY}&${LANGUAGE}&page=${page}`;
	return await getDate(url);
};


export const getPopular = async (type, page = 1) => {
	const url = `${BASE_URL}${type}/popular?api_key=${API_KEY}&${LANGUAGE}&page=${page}`;
	return await getDate(url);
};

export const getVideo = async (id, type) => {
	const url = `${BASE_URL}${type}/${id}/videos?api_key=${API_KEY}&${LANGUAGE}`;
	return await getDate(url);
}
//https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US


export const search = async (query, page) => {
	const url = `${BASE_URL}search/multi?api_key=${API_KEY}` +
		`&${LANGUAGE}&query=${query}&page=${page}&include_adult=false`;
	return await getDate(url);
}


