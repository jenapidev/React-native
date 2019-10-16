import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

class Loadgin extends Component {
	componentDidMount() {
		if (this.props.user) {
			this.props.navigation.navigate('App');
		} else {
			this.props.navigation.navigate('Login');
		}
	}
	render() {
		return <View></View>;
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps)(Loadgin);
