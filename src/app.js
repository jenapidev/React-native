import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import Api from '../utils/Api';
import Home from './screens/containers/Home';
import Header from './sections/components/Header';
import SuggestionsList from './videos/containers/Suggestions_list';
import CategoryList from './videos/containers/Category_list';
import Movie from './screens/containers/Movie';
import Search from './sections/containers/Search';

class AppLayout extends React.Component {
	state = {
		// suggestionsList: [],
		// categoryList: [],
	};

	async componentDidMount() {
		const suggestionList = await Api.getSuggestion(10);
		this.props.dispatch({
			type: 'SET_MOVIE_LIST',
			payload: { suggestionList },
		});
		const categoryList = await Api.getMovies();
		this.props.dispatch({
			type: 'SET_CATEGORY_LIST',
			payload: { categoryList },
		});
		// this.setState({
		// suggestionsList: suggestionList,
		// 	categoryList: categoryList,
		// });
	}

	render() {
		if (this.props.selectedMovie) {
			return <Movie />;
		}
		return (
			<Home>
				<Header />
				<Search />
				<CategoryList />
				<SuggestionsList />
			</Home>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		selectedMovie: state.selectedMovie,
	};
};

export default connect(mapStateToProps)(AppLayout);
