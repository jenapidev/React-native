import React from 'react';
import Layout from '../components/Layout';
import Header from '../../sections/components/Header';
import Player from '../../player/containers/Player';
import Close from '../../sections/components/Close';
import Details from '../../videos/components/Details';
import { connect } from 'react-redux';

class Movie extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			header: (
				<Header>
					<Close onPress={() => navigation.goBack()} />
				</Header>
			),
		};
	};

	render() {
		const { movie } = this.props;
		return (
			<Layout>
				<Player />
				<Details {...movie} />
			</Layout>
		);
	}
}

const mapStateToProps = (state) => {
	return { movie: state.videos.selectedMovie };
};

export default connect(mapStateToProps)(Movie);
