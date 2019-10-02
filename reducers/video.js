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
		default:
			return state;
	}
}

export default videos;
