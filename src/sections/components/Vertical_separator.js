import React from 'react';
import {
	Text,
	View,
	StyleSheet
} from 'react-native'


const Separator = (props) => {
	return(
		<View style={[
			styles.separator,
			{
				borderTopColor: (props.color) ? props.color : '#eaeaea',
			}
			]}>
		</View>
	);
}

const styles = StyleSheet.create({
	separator: {
		borderTopWidth: 1,
	}
})

export default Separator