import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Loader from './sections/components/loader';

const AppNavigator = createStackNavigator({
	Home: Loader,
});

//const AppNavigator = createAppContainer(App);

export default AppNavigator;
