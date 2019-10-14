import React, { Component } from 'react';
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Button,
	StatusBar,
<<<<<<< HEAD
=======
	Platform,
>>>>>>> persistor
} from 'react-native';
import { connect } from 'react-redux';
import Icon from '../../sections/components/icon';

class Profile extends Component {
	static navigationOptions = () => {
		return {
			title: 'Profile',
			tabBarIcon: <Icon icon='😎' />,
		};
	};
<<<<<<< HEAD
	componentDidMount() {
		this.focus = this.props.navigation.addListener('didFocus', () => {
			StatusBar.setBarStyle('dark-content');
			StatusBar.setBackgroundColor('white');
		});
	}
	componentWillUnmount() {
		this.focus.remove();
	}
	handleLogout = () => {
		this.props.dispatch({
			type: 'REMOVE_USER',
		});
		this.props.navigation.navigate('Loading');
	};
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Text>{this.props.user.username}</Text>
				<Button
					title='Cerrar sesión'
					color='#67a52e'
					onPress={this.handleLogout}
				/>
=======

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
>>>>>>> persistor
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

<<<<<<< HEAD
function mapStateToProps(state) {
	return {
		user: state.user,
	};
}

export default connect(mapStateToProps)(Profile);
=======
export default Profile;
>>>>>>> persistor
