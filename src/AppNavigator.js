import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './screens/containers/Home';
import Movie from './screens/containers/Movie';
import Category from './screens/containers/Category';
import Header from './sections/components/Header';
import About from './screens/containers/About';
import Lucky from './screens/containers/Lucky';

const Main = createStackNavigator(
	{
		Home: Home,
		Movie: Movie,
		Category: Category,
	},
	{
		defaultNavigationOptions: {
			header: Header,
		},
	},
);
//const app = createAppContainer(Main);

const TabNavigator = createBottomTabNavigator({
	Home: Main,
	About: About,
	Lucky: Lucky,
});

const App = createAppContainer(TabNavigator);

export default App;
