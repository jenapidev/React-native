import React from 'react';
import { Video } from 'expo-av';
import {StyleSheet} from 'react-native';
import Layout from '../components/Layout'

class Player extends React.Component {
	render() {
		return(	
			<Layout video={<Video
	            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
	            rate={1.0}
	            volume={1.0}
	            isMuted={false}
	            resizeMode="cover"
	            shouldPlay={true}
	            isLooping={false}
	            style={styles.video}
	          />}
	      	/>
		);
          
	}
}

const styles = StyleSheet.create({
	video: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		top: 0,
	}
})
export default Player;