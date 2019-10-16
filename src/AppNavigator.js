import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from './screens/containers/Home';
import Movie from './screens/containers/Movie';
import Category from './screens/containers/Category';
import Header from './sections/components/Header';
import About from './screens/containers/About';
import Lucky from './screens/containers/Lucky';
import Profile from './screens/containers/Profile';
import Login from './screens/containers/Login';
import Icon from './sections/components/icon';
import Loading from './sections/containers/LoadingLayout';

const Main = createStackNavigator(
	{
		Home,
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
		Home: {
			screen: Main,
			navigationOptions: {
				tabBarIcon: <Icon icon='🏠' />,
				drawerIcon: <Icon icon='🏠' />,
			},
		},
		About: { screen: About },
		Lucky: { screen: Lucky },
		Profile: { screen: Profile },
	},
	{
		tabBarOptions: {
			activeTintColor: 'white',
			activeBackgroundColor: '#65a721',
		},
	},
);

const withModal = createStackNavigator(
	{
		Home: {
			screen: TabNavigator,
		},
		Movie: Movie,
	},
	{
		mode: 'modal',
		headerMode: 'none',
		defaultNavigationOptions: {
			gesturesEnabled: true,
		},
	},
);

const DrawerNavigator = createDrawerNavigator(
	{
		Main: {
			screen: withModal,
			navigationOptions: {
				title: 'Home',
				drawerIcon: <Icon icon='🏠' />,
			},
		},
		About: {
			screen: About,
		},
		Lucky: {
			screen: Lucky,
		},
	},
	{
		drawerWidth: 200,
		drawerBackgroundColor: '#f6f6f6',
		contentOptions: {
			activeBackgroundColor: '#7aba2f',
			activeTintColor: 'white',
			inactiveTintColor: '#828282',
			inactiveBackgroundColor: 'white',
			itemStyle: {
				borderBottomWidth: 0.5,
				borderBottomColor: 'rgba(0,0,0,.5)',
			},
			labelStyle: {
				marginHorizontal: 0,
			},
			iconContainerStyle: {
				marginHorizontal: 5,
			},
		},
	},
);

const SwitchNavigator = createSwitchNavigator(
	{
		App: DrawerNavigator,
		Loading: Loading,
		Login: Login,
	},
	{
		initialRouteName: 'Loading',
	},
);

export default SwitchNavigator;
