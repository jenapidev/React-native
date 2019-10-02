import React from 'react';
import {
	Text,
	View,
	Image,
	StyleSheet,
	SafeAreaView,
	StatusBar,
	Platform,
	ActivityIndicator,
} from 'react-native';

const Loader = () => {
	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.AndroidSafeArea}>
				<Image
					source={require('../../../assets/logo.png')}
					style={styles.logo}
				/>
				<ActivityIndicator />
			</SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create({
	AndroidSafeArea: {
		paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
	},
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		width: 200,
		height: 80,
		resizeMode: 'contain',
		marginBottom: 10,
	},
});

export default Loader;
