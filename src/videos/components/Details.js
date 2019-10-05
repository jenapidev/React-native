import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	Image,
	ScrollView,
	WebView,
} from 'react-native';
//<iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

const makeHtml = (id) => {
	return `
		<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
	`;
};

const Details = (props) => {
	return (
		<ScrollView>
			<View style={styles.top}>
				<Text style={styles.title}>{props.title}</Text>
			</View>
			<View style={styles.bottom}>
				<View style={styles.details}>
					<Image
						style={styles.cover}
						source={{ uri: props.medium_cover_image }}
					/>
					<Text style={styles.description}>{props.description_full}</Text>
				</View>
				{/* <View>
					<WebView
						originWhitelist={['*']}
						source={{
							uhtml: makeHtml(props.yt_trailer_code),
						}}
					/>
				</View> */}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {},
	trailer: {
		height: 200,
		marginBottom: 20,
	},
	trailerVideo: {
		width: 560,
		height: 315,
	},
	details: {
		flexDirection: 'row',
		marginBottom: 20,
	},
	cover: {
		width: 125,
		height: 190,
	},
	title: {
		color: '#44546b',
		fontSize: 18,
		fontWeight: 'bold',
	},
	top: {
		borderBottomWidth: 1,
		borderBottomColor: '#eaeaea',
		padding: 20,
		backgroundColor: 'white',
	},
	bottom: {
		padding: 20,
		flex: 1,
	},
	description: {
		fontSize: 15,
		lineHeight: 22.5,
		color: '#4c4c4c',
		marginLeft: 10,
		flex: 1,
	},
});

export default Details;
