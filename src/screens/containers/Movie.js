import React from 'react';
import Layout from '../components/Layout';
import Header from '../../sections/components/Header';
import Player from '../../player/containers/Player';
import Close from '../../sections/components/Close';
import Details from '../../videos/components/Details'
import { connect } from 'react-redux';

class Movie extends React.Component {
	closeVideo = () => {
		this.props.dispatch({
			type: 'SET_SELECTED_MOVIE_FALSE',
		});
	};

	render() {
		const { movie } = this.props;
		return (
			<Layout>
				<Header>
					<Close onPress={this.closeVideo} />
				</Header>
				<Player />
				<Details {...movie} />
			</Layout>
		);
	}
}

const mapStateToProps = (state) => {
	return { movie: state.selectedMovie };
};

export default connect(mapStateToProps)(Movie);
