function videos(state = {}, action) {
	switch (action.type) {
		case 'SET_CATEGORY_LIST': {
			return {
				...state,
				...action.payload,
			};
		}
		case 'SET_MOVIE_LIST': {
			return {
				...state,
				...action.payload,
			};
		}
		case 'SET_SELECTED_MOVIE': {
			return {
				...state,
				selectedMovie: action.payload.movie,
			};
		}
		case 'SET_SELECTED_MOVIE_FALSE': {
			return {
				...state,
				selectedMovie: false,
			};
		}
		default:
			return state;
	}
}

export default videos;
