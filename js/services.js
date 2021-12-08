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




export const getTriends = (type = 'all', period = "day", page = 1) => {
	const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}&${LANGUAGE}&page=${page}`
	// console.log(await getDate(url));
	return getDate(url);
}