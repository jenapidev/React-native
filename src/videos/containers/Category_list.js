import React from 'react';
import {
	Text,
	View,
	FlatList,
	StyleSheet,
} from 'react-native';
import Empty from '../../sections/components/Empty';
import Separator from '../../sections/components/Horizontal_separator';
import Category from '../components/Category';
import Layout from '../components/Category-layout';


class CategoryList extends React.Component {

	keyExtractor = (item) => item.id.toString()
	RenderEmpty = () => <Empty text="There are no suggestions for you :("/>
	itemSeparator = () => <Separator/>
	renderListItem = ({item}) => {
		return(
			<Category {...item}/>
		); 
	}
	render() {
		return(
				<Layout title="Categories">
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

export default CategoryList;