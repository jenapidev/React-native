import React from 'react';

import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './screens/containers/Home';
import Movie from './screens/containers/Movie';
import Category from './screens/containers/Category';
import Header from './sections/components/Header';
import About from './screens/containers/About';
import Lucky from './screens/containers/Lucky';
import Profile from './screens/containers/Profile';
import Icon from './sections/components/icon';

const Main = createStackNavigator(
	{
		Home,
		Movie,
		Category,
	},
	{
		defaultNavigationOptions: {
			header: Header,
		},
	},
);
//const app = createAppContainer(Main);

const TabNavigator = createBottomTabNavigator(
	{
		Main,
		About,
		Lucky,
		Profile,
	},
	{
		tabBarOptions: {
			activeTintColor: 'white',
			activeBackgroundColor: '#65a721',
			initialRouteName: 'Main',
		},
	},
);

export default switchNavigator = createSwitchNavigator({
	Home: TabNavigator,
});
//const App = createAppContainer(TabNavigator);
