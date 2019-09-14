import React from 'react';
import {
	FlatList,
	Text
} from 'react-native';
import Layout from '../components/Suggestions-layout';
import Empty from '../../sections/components/Empty'
import Separator from '../../sections/components/Vertical_separator'
import Suggestion from '../components/Suggestions'

class SuggestionsList extends React.Component {

	keyExtractor = (item) => item.id.toString()
	RenderEmpty = () => <Empty text="There are no suggestions for you :("/>
	itemSeparator = () => <Separator/>
	renderListItem = ({item}) => {
		return(
			<Suggestion {...item}/>
		); 
	}
	render(){
		return(
			<Layout title="Suggestions for you" >
				<FlatList 
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

export default SuggestionsList;