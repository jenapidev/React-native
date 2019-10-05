import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Close = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress} style={styles.container}>
			<Text style={styles.button}>x</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		fontWeight: 'bold',
		color: 'white',
	},
	container: {
		backgroundColor: '#14b739',
		borderRadius: 12,
		width: 25,
		height: 25,
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
export default Close;
