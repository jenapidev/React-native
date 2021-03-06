import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import Empty from '../../sections/components/Empty';
import Separator from '../../sections/components/Horizontal_separator';
import Category from '../components/Category';
import Layout from '../components/Category-layout';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

class CategoryList extends React.Component {
	keyExtractor = (item) => item.id.toString();
	RenderEmpty = () => <Empty text='There are no suggestions for you :(' />;
	itemSeparator = () => <Separator />;
	viewCategory = (item) => {
		this.props.dispatch(
			NavigationActions.navigate({
				routeName: 'Category',
				params: {
					genre: item.genres[0],
				},
			}),
		);
	};
	renderListItem = ({ item }) => {
		return <Category onPress={() => this.viewCategory(item)} {...item} />;
	};
	render() {
		return (
			<Layout title='Categories'>
				<FlatList
					horizontal={true}
					keyExtractor={this.keyExtractor}
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
		list: state.videos.categoryList,
	};
};

export default connect(mapStateToProps)(CategoryList);
