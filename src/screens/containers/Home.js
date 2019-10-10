import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import Api from '../../../utils/Api';
import Header from '../../sections/components/Header';
import SuggestionsList from '../../videos/containers/Suggestions_list';
import CategoryList from '../../videos/containers/Category_list';
//import Movie from './Movie';
import Search from '../../sections/containers/search';

class Home extends React.Component {
	static navigationOptions = () => {
		return {
			header: Header,
		};
	};
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
		return (
			<>
				<Search />
				<CategoryList />
				<SuggestionsList />
			</>
		);
	}
}

export default connect(null)(Home);
