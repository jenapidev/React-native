import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppStore from './store';
import Loader from './src/sections/components/loader';
import AppNavigatorWithState from './src/app-navigator-with-state';
//import AppLayout from './src/app';

// const store = createStore(videos, {});

type Props = {};
export default class App extends React.Component<Props> {
	render() {
		const { store , persistor } = AppStore
		return (
			<Provider store={store}>
				<PersistGate loading={<Loader />} persistor={persistor}>
					<AppNavigatorWithState />
				</PersistGate>
			</Provider>
		);
	}
}
