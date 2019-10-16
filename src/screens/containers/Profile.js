import React, { Component } from 'react';
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Button,
	StatusBar,
	Platform,
} from 'react-native';
import Icon from '../../sections/components/icon';
import { connect } from 'react-redux';

class Profile extends Component {
	static navigationOptions = () => {
		return {
			title: 'Profile',
			tabBarIcon: <Icon icon='😎' />,
		};
	};

	componentDidMount() {
		this._navListener = this.props.navigation.addListener('didFocus', () => {
			StatusBar.setBarStyle('dark-content');
			Platform.OS === 'android' && StatusBar.setBackgroundColor('white');
		});
	}

	componentWillUnmount() {
		this._navListener.remove();
	}

	handlePress = () => {
		this.props.dispatch({
			type: 'REMOVE_USER',
		});
		this.props.navigation.navigate('Loading');
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Text>Username</Text>
				<Button title='Logout' color='#67a52e' onPress={this.handlePress} />
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default connect(null)(Profile);
