import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	SafeAreaView,
	StatusBar,
	Platform,
} from 'react-native';

const styles = StyleSheet.create({
	AndroidSafeArea: {
		paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
		backgroundColor: 'white',
	},
	logo: {
		width: 80,
		height: 26,
		resizeMode: 'contain',
	},
	container: {
		paddingVertical: 10,
		paddingHorizontal: 10,
		flexDirection: 'row',
	},
	right: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
});

const Header = (props) => {
	return (
		<View>
			<SafeAreaView style={styles.AndroidSafeArea}>
				<View style={styles.container}>
					<Image
						source={require('../../../assets/logo.png')}
						style={styles.logo}
					/>
					<View style={styles.right}>{props.children}</View>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default Header;
