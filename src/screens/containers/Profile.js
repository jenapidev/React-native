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

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Text>Nombre de usuario</Text>
				<Button title='Cerrar sesión' color='#67a52e' />
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

export default Profile;
