import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native';
import Search from '../../sections/containers/search';
import Icon from '../../sections/components/icon';

class Lucky extends Component {
	static navigationOptions = () => {
		return {
<<<<<<< HEAD
			title: 'Lucky',
=======
			title: 'Feel lucky',
>>>>>>> persistor
			tabBarIcon: <Icon icon='⭐️' />,
			drawerIcon: <Icon icon='⭐️' />,
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
			<View style={styles.container}>
				<Text>🍀</Text>
				<Search />
			</View>
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

export default Lucky;
