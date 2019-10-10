import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Api from '../../../utils/Api';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

class Search extends Component {
	state = {
		text: '',
	};

	handleSubmit = async () => {
		console.log(this.state.text);
		const movies = await Api.getMovie(this.state.text);
		this.props.dispatch({
			type: 'SET_SELECTED_MOVIE',
			payload: {
				movie: movies[0],
			},
		});
		this.props.dispatch(
			NavigationActions.navigate({
				routeName: 'Movie',
			}),
		);
	};
	handleChange = (text) => {
		this.setState({ text });
	};

	render() {
		return (
			<TextInput
				placeholder='Search the movie you want'
				autoCapitalize='none'
				autoCorrect={false}
				underlineColorAndroid='transparent'
				onSubmitEditing={this.handleSubmit}
				onChangeText={this.handleChange}
				style={styles.input}
			/>
		);
	}
}

const styles = StyleSheet.create({
	input: {
		padding: 15,
		fontSize: 15,
		borderWidth: 1,
		borderColor: '#eaeaea',
	},
});

export default connect(null)(Search);
