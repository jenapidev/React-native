import React from 'react';
import { Text, View } from 'react-native';

import Api from '../utils/Api';
import Home from './screens/containers/Home';
import Header from './sections/components/Header';
import SuggestionsList from './videos/containers/Suggestions_list';
import CategoryList from './videos/containers/Category_list';
import Player from './player/containers/Player';

class AppLayout extends React.Component {
	state = {
		// suggestionsList: [],
		// categoryList: [],
	};

	async componentDidMount() {
		const suggestionList = await Api.getSuggestion(10);
		store.dispatch({
			type: 'SET_MOVIE_LIST',
			payload: { suggestionList },
		});
		const categoryList = await Api.getMovies();
		store.dispatch({
			type: 'SET_CATEGORY_LIST',
			payload: { categoryList },
		});
		// this.setState({
		// suggestionsList: suggestionList,
		// 	categoryList: categoryList,
		// });
	}

	render() {
		return (
			<Home>
				<Header />
				<Player />
				<Text>Find</Text>
				<CategoryList />
				<SuggestionsList />
			</Home>
		);
	}
}
