import { connect } from 'react-redux';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import AppNavigator from './AppNavigator';

const AppNavigatorWithState = createReduxContainer(AppNavigator);

function mapStateToProps(state) {
	return {
        state: state.navigation
    }
};

export default connect(mapStateToProps)(AppNavigatorWithState);
