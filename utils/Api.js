const BASE_API = 'https://yts.lt/api/v2/';

class Api {
	async getSuggestion(id) {
		try {
			const query = await fetch(
				`${BASE_API}movie_suggestions.json?movie_id=${id}`,
			);
			const { data } = await query.json();
			return data.movies;
		} catch (error) {
			return error.message;
		}
	}
	async getMovies(id) {
		try {
			const query = await fetch(`${BASE_API}list_movies.json`);
			const { data } = await query.json();
			return data.movies.filter((i) => i.genres);
		} catch {
			return error.message;
		}
	}

	async getMovie(title) {
		try {
			const query = await fetch(
				`${BASE_API}list_movies.json?sort_by=rating&query_term=${title}`,
			);
			const { data } = await query.json();
			return data.movies.filter((i) => i.genres);
		} catch {
			return error.message;
		}
	}
}

export default new Api();
