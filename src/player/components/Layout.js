import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Layout = ({ video, loader, loading }) => {
	return (
		<View style={styles.container}>
			<View style={styles.video}>{video}</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: '56.25%',
	},
	video: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: 'black',
	},
});

export default Layout;
