import React from 'react';
import { FlatList, Text } from 'react-native';
import Layout from '../components/Suggestions-layout';
import Empty from '../../sections/components/Empty';
import Separator from '../../sections/components/Vertical_separator';
import Suggestion from '../components/Suggestions';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

class SuggestionsList extends React.Component {
	keyExtractor = (item) => item.id.toString();
	RenderEmpty = () => <Empty text='There are no suggestions for you :(' />;
	itemSeparator = () => <Separator />;
	viewMovie = (item) => {
		this.props.dispatch({
			type: 'SET_SELECTED_MOVIE',
			payload: {
				movie: item,
			},
		});
		this.props.dispatch(
			NavigationActions.navigate({
				routeName: 'Movie',
			}),
		);
	};
	renderListItem = ({ item }) => {
		return (
			<Suggestion
				{...item}
				onPress={() => {
					this.viewMovie(item);
				}}
			/>
		);
	};
	render() {
		return (
			<Layout title='Suggestions for you'>
				<FlatList
					data={this.props.list}
					ListEmptyComponent={this.RenderEmpty}
					ItemSeparatorComponent={this.itemSeparator}
					renderItem={this.renderListItem}
				/>
			</Layout>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		list: state.videos.suggestionList,
	};
};

export default connect(mapStateToProps)(SuggestionsList);
